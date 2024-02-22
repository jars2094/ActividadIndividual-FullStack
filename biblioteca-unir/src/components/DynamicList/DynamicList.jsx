import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FontIcon from '../FontIcon/FontIcon';
import { heartIcon, eye, circleCheck, circleXmark } from '../FontIcon/iconConfig';
import Button from '../Button/Button';
import '../DynamicList/DynamicList.css'

const DynamicList = () => {

  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8762/microservice-search/book/GetAll")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
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
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

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
                <img className='bookFront' src="/img/bookFront/LibroPortada1.jpg" alt='portada-libro' />
              </div>
              <div className='col-md-8 libros'>
                <div className='col-md-12'>
                  <label className='libros__titulo'>{item.qualification}</label>
                </div>
                <div className='col-md-12'>
                  <label className='libros__autor'>{item.author.name + " " + item.author.lastName + " (Editorial: " + item.editorial.name + ")"}</label>
                </div>
                <div className='col-md-12'>
                  <p className='libros__descripcion'>{item.synopsis}</p>
                </div>
                <div className='col-md-auto col-sm-12'>
                  <span>{item.numberLike} <FontIcon icon={heartIcon} color="var(--color-rojo)" /> </span>
                  <span>{item.viewNumber} <FontIcon icon={eye} color="var(--colo-azul)" /> | </span>
                  <label>{item.numberPage} Pág. | {item.loanBook === "Disponible" ? <span className='disponible'>{item.estado} <FontIcon icon={circleCheck} color="var(--colo-verde)" /> Disponible </span> : <span className='enPrestamo'>{item.loanBook} <FontIcon icon={circleXmark} color="var(--colo-rojo)" /> En Prestamo </span>}</label>
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


    // <div>
    //   <ul className='containerDynamicList'>
    //     {currentItems.map((item, index) => (
    //       <li key={index}>
    //         <div className='row center-items containerDynamicList__item mt-4 mb-4'>
    //             <div className='col-md-2 center-items align-items-center'>
    //                 <img className='bookFront' src={item.ruta} alt='portada-libro'/> 
    //             </div>
    //             <div className='col-md-8 libros'>
    //                 <div className='col-md-12'>
    //                     <label className='libros__titulo'>{item.titulo}</label>
    //                 </div>
    //                 <div className='col-md-12'>
    //                     <label className='libros__autor'>{item.autor}</label>
    //                 </div>
    //                 <div className='col-md-12'>
    //                     <p className='libros__descripcion'>{item.description}</p>
    //                 </div>
    //                 <div className='col-md-auto col-sm-12'>
    //                     <span>{item.cantFavoritos} <FontIcon icon={heartIcon} color="var(--color-rojo)"/> </span>
    //                     <span>{item.cantVistas} <FontIcon icon={eye} color="var(--colo-azul)"/> | </span>
    //                     <label>{item.paginas} Pág. | {item.estado === "Disponible" ? <span className='disponible'>{item.estado} <FontIcon icon={circleCheck} color="var(--colo-verde)"/> </span> : <span className='enPrestamo'>{item.estado} <FontIcon icon={circleXmark} color="var(--colo-rojo)"/>  </span>}</label>
    //                 </div>
    //             </div>
    //             <div className='col-md-2 center-items align-items-center'>
    //                 <Link to={'/servioalquiler'}>
    //                     <Button id={item.id} classStyle={"btnStyle"} valor={"¡Alquilar!"} onClick={() => almacenarData(item)} isDisabled={item.estado === "Disponible" ? false : true}/>
    //                 </Link>
    //             </div>
    //         </div>            
    //       </li>
    //     ))}
    //   </ul>
    //   <div id='pagination'>
    //     {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
    //         <Button classStyle={"btnStyle"} key={pageNumber} onClick={() => handlePaginationClick(pageNumber)} valor={pageNumber}/>
    //     ))}
    //   </div>
    // </div>