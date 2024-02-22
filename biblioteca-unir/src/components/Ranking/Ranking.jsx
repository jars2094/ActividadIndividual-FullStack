import React, { useState, useEffect } from 'react';
import book1 from '../../img/books/LibroDefault.jpg';
import Titulo from '../Titulo/Titulo';
import Button from '../Button/Button';
import FontIcon from '../FontIcon/FontIcon';
import { heartIcon, eye } from '../FontIcon/iconConfig';
import '../Ranking/Ranking.css'

const Ranking = () => {

  const [data, setData] = useState([]); // array

  useEffect(() => {
    fetch("http://localhost:8762/microservice-search/book/GetAll")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          data.sort((a, b) => b.viewNumber - a.viewNumber);
          setData(data);
          console.log(data);
        } else {
          console.error('Data is empty or undefined');
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='row col-md-12 center-items'>
      <div className='col-md-12 text-center m-0 mt-4'>
        <Titulo valorTitulo="Libros destacados de la semana" />
      </div>

      {data.slice(0, 2).map((items, index) => (
        <div className='col-md-4 containerRanking' key={index}>
        <div className='row center-items'>

            <div className='col-md-5 text-center center-items align-items-center'>
              <div className='row'>
                <div className='col-md-12'>
                  <img className='containerRanking__Imagen' src={book1} alt='portada-libro'/> 
                </div>
                <div className='col-md-12 mt-3 mb-2'>
                  <Button valor={"Ver más"} classStyle={"btnStyle"}/>
                </div>
              </div>
            </div>

            <div className='col-md-7'>
              <div className='row d-flex justify-content-center text-center'>
                <div className='col-md-auto col-sm-12'>
                    <label className='containerRanking__Titulo'><strong>{items.qualification}</strong></label>
                </div>
                <div className='col-md-auto col-sm-12'>
                    <span>{items.numberLike} <FontIcon icon={heartIcon} color="colorIcon--False"/> </span>
                    <span>{items.viewNumber} <FontIcon icon={eye} color="colorIcon"/></span>
                </div>
              </div>
              <hr />
              <div className='row d-flex justify-content-center containerRanking__Contenido'>
                <label><strong>Autor: </strong>{items.author.name + " " + items.author.lastName}</label>
                <label><strong>Editorial: </strong>{items.editorial.name}</label>
                <label><strong>Año: </strong>{new Date(items.publicationYear).getFullYear()}</label>
                <label><strong>Idioma: </strong>{items.language.name}</label>
                <p>{items.synopsis}</p>
              </div>
            </div>
        </div>
      </div> 
      ))}

    </div>   
  );
}

export default Ranking;