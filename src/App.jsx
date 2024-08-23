import Intro from "./Intro/Intro"
import About from "./About/About"
import Experience from "./Experience/Experience"
function App() {

  return(
    <>
      {/*brittanychiang.com very good website!!!*/}
      <Intro/>
      <About/>
      <h2>Experience</h2>
      <Experience name="Cloud Researcher" location="Wilkes University" 
      startMonth="Jun" startYear={2024} endMonth="Aug" endYear={2024} 
      content="Developed a 4 node, Kubernetes cluster to simulate an Amazon EKS environment, 
      utilizing several Kubernetes services such as Ingress and Persistent Volume Claims" utilities={["Kubernetes","Docker","Wordpress"]}/>
    </>
  )
}
export default App
