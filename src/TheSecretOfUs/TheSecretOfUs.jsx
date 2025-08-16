import styles from "./TheSecretOfUs.module.css"
import downArrow from "/assets/down-arrow.svg"
import cinnamaroll from "/assets/cinnamaroll.png"
import catHeart from "/assets/cat-heart.jpeg"
import catNerd from "/assets/cat-nerd.jpg"
import shark from "/assets/shark.jpeg"
import berries from "/assets/berries.jpeg"
import motivation from "/assets/motivation.jpeg"

import { useEffect, useState } from "react"

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
      <div className={styles.theSecretOfUs}>
        <h2>If you're reading this, I want you to know that...</h2>
        <img className={styles.theSecretOfUsDownArrow} src={downArrow} type="svg"/>
      </div>
      <div className={styles.theSecretOfUs}>
        <img src={catHeart} height="250px" width="250px" />
        <h2>I LOVE YOU!!! And I'll use this whole page to tell you how much I love you!</h2>
        <img className={styles.theSecretOfUsDownArrow} src={downArrow} type="svg"/>
      </div>
      <div className={styles.theSecretOfUs}>
        <img src={catNerd} height="250px" width="250px" />
        <h2>I love you more than the digits in PI, which there are over 100 trillon according to Google. :)</h2>
        <img className={styles.theSecretOfUsDownArrow} src={downArrow} type="svg"/>
      </div>
      <div className={styles.theSecretOfUs}>
        <img src={cinnamaroll} height="250px" width="250px" />
        <h2>I love you because you smell so amazing, just like this wild Cinamaroll.</h2>
        <img className={styles.theSecretOfUsDownArrow} src={downArrow} type="svg"/>
      </div>
      <div className={styles.theSecretOfUs}>
        <img src={shark} height="250px" width="250px" />
        <h2>I love you because you're so silly and you're silly with me, just like this <i><strong>hammer</strong>head</i> shark. Get it? cause it's a
         ... well you get the point...</h2>
        <img className={styles.theSecretOfUsDownArrow} src={downArrow} type="svg"/>
      </div>
      <div className={styles.theSecretOfUs}>
        <img src={berries} height="250px" width="250px" />
        <h2>This is us by the way.</h2>
        <img className={styles.theSecretOfUsDownArrow} src={downArrow} type="svg"/>
      </div>
      <div className={styles.theSecretOfUs}>
        <img src={motivation} height="250px" width="250px" />
        <h2>I love you because you motivate me to be the best version of myself, and I am forever grateful for that baby.</h2>
        <img className={styles.theSecretOfUsDownArrow} src={downArrow} type="svg"/>
      </div>
    </>
  );
}

export default TheSecretOfUs;
