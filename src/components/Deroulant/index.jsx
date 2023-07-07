import { useState } from 'react';
import arrow from '../../assets/arrow-deroulant.png'
import './style.scss'

function Deroulant({type, data}) {
    const [typeDescription, typeEquipements] = [1,2];
    const [open, setOpen] = useState(true);
    const openDeroulant = (e) => {
        let elementClick = e.target;
        while(elementClick.id !== "deroulant-titre" ){
            elementClick = elementClick.parentNode; 
        }
        const elementArrow = elementClick.childNodes[0].childNodes[1];
        elementArrow.classList.toggle('deroule');
        setOpen(!open);
        setTimeout(() => {
            elementArrow.classList.toggle('deroule');
            elementArrow.classList.toggle('inverse');
        }, 300);
        let deroulantAnim = document.getElementById('deroulant-contenu');
        open ? deroulantAnim.style.height = '200px' : deroulantAnim.style.height = '50px'
    }
    /*return (
        <div id='deroulant-container'>
            <div id='deroulant-titre' onClick={openDeroulant}>
                <div>
                    <span>Description</span>
                    <img src={arrow} alt='fleche pour le menu déroulant' />
                </div>            
            </div>
            <div id='deroulant-contenu'>
                {<span>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </span>}
            </div>
        </div>
    )*/
    return (
        <div id='deroulant-container'>
            <div id='deroulant-contenu'>
                <div id='deroulant-titre' onClick={openDeroulant}>
                    <div>
                        <span>Description</span>
                        <img src={arrow} alt='fleche pour le menu déroulant' />
                    </div>            
                </div>
                <span>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </span>
            </div>
        </div>
    )
}

export default Deroulant