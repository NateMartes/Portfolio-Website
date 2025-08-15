import styles from "./TheSecretOfUs.module.css"
import downArrow from "/assets/down-arrow.svg"
import cinnamaroll from "/assets/cinnamaroll.png"
import { useEffect } from "react"

function TheSecretOfUs() {

  // Needed to overwrite :root properties, This probably shouldn't be done in a enterprise environment
  useEffect(() => {

    document.documentElement.style.backgroundColor = "#FF5C77";
    document.documentElement.style.padding = "0";
    document.documentElement.style.scrollSnapType = "y mandatory";
    
    return () => {
      document.documentElement.style.backgroundColor = "";
      document.documentElement.style.padding = "";
      document.documentElement.style.scrollSnapType = "";
    };

  }, []);

  return (
    <>
      <h1 className={styles.theSecretOfUs}> Hello World! </h1>
      <h1 className={styles.theSecretOfUs}> Hello World! </h1>
      <div className={styles.theSecretOfUs}>
        <h1> Hello World! </h1>
        <img class={styles.theSecretOfUsDownArrow} src={downArrow} type="svg"/>
      </div>
      <div className={styles.theSecretOfUs}>
        <img src={cinnamaroll} />
        <h1> Hello World! </h1>
        <img class={styles.theSecretOfUsDownArrow} src={downArrow} type="svg"/>
      </div>
    </>
  );
}

export default TheSecretOfUs;
