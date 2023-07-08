import Localisation from '../Localisation'
import Tags from '../Tags'
import Ratings from '../Ratings'
import './style.scss'
import Hote from '../Hote'
import Deroulant from '../Deroulant'

function Informations({data}) {
    return (
        <div>
            <Localisation title={data.title} location={data.location}/>
            <Tags tags={data.tags} />
            <Ratings rating={data.rating}/>
            <Hote host={data.host}/>
            <Deroulant title="Description" data={data.description}/>
            <Deroulant title="Équipements" data={data.equipments}/>
        </div>
    )
}

export default Informations