import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FontIcon from '../FontIcon/FontIcon';
import bookDefault from '../../img/books/LibroDefault.jpg';
import { heartIcon, eye, circleCheck, circleXmark } from '../FontIcon/iconConfig';
import Button from '../Button/Button';
import '../DynamicList/DynamicList.css'

const DynamicList = () => {

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1); //decimal
  const [data, setData] = useState([]); // array
  const [totalPages, setTotalPages] = useState(0); //decimal

  useEffect(() => {

    fetch("http://localhost:8762/microservice-search/book/GetAll")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        data.sort((a, b) => a.qualification.localeCompare(b.qualification));
        setData(data); 
        setTotalPages(Math.ceil(data.length / itemsPerPage));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = indexOfFirstItem + itemsPerPage;
  let currentItems = [];

  currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const almacenarData = (obj) => {
    localStorage.setItem('objLibro', JSON.stringify(obj));
  };

  return (
    <div>
      <ul className='containerDynamicList'>
        {currentItems.map((item) => (
          <li key={item.id}>
            <div className='row center-items containerDynamicList__item mt-4 mb-4'>
              <div className='col-md-2 center-items align-items-center'>
                <img className='bookFront' src={bookDefault} alt='portada-libro' />
              </div>
              <div className='col-md-8 libros'>
                <div className='col-md-12'>
                  <label className='libros__titulo'>{item.qualification}</label>
                </div>
                <div className='col-md-12'>
                  <label className='libros__autor'>{"Autor: " + item.author.name + " " + item.author.lastName + " (Editorial: " + item.editorial.name + ")"}</label>
                </div>
                <div className='col-md-12'>
                  <p className='libros__descripcion'>{item.synopsis}</p>
                </div>
                <div className='col-md-auto col-sm-12'>
                  <span>{item.numberLike} <FontIcon icon={heartIcon} color="colorIcon--False" /> </span>
                  <span>{item.viewNumber} <FontIcon icon={eye} color="colorIcon" /> | </span>
                  <label>{item.numberPage} Pág. | {item.loanBook === "Disponible" ? <span className='disponible'>{item.estado} <FontIcon icon={circleCheck} color="colorIcon--True" /> Disponible </span> : <span className='enPrestamo'>{item.loanBook} <FontIcon icon={circleXmark} color="colorIcon--False" /> En Prestamo </span>}</label>
                </div>
                <div className='col-md-12 center-items align-items-center'>
                     <Link to={'/servioalquiler'}>
                         <Button id={item.id} classStyle={"btnStyle"} valor={"¡Alquilar!"} onClick={() => almacenarData(item)} isDisabled={item.loanBook === "Disponible" ? false : true}/>
                     </Link>
                 </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div id='pagination'>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <Button classStyle={"btnStyle"} key={pageNumber} onClick={() => handlePaginationClick(pageNumber)} valor={pageNumber}/>
        ))}
      </div>
    </div>
  );

};

export default DynamicList;
