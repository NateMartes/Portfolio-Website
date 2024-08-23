import styles from './Intro.module.css';
import Github from '../assets/github.svg';
import LinkedIn from '../assets/linkedIn.svg';
import Instagram from '../assets/Instagram.svg';
function Intro(){
    return(
        <div className={styles.main}>
            <h1>Nathaniel Martes</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reprehenderit totam libero, 
                facilis adipisci necessitatibus doloribus porro omnis?</p>
            <div className={styles.icons}>
                <a href="https://www.instagram.com/nate_0901/" ><img className={styles.icon} src={Instagram} alt="Instagram Icon"/></a>
                <a href="https://www.linkedin.com/in/nathaniel-martes/"><img className={styles.icon} src={LinkedIn} alt="LinkedIn Icon"/></a>
                <a href="https://github.com/NateMartes"><img className={styles.icon} src={Github} alt="Github Icon"/></a>
            </div>
        </div>
    )
}
export default Intro