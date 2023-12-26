import React from 'react';
import '../Button/Button.css'

const Button = (obj) => {
  return (
    <button className={obj.classStyle} type='button' title={obj.valor} onClick={obj.onClick} id={obj.id} disabled={obj.isDisabled}>{obj.valor}</button>
  )
};

export default Button;