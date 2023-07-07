import Caroussel from '../../components/Caroussel'

import './style.scss'
import datas from '../../data/logements.json'
import { useParams } from 'react-router-dom';
import Informations from '../../components/Informations';

function Location() {
    const {locationId} = useParams();
    const data = datas.find(item => item.id === locationId);
    return (
        <div id='location-container'>
            <Caroussel images={data.pictures} />
            <Informations data={data} />
        </div>
    )
}

export default Location