import React, { useState } from 'react';
import Button from '../Button/Button';
import '../SearchBar/SearchBar.css'

const SearchBar = () => {

  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };


  const SearchSubmit = async(event) =>{
    event.preventDefault();
    try {
      const model = {
        Qualification: searchValue,
      }
  
      const queryParams = new URLSearchParams(model).toString(); 
      console.log(queryParams);
      const response = await fetch(`http://localhost:8762/microservice-search/book/BooksSearch?${queryParams}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
      }
    });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
  
    } catch (error) {
      console.error('Error', error);
    }
  }

  return (
    <form onSubmit={SearchSubmit}>
      <div className='row center-items borderStyle mb-3'>
        <div className='col-md-10'>            
          <input type="text" className='inputSearch' placeholder="Busca el libro que quieres alquilar..." onChange={handleChange}/>
        </div>
        <div className='col-md-2 center-items'>      
          <Button type={"submit"} classStyle={"btnStyle"} valor={"Buscar"}/>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;