import './style.scss'
import logo from '../../assets/logo-footer.png'

function Footer(){
    return (
        <footer>
            <div id='block-container'>
                <img src={logo} alt="logo de l'agence Kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer