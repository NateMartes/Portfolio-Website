import styles from './About.module.css';
import { useState, useEffect } from 'react';
function About(){
    const [isVisible, setIsVisible] = useState(false);
    return(
        <div className={`${styles.main} ${isVisible ? 'show' : ''}`}>
            <h2>About</h2>
            <p>My passion for programming started in high school, where I began by creating simple—and sometimes humorous—platformer games. 
                Those early projects sparked a curiosity that led me to explore the deeper layers of the software world. As I delved further, 
                I realized how integral software is to our daily lives, shaping everything from how we 
                communicate to how we solve complex problems. This journey has not only honed my technical skills but also deepened my understanding of the profound impact that software has on society. 
                My drive to contribute to this ever-evolving 
                field continues to grow as I learn more about its limitless possibilities.
            </p>
        </div>
    )
}
export default About
