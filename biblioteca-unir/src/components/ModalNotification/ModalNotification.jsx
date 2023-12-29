import React, { useState, useEffect } from 'react';
import '../ModalNotification/ModalNotification.css'; 
import Titulo from '../Titulo/Titulo';

const ModalNotification = ({notificationTitle, notificationMessage, hideModal }) => {

  return (
    <div>
      <div className="notification-modal">
        <div className="notification-modal__content">
          <div className='text-center'>
            <Titulo valorTitulo={notificationTitle}/>
          </div>

          <span className="notification-modal__close" onClick={hideModal}>
            &times; {/*icono*/}
          </span>
          <p>{notificationMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalNotification;