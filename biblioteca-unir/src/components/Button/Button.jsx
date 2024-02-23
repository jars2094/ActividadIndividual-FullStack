import React from 'react';
import '../Button/Button.css'

const Button = (obj) => {
  return (
    <button className={obj.classStyle} type={obj.type == "" || obj.type == null ? "button" : obj.type} title={obj.valor} onClick={obj.onClick} id={obj.id} disabled={obj.isDisabled}>{obj.valor}</button>
  )
};

export default Button;