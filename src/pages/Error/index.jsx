import { Link } from 'react-router-dom'
import './style.scss'

function Error () {
    return (
        <div id='error-container'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to='/'>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error