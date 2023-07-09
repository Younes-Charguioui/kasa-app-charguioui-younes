import { useState } from 'react';
import arrow from '../../assets/arrow-deroulant.png'
import './style.scss'

function Deroulant({title, data}) {
    const [open, setOpen] = useState(true);

    const openDeroulant = () => {
        const elementArrow = document.querySelector(`div[name='${title}-arrow']`)
            .children[0]
            .children[1];
        const elementContenu = document.querySelector(`div[name='${title}-contenu']`)
        const affichageContenu = () => (elementContenu.style.overflow = 'auto')
        elementArrow.classList.toggle('arrow-rotation')
        setOpen(!open);
        if (open) {
            elementContenu.style.height = '230px'
            setTimeout(affichageContenu, 750)
        } else {
            window.innerWidth < 571 ? elementContenu.style.height = '30px' : elementContenu.style.height = '50px'
            elementContenu.style.overflow = 'hidden'
        }
        
        elementContenu.children[1].children[0].innerHTML = textDescription
    }

    const textDescription = (title === 'Équipements') ? data.reduce((acc,val)=>`${acc}${val}<br />`,'') : data
    
    return (
        <div id='deroulant-container'>
            <div id='deroulant-contenu' name={`${title}-contenu`}>
                <div id='deroulant-titre' name={`${title}-arrow`} onClick={openDeroulant}>
                    <div>
                        <span>{title}</span>
                        <img id='deroulant-arrow' name='deroulant-arrow' src={arrow} alt='fleche pour le menu déroulant' />
                    </div>            
                </div>
                <div id='deroulant-description'>
                    <p>{}</p>
                </div>
            </div>
        </div>
    )
}

export default Deroulant