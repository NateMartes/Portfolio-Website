import PropTypes from 'prop-types';

export default function Experience(props) {
  return (
    <div>
      <p>{props.start}{props.end != null ? `to ${props.end}` : ""}</p>
      <ul className="list-disc flex flex-col gap-2">
        {props.whatidid.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

Experience.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
  whatidid: PropTypes.arrayOf(PropTypes.string)
}