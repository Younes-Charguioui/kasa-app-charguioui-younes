import Banner from '../../components/Banner'
import Deroulant from '../../components/Deroulant'

import image02 from '../../assets/image02.png'
import './style.scss'

function About() {
    return (
        <div id='about-container'>
            <Banner image={image02} text=''/>
            <div id='block-container'>
                <Deroulant 
                    title="Flabilité" 
                    data="Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, et tous les informations 
                    sont régulièrement vérifiées par nos équipes."
                    />
                <Deroulant 
                    title="Respect" 
                    data="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage 
                    entraînera une exclusion de notre plateforme."
                    />
                <Deroulant 
                    title="Service" 
                    data="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage 
                    entraînera une exclusion de notre plateforme."
                    />
                <Deroulant 
                    title="Sécurité" 
                    data="La sécurité est la priorité de Kasa. 
                    Aussi bien pour nos hôtes que pour les voyageurs, chaque logement 
                    correspond aux critères de sécurité établis par nos services. En laissant 
                    une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes 
                    de vérifier que les standards sont bien respectés. Nous organisons 
                    également des ateliers sur la sécurité domestique pour nos hôtes."
                    />
            </div>
        </div>
    )
}

export default About