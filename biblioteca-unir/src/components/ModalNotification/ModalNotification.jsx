import React, { useState, useEffect } from 'react';
import '../ModalNotification/ModalNotification.css'; 
import { Link} from 'react-router-dom';
import Titulo from '../Titulo/Titulo';
import FontIcon from '../FontIcon/FontIcon';
import {xmarkCircl} from '../FontIcon/iconConfig';

const ModalNotification = ({notificationTitle, notificationMessage, hideModal, closedModal = false }) => {

  return (
    <div>
      <div className="notification-modal">
        <div className="notification-modal__content">
          <div className='text-center'>
            <Titulo valorTitulo={notificationTitle}/>
          </div>
          {closedModal ? (
            <span id='cerrarNotificatio' className="notification-modal__close" onClick={hideModal} ><FontIcon icon={xmarkCircl} color="colorIcon" /></span>
          ): (
            <Link to={"/alquiler"}><span id='cerrarNotificatio' className="notification-modal__close" onClick={hideModal} ><FontIcon icon={xmarkCircl} color="colorIcon" /></span></Link>
          )}
          <p>{notificationMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalNotification;