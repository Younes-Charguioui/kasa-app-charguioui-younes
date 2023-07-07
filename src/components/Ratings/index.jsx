import starFull from '../../assets/star-full.png'
import starEmpty from '../../assets/star-empty.png'

import './style.scss'

function Ratings({rating}) {
    const stars = [1,2,3,4,5];
    const starList = stars.map((i) => (i <= rating) ? (
        <li><img src={starFull} alt={`note n°${i}`}/></li>
    ) : (
        <li><img src={starEmpty} alt={`note n°${i}`}/></li>
    ));
    return (
        <div id='ratings-container'>
            <ul>
                {starList}
            </ul>
        </div>
    )
}

export default Ratings