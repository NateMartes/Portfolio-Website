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
                field continues to grow as I learn more about its limitless possibilities.</p>
            <p>I have experience working with various programming languages and software tools, including: JavaScript, Java, Python, Kubernetes, Docker, and 
                Git. Outside of tech, I am also an Assistant Instructor at a martial arts school, where I lead several students, teaching them several 
                self-defense techniques and martial arts forms. My diverse experiences reflect my dedication to both technology and community. I'm a driven 
                Computer Science Honors student, committed to continuously enhancing my skills and knowledge in the ever-evolving tech landscape.</p>
        </div>
    )
}
export default About