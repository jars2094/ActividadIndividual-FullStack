import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './views/Home';
import Acerca from './views/Acerca';
import Alquiler from './views/Alquiler';
import ServicioAlquiler from './views/ServicioAlquiler';

function App() {
  return ( 
    <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/acerca" element={<Acerca />}/>
          <Route exact path="/alquiler" element={<Alquiler />}/>
          <Route exact path="/servioalquiler" element={<ServicioAlquiler />}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;