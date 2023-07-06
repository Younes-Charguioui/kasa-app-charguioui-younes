import image from '../../assets/image01.png'

import './style.scss'

function Banner() {
    return (
        <div id='banner-container'>
            <img src={image} alt="Image représentant une falaise" />
            <h2>Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default Banner