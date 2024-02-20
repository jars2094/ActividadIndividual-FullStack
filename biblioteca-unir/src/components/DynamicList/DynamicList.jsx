import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FontIcon from '../FontIcon/FontIcon';
import { heartIcon, eye, circleCheck, circleXmark } from '../FontIcon/iconConfig';
import Button from '../Button/Button';
import '../DynamicList/DynamicList.css'

const DynamicList = () => {
    const items = [
        { id: 1, anio: '2016', editorial: 'Ariel', isbn: '9788434423589', titulo: 'Los hombres del norte', autor: 'John Haywood', paginas: '156', cantFavoritos: '21K', cantVistas: '53K', estado: 'Disponible', description: 'Una historia de los vikingos alejada de mitos y leyendas. La narración más completa sobre su expansión geográfica; de Terranova a Bagdad, de Rusia a Francia o España. La sociedad violenta y depredadora de la Escandinavia de la Era Oscura tuvo un impacto único en la historia de la Europa medieval...', ruta: '/img/bookFront/LibroPortada1.jpg'},  
        { id: 2, anio: '2012', editorial: 'Debolsillo', isbn: '9789588611921', titulo: 'El líder que no tenía cargo', autor: 'Robin Sharma', paginas: '272', cantFavoritos: '19K', cantVistas: '65K', estado: 'En prestamo',  description: 'Robin Sharma ha compartido durante más de quince años su fórmula para el éxito con las empresas líderes de Fortune 500 y personajes destacados en todo el mundo, una fórmula que le ha convertido en uno de los asesores de liderazgo más solicitados internacionalmente...', ruta: '/img/bookFront/LibroPortada2.jpg'},    
        { id: 3, anio: '2021', editorial: 'Planeta', isbn: '9789584297464', titulo: 'Como', autor: 'Dr. Carlos Jaramillo', paginas: '629', cantFavoritos: '12K', cantVistas: '16K', estado: 'Disponible',  description: 'COMO es una guía clara y completa para que el alimento se convierta en su mejor medicina, porque la decisión de comer sano no es tan complicada y costosa como usted se imagina.', ruta: '/img/bookFront/LibroPortada3.jpg'},    
        { id: 4, anio: '2012', editorial: 'GRIJALBO', isbn: '9789588618791', titulo: 'El poder del ahora', autor: 'Eckhart Tolle', paginas: '256', cantFavoritos: '10K', cantVistas: '30K', estado: 'Disponible',  description: 'Con mas de tres millones de ejemplares vendidos, EL PODER DEL AHORA, un fenomeno que se ha ido extendiendo de boca a boca desde que se publico por primera vez, es uno de esos libros extraordinarios capaces de crear una experiencia tal en los lectores que pueden cambiar radicalmente sus vidas para mejor.Para adentrarse en EL PODER DEL AHORA tendremos que dejar atras nuestra mente analitica y su falso yo, el ego.', ruta: '/img/bookFront/LibroPortada4.jpg'},    
        { id: 5, anio: '2022', editorial: 'Planeta', isbn: '9789584299680', titulo: 'La psicología del dinero', autor: 'Morgan Housel', paginas: '312', cantFavoritos: '30K', cantVistas: '50K', estado: 'En prestamo',  description: 'En cuestiones de dinero, lo que importa no es lo listo que seas sino cómo te comportas. Tendemos a pensar en la inversión o la gestión de las finanzas personales como una disciplina matemática, en la que los datos y las fórmulas nos dicen exactamente qué hacer. Sin embargo, el rasgo que define a las personas que logran enriquecerse no es su destreza con los números, ni su salario o su talento, sino su historia personal, sus motivaciones y su visión única del mundo.', ruta: '/img/bookFront/LibroPortada7.jpg'},    
        { id: 6, anio: '2017', editorial: 'Urano', isbn: '9789585531277', titulo: 'Los Siete Maridos de Evelyn Hugo', autor: 'Taylor Jenkins Reid', paginas: '384', cantFavoritos: '10K', cantVistas: '20K', estado: 'En Prestamo',  description: 'Evelyn Hugo, el ícono de Hollywood que se ha recluido en su edad madura, decide al fin contar la verdad sobre su vida llena de glamour y de escándalos. Pero cuando elige para ello a Monique Grant, una periodista desconocida, nadie se sorprende más que la misma Monique. ¿Por qué ella? ¿Por qué ahora? Monique no está precisamente en su mejor momento. Su marido la abandonó, y su vida profesional no avanza...', ruta: '/img/bookFront/LibroPortada5.jpg'},    
        { id: 7, anio: '2014', editorial: 'Planeta', isbn: '9789563602968', titulo: 'Solo tú me Conoces', autor: 'David Levithan', paginas: '272', cantFavoritos: '15K', cantVistas: '30K', estado: 'Disponible',  description: '¿Quién te conoce realmente? ¿Tu mejor amigo? ¿Tu novio o tu novia? ¿O un desconocido con quien te has cruzado en una noche loca? ¿O nadie, en realidad?. Mark y Katie, de 16 años, se conocen en una discoteca gay durante la Semana del Orgullo Gay en San Francisco. Mark acaba de ser abandonado por Ryan, de quien está enamorado...', ruta: '/img/bookFront/LibroPortada6.jpg'}
      ];
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8762/microservice-search/book/GetAll")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
  };

  const almacenarData = (obj) => {
    localStorage.setItem('objLibro', JSON.stringify(obj));
  };

  return (

    <div>
      <ul className='containerDynamicList'>
        {data?.map((item) =>(
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
                  <label>{item.numberPage} Pág. | {item.loanBook === "Disponible" ? <span className='disponible'>{item.estado} <FontIcon icon={circleCheck} color="var(--colo-verde)" /> </span> : <span className='enPrestamo'>{item.loanBook} <FontIcon icon={circleXmark} color="var(--colo-rojo)" />  </span>}</label>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>

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
  );
};

export default DynamicList;