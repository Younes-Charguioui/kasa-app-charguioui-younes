import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

import './style.scss'


function Headers() {
    return (
        <>
            <nav>
                <img src={logo} alt="Logo de l'agence Kasa" />
                <ul>
                    <li key="link_accueil">
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li key="link_apropos">
                        <NavLink to="/home">A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Headers