import Localisation from '../Localisation'
import Tags from '../Tags'
import Ratings from '../Ratings'
import './style.scss'
import Hote from '../Hote'
import Deroulant from '../Deroulant'

function Informations({data}) {
    return (
        <div id='block-full'>
            <div id='block-1and2'>
                <div id='block-1'>
                    <Localisation title={data.title} location={data.location}/>
                    <Tags tags={data.tags} />
                </div>
                <div id='block-2'>
                    <Ratings rating={data.rating}/>
                    <Hote host={data.host}/>
                </div>
            </div>
            <div id='block-3'>
                <Deroulant title="Description" data={data.description}/>
                <Deroulant title="Équipements" data={data.equipments}/>
            </div>
        </div>
    )
}

export default Informations