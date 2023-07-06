import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Headers from './components/Headers'
import Item from './components/Item'
import About from './pages/About'
import Footer from './components/Footer'
import Error from './components/Error'

import './style.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path=":location" element={<Item />}/>
        </Route>
        <Route path="a-propos" element={<About/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
  ,document.getElementById('root')
);
