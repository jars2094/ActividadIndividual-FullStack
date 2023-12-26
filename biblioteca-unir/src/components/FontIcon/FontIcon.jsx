import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FontIcon(props) {
  return (
    <FontAwesomeIcon icon={props.icon} style={{ color: props.color, fontSize: props.size }}/>
  );
}

export default FontIcon;