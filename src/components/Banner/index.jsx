import './style.scss'

function Banner({image, text}) {
    return (
        <div id='banner-container'>
            <img src={image} alt="contenu de la banière" />
            {text.length > 0 && <h2>{text}</h2>}
        </div>
    )
}

export default Banner