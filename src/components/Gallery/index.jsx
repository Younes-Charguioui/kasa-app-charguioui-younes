import Item from "../Item"
import data from '../../data/logements.json';
import './style.scss'

function Gallery() {
    return (
        <div id="gallery-container">
            {data.map(({id, title, cover}) => <Item key={id} id={id} title={title} image={cover}/>  )}
        </div>
    )
}

export default Gallery