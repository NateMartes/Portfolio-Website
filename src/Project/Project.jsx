import styles from './Project.module.css';
import PropTypes from 'prop-types';
function Project(props){

    function getIcon(name){
        switch (name){
            case "Docker":
                return "src/assets/docker.svg";
            case "Kubernetes":
                return "src/assets/kubernetes.svg";
            case "Wordpress":
                return "src/assets/wordpress.svg";
            case "Linux":
                return "src/assets/linux.svg";
            case "Bash":
                return "src/assets/bash.svg";
            case "Ansible":
                return "src/assets/ansible.svg";
            case "Java":
                return "src/assets/java.svg";
            case "MySQL":
                return "src/assets/mysql.svg";
            case "Git":
                return "src/assets/git.svg";
        }
    }
    return(
        <div className={styles.main}>
            <img src="src/assets/elementor-placeholder-image.avif" width={200} height={150}></img>
            <div className={styles.projectMain}>
                <h3><a href={props.link}>{props.name}<img src="src/assets/open.svg"></img></a></h3>
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
    utilities: PropTypes.arrayOf(PropTypes.string)
}
Project.defaultProps = {
    name: "Name",
    link: "www.github.com",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam obcaecati recusandae dignissimos \
    iste maiores, alias modi magni sit dolorum eveniet. Voluptas nisi molestiae aliquid autem corrupti excepturi fugit aut fuga",
    utilities:[""]
}
export default Project