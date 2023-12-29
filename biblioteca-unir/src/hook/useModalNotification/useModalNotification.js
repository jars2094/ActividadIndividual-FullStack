import { useState } from 'react';

const useModalNotification = () => {
  const [showModalNotification, setShowModalNotification] = useState(false); //Bool
  const [notificationMessage, setNotificationMessage] = useState(''); //String
  const [notificationTitle, setNotificationTitle] = useState(''); //String

  const show = (notificationTitle, message) => {
    setNotificationTitle(notificationTitle);
    setNotificationMessage(message);
    setShowModalNotification(true);
  };

  const hide = () => {
    setShowModalNotification(false);
  };

  return { showModalNotification, notificationTitle, notificationMessage, show, hide };
};

export default useModalNotification;
