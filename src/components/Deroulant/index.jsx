import { useState } from 'react';
import arrow from '../../assets/arrow-deroulant.png'
import './style.scss'

function Deroulant({type, data}) {
    const [typeDescription, typeEquipements] = [1,2];
    const [open, setOpen] = useState(false);
    const openDeroulant = (e) => {
        let element = e.target;
        while(element.id != "deroulant-titre" ){
            element = element.parentNode; 
        }
        element = element.childNodes[0].childNodes[1];
        element.classList.toggle('deroule');
        setOpen(!open);
        setTimeout(() => {
            element.classList.toggle('deroule');
            element.classList.toggle('inverse');
        }, 500);
        let deroulantAnim = document.getElementById('deroulant-description');
        deroulantAnim.classList.toggle('ouverture');
    }
    return (
        <div id='deroulant-container'>
            <div id='deroulant-contenu'>
                <div id='deroulant-titre' onClick={openDeroulant}>
                    <div>
                        <span>Description</span>
                        <img src={arrow} alt='fleche pour le menu déroulant' />
                    </div>            
                </div>
                {open && <div id='deroulant-description'>
                    <span>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </span>
                </div>}
            </div>
        </div>
    )
}

export default Deroulant