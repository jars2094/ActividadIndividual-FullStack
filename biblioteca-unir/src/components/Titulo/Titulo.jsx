import React from 'react';
import '../Titulo/Titulo.css'

function Titulo(obj) {
  return (
    <div id='tituloH3'>
      <h3 className='tituloStyle' >{obj.valorTitulo}</h3>
      <hr/>
    </div>
  );
}

export default Titulo;