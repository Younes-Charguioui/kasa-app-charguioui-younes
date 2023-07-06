import './style.scss'

function Item({key, title, image}) {
    return (
        <div id='item-container'>
            <img src={image} alt={`Interieur d'une location - ${key}`} />
            <h2>{title}</h2>
        </div>
    )
}

export default Item