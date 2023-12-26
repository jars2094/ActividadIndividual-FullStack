import React, { useEffect }  from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../img/Logo.png';
// import SearchBar from '../SearchBar/SearchBar';
import '../NavBar/NavBar.css'

const NavBar = () => {
  const location = useLocation();

  /* Cambiar efecto según el navBar seleccionado */
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.querySelector('a').getAttribute('href') === location.pathname) {
        link.classList.add('active');
      }
    });
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar--color">
      <Link className="navbar-brand" to="/">
        <img className='navbar__logo' src={logo} alt='logo-principal'/>
      </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/acerca" className="nav-link">Acerca de</Link>
        </li>
        <li className="nav-item">
          <Link to="/alquiler" className="nav-link">Alquiler</Link>
        </li>
      </ul>
      {/* <SearchBar/> */}
    </div>
  </nav>
  )
};

export default NavBar;