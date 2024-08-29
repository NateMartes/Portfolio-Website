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
      <Experience name="System Administrator" location="Wilkes University" 
      startMonth="Jun" startYear={2024} present={true}
      content="Managed workstations utilized by over 100 people using Ansible and Migrated 30 machines over from 
      Ubuntu 24.04 to Pop!_OS 22.04 and configured several software including OpenSSH and NFS. Mangned several 100 users across the University." utilities={["Bash","Ansible","Linux"]}/>

      <Experience name="Cloud Researcher" location="Wilkes University" 
      startMonth="Jun" startYear={2024} endMonth="Aug" endYear={2024} 
      content="Developed a 4 node, Kubernetes cluster to simulate an Amazon EKS environment, 
      utilizing several Kubernetes services such as Ingress and Persistent Volume Claims. 
      Created a WordPress website to display undergraduate research of Harper’s Monthly Pulpit." utilities={["Kubernetes","Docker","Wordpress","Linux"]}/>

      <Experience name="Data Research Assitant" location="Wilkes University" 
      startMonth="Jan" startYear={2024} endMonth="Mar" endYear={2024} 
      content="Analyzed methodological diversity of over 77 academic professors to find correlations in methodologies across disciplines. 
              Utilized Python to create a Spearman Correlation Matrix, revealing 2 out of 12 axes being moderately correlated. Displayed results using Tableau, scoring 89 out of 100 on the judging 
              report at the 78th Annual Eastern Colleges Science Conference (ECSC) at Niagara University." utilities={["Python","Tableau"]}/>

      <h2>Projects</h2>
      <Project name="CipherX" 
      content="Built a GUI application with a team
      that allows users to save, copy, import, and export passwords. All passwords are stored behind a
      vault password that is hashed using the SHA-256 algorithm. Importing and exporting passwords is done via OpenCSV." 
      link="https://github.com/NateMartes/CipherX" img="src/assets/cipherx.avif" utilities={["Java","MySQL","Git"]}/>

      <Project name="Recipe Book" 
      content="Utilized Python and the Tkinter Library to create a GUI Recipe Book with a team. Users can view over 50 recipes and add their own.
      Recipes are stored using JSON." img="src/assets/recipebook.avif" utilities={["Python"]}/>

      <p>Built In React JS, Inspired by <a href="https://brittanychiang.com/">Brittany Chiang</a></p>
    </div>
  )
}
export default App
