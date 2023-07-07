import './style.scss'

function Localisation({title, location}) {
    return (
        <div id='localisation-container'>
            <h2>{title}</h2>
            <h3>{location}</h3>
        </div>
    )
}

export default Localisation