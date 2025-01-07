import styles from './Experience.module.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
function Experience(props){

    const endStatus = props.present ? "Present" : `${props.endMonth} ${props.endYear}`
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
            case "Azure":
                return "/assets/azure.svg";
            case "Node.JS":
                return "/assets/nodejs.svg";
            case "TypeScript":
                return "/assets/typescript.svg";
        }
    }
    const [isVisible, setIsVisible] = useState(false);
    return(
        <div className={`${styles.main} ${isVisible ? 'show' : ''}`}>
            <p>{`${props.startMonth} ${props.startYear} — ${endStatus}`}</p>
            <div className={styles.experienceMain}>
                <h3>{props.name} | {props.location}</h3>
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
Experience.propTypes = {
    name: PropTypes.string,
    location: PropTypes.string,
    startMonth: PropTypes.string,
    startYear: PropTypes.number,
    endMonth: PropTypes.string,
    endYear: PropTypes.number,
    present: PropTypes.bool,
    content: PropTypes.string,
    utilities: PropTypes.arrayOf(PropTypes.string)
}
Experience.defaultProps = {
    name: "Name",
    location: "Where",
    startMonth: "MONTH",
    startYear: 9999,
    endMonth: "MONTH",
    endYear: 9999,
    present: false,
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam obcaecati recusandae dignissimos \
    iste maiores, alias modi magni sit dolorum eveniet. Voluptas nisi molestiae aliquid autem corrupti excepturi fugit aut fuga",
    utilities:[""]
}
export default Experience
