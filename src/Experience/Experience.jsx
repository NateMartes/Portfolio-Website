import styles from './Experience.module.css';
import PropTypes from 'prop-types';
function Experience(props){

    function getIcon(name){
        switch (name){
            case "Docker":
                return "src/assets/docker.svg";
            case "Kubernetes":
                return "src/assets/kubernetes.svg";
            case "Wordpress":
                return "src/assets/wordpress.svg";
        }
    }
    return(
        <div className={styles.main}>
            <p>{`${props.startMonth} ${props.startYear} — ${props.endMonth} ${props.endYear}`}</p>
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
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam obcaecati recusandae dignissimos \
    iste maiores, alias modi magni sit dolorum eveniet. Voluptas nisi molestiae aliquid autem corrupti excepturi fugit aut fuga",
    utilities:[""]
}
export default Experience