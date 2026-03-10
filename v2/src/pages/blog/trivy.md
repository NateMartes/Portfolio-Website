---
layout: ../../layouts/BlogPostLayout.astro
title: "Automating Vulnerability Discovery using Trivy in Distributed Systems"
description: "Learn how to automate package vulnerability discovery in distributed systems using Aqua Trivy, Elasticsearch, and Python."
date: 2026-03-10
---
# Automating Vulnerability Discovery using Trivy in Distributed Systems

## Package Vulnerability Discovery using Aqua Trivy

Package vulnerabilities are found everyday in even the most useful software. It was inevitable that tools would come out to assist in the discovery of such vulnerabilities.

Trivy is a DevSecOps tool that discovers vulnerabilities in container images, filesystems, and in our use case, software packages. The tool pulls data from Common Vulnerability and Exposures (CVE) Databases and crosschecks it with the data you give it to inform you about vulnerabilities within your software. You can view the list of data sources Trivy uses here.

In a distributed system, there are many packages to keep track of, but we can use Trivy to make this job easier. First, we need to find out what kind of data Trivy needs in order to scan packages. Then we will find the best approach to use Trivy in our system. Then we will build our pipeline which will discover vulnerabilities in Operating System (OS) packages. Let’s start!

---

## The Inputs

So Trivy can scan several things, such as a container image, filesystem, and Software Bill of Materials (SBOM) just to name a few. Now it looks like we can just give it our filesystem, and job’s done right? We can use the following command:

```bash
trivy fs --skip-dirs /what_we_dont_want_to_scan /what_we_want_to_scan --format json > trivy-report.json

```

On Linux to scan our filesystem’s packages. This will take a while if you have a lot of packages installed, but it easily is the most accurate scan we can have. Another way we can scan our system is using a SBOM. This file is a report containing a list of all of your software libraries you want to scan. Some important pieces of information in the SBOM are:

* OS name and version
* Package name and version
* Package manager
* Package type

```json
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.4",
  "version": 1,
  "metadata": {
    "component": {
      "type": "operating-system",
      "bom-ref": "os-component",
      "name": "ubuntu",
      "version": "24.04"
    }
  },
  "components": [
    {
      "bom-ref": "pkg:deb/ubuntu/openssl@3.0.2-0ubuntu1.12",
      "type": "library",
      "name": "openssl",
      "version": "3.0.2-0ubuntu1.12",
      "purl": "pkg:deb/ubuntu/openssl@3.0.2-0ubuntu1.12"
    },
    {
      "bom-ref": "pkg:deb/ubuntu/python3@3.10.6-1~22.04",
      "type": "application",
      "name": "python3",
      "version": "3.10.6-1~22.04",
      "purl": "pkg:deb/ubuntu/python3@3.10.6-1~22.04"
    }
  ]
}

```

We can give this file to Trivy using the following command:

```bash
trivy sbom --format json my-sbom.json

```

Which will scan a SBOM report and output a JSON Trivy report. This would be much faster as Trivy does not need to discover packages, we give Trivy the packages to scan. Now with these ways known, which will be best for our distributed system?

---

## Which Input do we Use?

Between the options we have gone over let’s look at the architecture of each. When using our filesystem, we have to scan the filesystem of every machine and then report the vulnerabilities.

### Aqua Trivy in a Distributed System

This would report accurate results since it can scan the actual library files, but it is a pretty slow approach. However, this will usually be done once a day so the speed doesn’t really matter. More pressing problems may be:

* Scanning the same package multiple times.
* Reporting packages that were reported in by a different system.

If every system reports that the same package has vulnerabilities, it may become repetitive to see the same package appear in every report. A different approach we can use is one Trivy instance.

### Package Vulnerability Discovery using Aqua Trivy

With this architecture, we can send the installed system packages to some central database which Trivy can pull from and report all vulnerabilities at once. We can use the Trivy’s SBOM scanner instead of the filesystem since we won’t have the actual packages. Since our database will have package data, we can use it for something else more than just vulnerability reporting, which we won’t get in to. Now, with this system, there are 3 main parts to our pipeline:

1. Sending package data which we will call “The Agent”.
2. Generating SBOMs from package data and performing vulnerability analysis on them.
3. Automating the pipeline.

---

## The Agent

The agent will be responsible for sending software packages from itself to the central server. For example, if we are using Elasticsearch for our central package storage, an agent script could appear as something like:

```bash
#!/bin/bash

ES_HOST="https://my-central-server:9200"
INDEX_NAME="packages"

# Most Linux distros store os information in /etc/os-release
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS_NAME=${NAME:-"Unknown OS"}
    OS_VERSION=${VERSION_ID:-"Unknown Version"}
else
    OS_NAME="Unknown OS"
    OS_VERSION="Unknown Version"
fi

# dpkg-query fetches the exact package and version
# awk formats it into the two-line NDJSON format required by the _bulk API, now including OS info
# curl takes the piped output (@-) and sends it to the server
dpkg-query -W -f='${binary:Package}\t${Version}\n' | \
awk -v index="$INDEX_NAME" -v os_name="$OS_NAME" -v os_version="$OS_VERSION" '{
    # Create the action/metadata line
    printf "{\"index\": {\"_index\": \"%s\"}}\n", index;
    
    # Create the document data line with the new OS fields
    printf "{\"package\": \"%s\", \"version\": \"%s\", \"os_name\": \"%s\", \"os_version\": \"%s\"}\n", $1, $2, os_name, os_version;
}' | \
curl -s -X POST "$ES_HOST/_bulk" \
     -H "Content-Type: application/x-ndjson" \
     --data-binary @-

```

The script will vary on your setup like if you are running a Syslog server, Non-aptitude servers, or have an ETL pipeline before your actual database for example.

---

## Generating and Scanning Software Bill of Materials

Now with the packages in the database, we can pull them and turn them into SBOMs since we know we can perform vulnerability analysis on them. This process can be broken down into three steps:

1. Pull packages from the database
2. Format packages into SBOM valid JSON
3. Store SBOMs for future use by trivy

We can use a Python script to do this. We will still be using Elasticsearch as our example but change the script to fit your needs.

```python
import requests
import json
import urllib3
import sys
from collections import defaultdict

ES_HOST = "https://my-central-server:9200"
INDEX_NAME = "packages"

def fetch_all_packages():
    """Fetches all documents from the Elasticsearch index using the Scroll API."""
    
    url = f"{ES_HOST}/{INDEX_NAME}/_search?scroll=2m"
    headers = {"Content-Type": "application/json"}
    
    payload = {
        "size": 1000,
        "query": {"match_all": {}}
    }

    response = requests.post(url, json=payload, headers=headers)
    response.raise_for_status()
    data = response.json()
    
    scroll_id = data.get('_scroll_id')
    hits = data['hits']['hits']
    all_docs = []

    while hits:
        for hit in hits:
            all_docs.append(hit['_source'])
        
        scroll_url = f"{ES_HOST}/_search/scroll"
        scroll_payload = {
            "scroll": "2m",
            "scroll_id": scroll_id
        }
        response = requests.post(scroll_url, json=scroll_payload, headers=headers)
        data = response.json()
        scroll_id = data.get('_scroll_id')
        hits = data['hits']['hits']

    return all_docs

```

This function will pull from Elasticsearch using the scroll API and pull all of the documents we stored. Now we must turn those documents into SBOMs.

```python
def generate_sboms_and_scan(packages):
    """Groups packages by OS, generates an SBOM for each, and triggers a Trivy scan."""
    grouped_packages = defaultdict(list)
    
    for pkg in packages:
        os_name = pkg.get("os_name", "unknown-os")
        os_version = pkg.get("os_version", "unknown-version")
        grouped_packages[(os_name, os_version)].append(pkg)

    for (os_name, os_version), pkgs in grouped_packages.items():
        safe_os_name = os_name.lower().replace(" ", "-")
        
        components = []
        for pkg in pkgs:
            pkg_name = pkg.get('package', 'unknown-package')
            pkg_version = pkg.get('version', 'unknown-version')
            purl = f"pkg:deb/{safe_os_name}/{pkg_name}@{pkg_version}"
            
            components.append({
                "bom-ref": purl,
                "type": "library",
                "name": pkg_name,
                "version": pkg_version,
                "purl": purl
            })

        sbom = {
            "bomFormat": "CycloneDX",
            "specVersion": "1.4",
            "version": 1,
            "metadata": {
                "component": {
                    "type": "operating-system",
                    "bom-ref": "os-component",
                    "name": safe_os_name,
                    "version": os_version
                }
            },
            "components": components
        }

        filename = f"sbom_{safe_os_name}_{os_version}.json".replace("/", "-")
        with open(filename, 'w') as f:
            json.dump(sbom, f, indent=2)
        
        scan_sbom_with_trivy(filename)

```

This successfully generates our SBOMs and stores them in local files, then performs a Trivy scan.

> **Note:** Since we only collect OS name, OS version, package name, and version, we cannot say what type of the package it is (library, application) or where the package came from (deb, rpm). This could lead to false positives from Trivy so consider pulling more data for more detailed SBOMs.

Now with the file made, we will scan it with Trivy using Python’s `subprocess` module:

```python
def scan_sbom_with_trivy(sbom_filename):
    """Uses subprocess to call Trivy and scan the generated SBOM."""
    report_filename = sbom_filename.replace("sbom_", "trivy_report_")
    
    command = ["trivy", "sbom", "--format", "json", sbom_filename]
    
    try:
        result = subprocess.run(command, capture_output=True, text=True, check=True)
        
        with open(report_filename, 'w') as f:
            f.write(result.stdout)
        
    except FileNotFoundError:
        print("Error: The 'trivy' command was not found.", file=sys.stderr)
    except subprocess.CalledProcessError as e:
        print(f"Error output: {e.stderr}\n", file=sys.stderr)

```

This will scan the SBOMs and store the report in a JSON file. Make sure to ensure that the Trivy command is in the user’s `$PATH` or that you use the full path instead.

---

## Automating the Pipeline

Automating the pipeline is easy using cron jobs. We can setup 2 cron jobs:

One to run on clients to send package data to the central server:

```bash
0 0 * * * /path/to/agent.sh

```

One to run on the central server to perform analysis:

```bash
0 0 * * * python3 /path/to/python/executable

```

> **Note:** Since the python script might have dependencies, you might want to spin up a container instead of running the script directly. Make sure you install Trivy on the container if so. You will also need to run the container on `network=host` mode so it can see your database if it runs on the same machine.

---

## Next Steps

Now that we have a pipeline to automate vulnerability discovery, we can do many things with this pipeline at multiple steps.

We can send more package data to better our results such as package types and distribution type. We can take our data and develop graphs and charts to visualize our data to have more observability over our distributed system. We can, and should, add notifications on reported packages, perhaps by email, Jira tickets, or even Slack messages. There is much more functionality we can add to improve the pipeline even further.

---

## Conclusion

Trivy is a powerful tool that can be used to increase observability in your distributed system, and provide more security. We can use these methods to put them into practice and potentially add even more integrations. I hope readers can use these methods effectively and even improve upon them from what I have said.

---
