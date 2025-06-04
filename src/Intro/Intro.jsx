import styles from './Intro.module.css';
import Github from '/assets/github.svg';
import LinkedIn from '/assets/linkedIn.svg';
import Instagram from '/assets/instagram.svg';
import MediumBlog from '/assets/blog.svg';

import { useState, useEffect } from 'react';
function Intro(){
    const [isVisible, setIsVisible] = useState(false);
    return(
        <div className={`${styles.main} ${isVisible ? 'show' : ''}`}>
            <h1>Nathaniel Martes</h1>
            <p>Refining My Developer Skills, One Line at a Time</p>
            <div className={styles.icons}>
                <a href="https://www.instagram.com/nate_0901/" ><img className={styles.icon} src={Instagram} alt="Instagram Icon"/></a>
                <a href="https://www.linkedin.com/in/nathaniel-martes/"><img className={styles.icon} src={LinkedIn} alt="LinkedIn Icon"/></a>
                <a href="https://github.com/NateMartes"><img className={styles.icon} src={Github} alt="Github Icon"/></a>
                <a href="https://medium.com/@nathaniel.martes.business"><img className={styles.icon} src={MediumBlog} alt="Medium Blog"/></a>
            </div>
        </div>
    )
}
export default Intro
