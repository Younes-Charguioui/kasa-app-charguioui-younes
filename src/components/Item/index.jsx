import { Link } from 'react-router-dom'
import './style.scss'

function Item({id, title, image}) {
    return (
        <Link to={`location/${id}`}>
            <div id='item-container'>
                <img src={image} alt={`Interieur d'une location - ${id}`} />
                <h2>{title}</h2>
            </div>
        </Link>
    )
}

export default Item