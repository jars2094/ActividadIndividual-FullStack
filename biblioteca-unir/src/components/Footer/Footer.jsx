import React from 'react';
import logoUNIR from '../../img/logoUnir.png';
import logo from '../../img/Logo.png';
import logoFacebook from '../../img/redes sociales/logoFacebook.svg';
import logoInstagram from '../../img/redes sociales/logoInstagram.svg';
import logoPinterest from '../../img/redes sociales/logoPinterest.svg';
import logoWhatsapp from '../../img/redes sociales/logoWhatsapp.svg';
import logoYoutube from '../../img/redes sociales/logoYoutube.svg';
import '../Footer/Footer.css'

function Footer() {
  return (
    <footer >
      <div className='row d-flex justify-content-center m-0 pt-4'>
        <div className='col-md-4 d-flex justify-content-center'>
            <img src={logo} width="100" height="100" alt='Logo-Principal'/>
        </div>
        <div className='col-md-3'>
            <div className='row contentInfo'>
                <label className='col-md-12 contentInfo--Titulo'><strong>Biblioteca Oriental</strong></label>
                <label className='col-md-12'>Calle 8 #45-75 Bucaramanga - Colombia</label>
                <label className='col-md-12'>(607) 654 2558 - (325) 256 24578</label>
                <label className='col-md-12'>bibliotecaoriental@oriental.com</label>
                <label className='col-md-12 mt-2 mb-2'>By. Julián Rojas © 2023</label>
            </div>
        </div>
        <div className='col-md-4 contenidoRS'>
            <label className='col-md-12 contenidoRS--Titulo'><strong>Redes Sociales</strong></label>
            <span><a href='https://www.facebook.com/' title='Facebook'><img src={logoFacebook} width="30" height="30" alt="Logo Facebook" /></a></span>
            <span><a href='https://www.instagram.com/' title='Instagram'><img src={logoInstagram} width="30" height="30" alt="Logo Instagram" /></a></span>
            <span><a href='https://web.whatsapp.com/' title='Whatsapp'><img src={logoWhatsapp} width="30" height="30" alt="Logo Whatsapp" /></a></span>
            <span><a href='https://www.youtube.com/' title='Youtube'><img src={logoYoutube} width="30" height="30" alt="Logo Youtube" /></a></span>
            <span><a href='https://co.pinterest.com/' title='Pinterest'><img src={logoPinterest} width="30" height="30" alt="Logo Pinterest" /></a></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;