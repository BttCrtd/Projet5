import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
//import Header from './components/Header'
import About from './pages/About/about'
//import Footer from './components/Footer'
import Error from './components/Error/error'
import Layout from './components/Layout/layout'
import './style/style.css'
import Logement from './pages/Logement/logement'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
)
