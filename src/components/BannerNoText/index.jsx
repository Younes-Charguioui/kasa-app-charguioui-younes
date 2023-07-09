import './style.scss'

function BannerNoText({image}) {
    return (
        <div id='bannernotext-container'>
            <img src={image} alt="contenu de la banière" />
        </div>
    )
}

export default BannerNoText