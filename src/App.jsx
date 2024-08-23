import Intro from "./Intro/Intro"
import About from "./About/About"
import Experience from "./Experience/Experience"
import Project from "./Project/Project"
function App() {

  return(
    <>
      <Intro/>
      <About/>
      <h2>Experience</h2>
      <Experience name="System Administrator" location="Wilkes University" 
      startMonth="Jun" startYear={2024} present={true}
      content="Managed workstations utilized by over 100 people using Ansible and Migrated 30 machines over from 
      Ubuntu 24.04 to Pop!_OS 22.04 and configured several software including OpenSSH and NFS" utilities={["Bash","Ansible","Linux"]}/>

      <Experience name="Cloud Researcher" location="Wilkes University" 
      startMonth="Jun" startYear={2024} endMonth="Aug" endYear={2024} 
      content="Developed a 4 node, Kubernetes cluster to simulate an Amazon EKS environment, 
      utilizing several Kubernetes services such as Ingress and Persistent Volume Claims" utilities={["Kubernetes","Docker","Wordpress","Linux"]}/>

      <h2>Projects</h2>
      <Project name="CipherX" link="https://github.com/NateMartes/CipherX" utilities={["Java","MySQL","Git"]}/>

      <Project name="CipherX" link="https://github.com/NateMartes/CipherX" utilities={["Java","MySQL","Git"]}/>

      <Project name="CipherX" link="https://github.com/NateMartes/CipherX" utilities={["Java","MySQL","Git"]}/>

      <p>Built In React JS, Inspired by <a href="https://brittanychiang.com/">Brittany Chiang</a></p>
    </>
  )
}
export default App
