import React from 'react';
import Button from '../Button/Button';
import '../SearchBar/SearchBar.css'

const SearchBar = () => {
  return (
    <div className='row center-items borderStyle mb-3'>
      <div className='col-md-10'>            
        <input type="text" className='inputSearch' placeholder="Busca el libro que quieres alquilar..." />
      </div>
      <div className='col-md-2 center-items'>      
        <Button classStyle={"btnStyle"} valor={"Buscar"}/>
      </div>
    </div>
  );
};

export default SearchBar;