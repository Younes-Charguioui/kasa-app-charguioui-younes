import './style.scss'

function Hote({host}) {
    const [firstName, lastName] = host.name.split(' ');
    return (
        <div id='hote-container'>
            <div id='hote-name'>
                <span>{firstName}</span>
                <span>{lastName}</span>
            </div>
            <img src={host.picture} alt="Représentation de l'hôte" />
        </div>
    )
}

export default Hote