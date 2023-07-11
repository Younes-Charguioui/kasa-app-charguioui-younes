import Headers from './components/Headers'
import RoutesComponent from './components/RouterComponent'
import Footer from './components/Footer'

import { BrowserRouter as Router } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Headers />
            <RoutesComponent />
            <Footer />
        </Router>
    )
}

export default App