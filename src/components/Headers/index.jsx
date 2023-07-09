import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

import './style.scss'


function Headers() {
    return (
        <div id='header-container'>
            <nav>
                <img src={logo} alt="Logo de l'agence Kasa" />
                <ul>
                    <li key="link_accueil">
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li key="link_apropos">
                        <NavLink to="/a-propos">A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Headers