import Intro from "./Intro/Intro"
import About from "./About/About"
import Experience from "./Experience/Experience"
import Project from "./Project/Project"
import { useState, useEffect } from 'react';
function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true)
  }, [])
  return(
    <div className={`hidden ${isVisible ? 'show' : ''}`}>
      <Intro/>
      <About/>
      <h2>Experience</h2>

      <Experience name="DevSecOps Engineer Intern" location="Software Engineering Institute"
      startMonth="May" startYear={2025} present={true}
      content="Applied Systems Maintainer for Software Engineering Research."
      utilities={[]}
      />

      <Experience name="System Administrator Intern" location="Wilkes University" 
      startMonth="Jun" startYear={2024} present={true}
      content="I manage Linux workstations used by over 1,100 people with Ansible, including migrating 30 machines from Ubuntu 24.04 to Pop!_OS 22.04. 
      Configured key software such as OpenSSH and NFS. Also set up SSL certificates using Let’s Encrypt for university websites accessed by professors and students." utilities={["Bash","Ansible","Linux"]}/>

      <Experience name="DevOps Engineer Intern" location="Wilkes University" 
      startMonth="Jun" startYear={2024} endMonth="Aug" endYear={2024} 
      content="I Developed a scalable 4-node Kubernetes cluster to simulate an Amazon EKS environment, 
      leveraging Kubernetes services like Ingress and Persistent Volume Claims. Built a WordPress website with over 15 pages to showcase 
      undergraduate research on Harper’s Monthly Pulpit." utilities={["Kubernetes","Docker","Wordpress","Linux","HTML","CSS"]}/>

      <Experience name="Data Science Intern" location="Wilkes University" 
      startMonth="Jan" startYear={2024} endMonth="Mar" endYear={2024} 
      content="I Analyzed methodological diversity of over 77 academic professors to find correlations in methodologies across disciplines. 
              Utilized Python to create a Spearman Correlation Matrix, revealing 2 out of 12 axes being moderately correlated. Displayed results using Tableau, scoring a 89% on the judging 
              report at the 78th Annual Eastern Colleges Science Conference (ECSC) at Niagara University." utilities={["Python","Tableau"]}/>

      <h2>Projects</h2>

      <Project name="RoomReady (AI Image Anaylsis Web App), HenHacks 1st Place Hackaton Winner"
      content="The app takes user uploaded images about a room they are interested for 
      preparing for natural disasters. Then we use selective prompting and generative AI on the received image. 
      Then we give back the user a risk analysis report about risks in the room. We also give them with a check list and a list of improvements to make in the room."
      link="https://devpost.com/software/roomready" img="/assets/roomready.avif" utilities={["Python","FastAPI","AI","TypeScript","React","Git","Docker"]}/>

      <Project name="Wilkes University Course Web Scraper"
      content="Created a parallel web scraper to gather Wilkes University’s course data using Golang, MongoDB, and Docker.
      Implemented a RESTful API to query a NoSQL database with dynamic query parameters."
      link="https://github.com/Ichmagkase/WilkesU-Course-Web-Scraper" img="/assets/wilkes-scrapy.avif" utilities={["Go","MongoDB","HTML","Git","Docker"]}/>

      <Project name="HTTP Server From Scratch"
      content="Developed a HTTP server using Node.JS, Node.JS’s .net library, and TypeScript. 
      Implemented a TCP server with a dynamic buffer to correctly parse HTTP requests and send HTTP responses depending on the corresponding URI."
      link="https://github.com/NateMartes/HTTP-Server" img="/assets/http.avif" utilities={["NodeJS","TypeScript","Git"]}/>

      <Project name="Password Manager" 
      content="Built a GUI application with a team of 3
      that allows users to save, copy, import, and export passwords. All passwords are stored behind a
      vault password that is hashed using the SHA-256 algorithm. Importing and exporting passwords is done via OpenCSV." 
      link="https://github.com/NateMartes/CipherX" img="/assets/cipherx.avif" utilities={["Java","MySQL","Git"]}/>

      <Project name="Recipe Book" 
      content="Utilized Python and the Tkinter Library to create a GUI Recipe Book with a team. Users can view over 50 recipes and add their own.
      Recipes are stored using JSON." img="/assets/recipebook.avif" utilities={["Python"]}/>

      <p>Built In React JS, Inspired by <a href="https://brittanychiang.com/">Brittany Chiang</a></p>
    </div>
  )
}
export default App
