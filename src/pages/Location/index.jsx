import Caroussel from '../../components/Caroussel'

import './style.scss'
import datas from '../../data/logements.json'
import { useNavigate, useParams } from 'react-router-dom';
import Informations from '../../components/Informations';
import { useEffect } from 'react';

function Location() {
    const {locationId} = useParams();
    const navigate = useNavigate()
    const data = datas.find(item => item.id === locationId);
    const checkData = data !== undefined
    
    useEffect(()=> {
        !checkData && navigate('/404',{replace: true})
    })

    return (
        <>
            {checkData && (
                <div id='location-container'>
                    <Caroussel images={data.pictures} />
                    <Informations data={data} />
                </div>
            )}
        </>
    )
}

export default Location