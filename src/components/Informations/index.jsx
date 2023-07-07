import Localisation from '../Localisation'
import Tags from '../Tags'
import Ratings from '../Ratings'
import './style.scss'
import Hote from '../Hote'
import Deroulant from '../Deroulant'

function Informations({data}) {
    const [typeDescription, typeEquipements] = [1,2]
    return (
        <div>
            <Localisation title={data.title} location={data.location}/>
            <Tags tags={data.tags} />
            <Ratings rating={data.rating}/>
            <Hote host={data.host}/>
            <Deroulant type={typeDescription} data={data.description}/>
        </div>
    )
}

export default Informations