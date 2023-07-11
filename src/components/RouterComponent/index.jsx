import { Route, Routes } from 'react-router-dom'

import Home from '../../pages/Home'
import About from '../../pages/About'
import Location from '../../pages/Location'
import Error from '../../pages/Error'

function RoutesComponent() {
    return (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="location/:locationId" element={<Location />} />
          <Route path="a-propos" element={<About/>} />
          <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default RoutesComponent