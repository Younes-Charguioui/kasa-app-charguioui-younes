import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Location from './pages/Location'
import Headers from './components/Headers'
import Footer from './components/Footer'
import Error from './pages/Error'

import './style.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Headers />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="location/:locationId" element={<Location />}/>
        <Route path="a-propos" element={<About/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
  ,document.getElementById('root')
);
