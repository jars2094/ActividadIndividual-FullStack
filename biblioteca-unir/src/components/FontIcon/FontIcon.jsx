import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FontIcon(props) {
  return (
    <FontAwesomeIcon icon={props.icon} className={props.color}/>
  );
}

export default FontIcon;