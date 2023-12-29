import React, { useState, useEffect } from 'react';
import '../ModalNotification/ModalNotification.css'; 
import Titulo from '../Titulo/Titulo';
import FontIcon from '../FontIcon/FontIcon';
import {xmarkCircl} from '../FontIcon/iconConfig';

const ModalNotification = ({notificationTitle, notificationMessage, hideModal }) => {

  return (
    <div>
      <div className="notification-modal">
        <div className="notification-modal__content">
          <div className='text-center'>
            <Titulo valorTitulo={notificationTitle}/>
          </div>

          <span className="notification-modal__close" onClick={hideModal}>
            <FontIcon icon={xmarkCircl} color="var(--colo-azul)" size="20px" />
          </span>
          <p>{notificationMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalNotification;