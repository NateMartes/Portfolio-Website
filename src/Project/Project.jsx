import styles from './Project.module.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
function Project(props){

    function getIcon(name){
        switch (name){
            case "Docker":
                return "/assets/docker.svg";
            case "Kubernetes":
                return "/assets/kubernetes.svg";
            case "Wordpress":
                return "/assets/wordpress.svg";
            case "Linux":
                return "/assets/linux.svg";
            case "Bash":
                return "/assets/bash.svg";
            case "Ansible":
                return "/assets/ansible.svg";
            case "Java":
                return "/assets/java.svg";
            case "MySQL":
                return "/assets/mysql.svg";
            case "Git":
                return "/assets/git.svg";
            case "Python":
                return "/assets/python.svg";
            case "Tableau":
                return "/assets/tableau.svg";
        }
    }
    const [isVisible, setIsVisible] = useState(false);
    return(
        <div className={`${styles.main} ${isVisible ? 'show' : ''}`}>
            <img src={props.img ? props.img: "/assets/elementor-placeholder-image.avif"} width={200} height={150}></img>
            <div className={styles.projectMain}>
                <h3>{props.link ? <a href={props.link}>{props.name}<img src="/assets/open.svg"></img></a> : props.name}</h3>
                <p></p>
                <p>{props.content}</p>
                <div className={styles.icons}>
                    {props.utilities.map((utility, index) => {
                        const icon = getIcon(utility);
                        return <img className={styles.icon} src={icon} key={index} alt={`${utility} icon`}/>
                    })}
                </div>
            </div>
        </div>
    )
}
Project.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.string,
    img: PropTypes.string,
    utilities: PropTypes.arrayOf(PropTypes.string)
}
Project.defaultProps = {
    name: "Name",
    link: null,
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam obcaecati recusandae dignissimos \
    iste maiores, alias modi magni sit dolorum eveniet. Voluptas nisi molestiae aliquid autem corrupti excepturi fugit aut fuga",
    img: null,
    utilities:[""]
}
export default Project
