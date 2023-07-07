import './style.scss'
import arrowD from '../../assets/arrow-d.png'
import arrowG from '../../assets/arrow-g.png'
import { useState } from 'react';

function Caroussel({images}){
    const nbImages = images.length;
    const [index, setIndex] = useState(0);

    const imagePrecedente = () => (
            index === 0 ? setIndex(nbImages-1) : setIndex(index-1)
        )
    const imageSuivante = () => (
            index === (nbImages-1) ? setIndex(0) : setIndex(index+1)
        )
    return (
        <div id='caroussel-container'>
            <img id='caroussel-img' src={images[index]} alt={`Vue n°${index+1}`}/>
            {nbImages > 1 && <img id='arrow-d' src={arrowD} onClick={imageSuivante} alt='Flèche de droite'/>}
            {nbImages > 1 && <img id='arrow-g' src={arrowG} onClick={imagePrecedente} alt='Flèche de gauche'/>}
            {nbImages > 1 && <span id='page-index'>{`${index+1}/${nbImages}`}</span>}
        </div>
    )
}

export default Caroussel