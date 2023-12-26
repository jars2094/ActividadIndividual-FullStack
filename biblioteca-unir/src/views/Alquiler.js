import Titulo from '../components/Titulo/Titulo';
import SearchBar from '../components/SearchBar/SearchBar'
import DynamicList from '../components/DynamicList/DynamicList'
import React from 'react';

const Alquiler = () => {
  return (
    <div id="alquilerView">
      <div className='row m-0 center-items text-center mt-4 alquilerView__panel1'>
        <Titulo valorTitulo={"¡Adquiere los mejor ejemplares!"}/>
        <div className='row center-items'>
            <div className='col-md-9'>
                <SearchBar />
                <DynamicList />
            </div>
        </div>
      </div>  
      <div className='row m-0 center-items panel2'>
      </div>    
    </div>    
  );
};

export default Alquiler;