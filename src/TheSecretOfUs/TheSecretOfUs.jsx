import styles from "./TheSecretOfUs.module.css"
import { useEffect } from "react"

function TheSecretOfUs() {

  // Needed to overwrite :root properties, This probably shouldn't be done in a enterprise environment
  useEffect(() => {

    document.documentElement.style.backgroundColor = "#FF5C77";
    document.documentElement.style.padding = "0";
    
    return () => {
      document.documentElement.style.backgroundColor = "";
      document.documentElement.style.padding = "";
    };

  }, []);

  return (
    <div className={styles.theSecretOfUs}>
      <p> Hello World! </p>
    </div>
  );
}

export default TheSecretOfUs;
