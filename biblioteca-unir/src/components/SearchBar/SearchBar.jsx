import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import '../SearchBar/SearchBar.css'
import DynamicList from '../DynamicList/DynamicList'
import FontIcon from '../FontIcon/FontIcon';
import {xmarkCircl} from '../FontIcon/iconConfig';

const SearchBar = () => {

  const [searchValue, setSearchValue] = useState('');
  const [lstSearchBook, setLstSearchBook] = useState([]);

  useEffect(() => {
    SearchSubmit({ preventDefault: () => {} });
  }, []);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const SearchSubmit = async(event) =>{
    event.preventDefault();
    try {
  
      const response = await fetch("http://localhost:8762/microservice-search/book/GetAll",{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
      }
    });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      let data = await response.json();
      
      data = searchValue !== "" ? data.filter(s => s.qualification.toLowerCase().includes(searchValue.toLowerCase())) : data;
      setLstSearchBook(data);
  
    } catch (error) {
      console.error('Error', error);
    }
  }

  return (
    <div>

    <form onSubmit={SearchSubmit}>
      <div className='row center-items borderStyle mb-3'>
        <div className='col-md-10'>            
          <span><input type="text" className='inputSearch' placeholder="Busca el libro que quieres alquilar..." onChange={handleChange}/></span>
        </div>
        <div className='col-md-2 center-items'>      
          <Button type={"submit"} classStyle={"btnStyle"} valor={"Buscar"}/>
        </div>
      </div>
    </form>
    <DynamicList lstBook={lstSearchBook}/>
    </div>
    
  );
};

export default SearchBar;