import React from 'react'
import book1 from '../../img/books/LibroPortada1.jpg';
import book2 from '../../img/books/LibroPortada2.jpg';
import Titulo from '../Titulo/Titulo';
import Button from '../Button/Button';
import FontIcon from '../FontIcon/FontIcon';
import { heartIcon, eye } from '../FontIcon/iconConfig';
import '../Ranking/Ranking.css'

const Ranking = () => {
  return (
    <div className='row col-md-12 center-items'>
      <div className='col-md-12 text-center m-0 mt-4'>
        <Titulo valorTitulo="Libros destacados de la semana" />
      </div>
      {/* <!--Targeta 1--> */}
      <div className='col-md-4 containerRanking'>
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
                    <label className='containerRanking__Titulo'><strong>Los hombres del norte</strong></label>
                </div>
                <div className='col-md-auto col-sm-12'>
                    <span>21K <FontIcon icon={heartIcon} color="var(--color-rojo)"/> </span>
                    <span>53K <FontIcon icon={eye} color="var(--colo-azul)"/></span>
                </div>
              </div>
              <hr />
              <div className='row d-flex justify-content-center containerRanking__Contenido'>
                <label><strong>Autor: </strong>John Haywood</label>
                <label><strong>Editorial: </strong>Editorial Ariel</label>
                <label><strong>Año: </strong>2016</label>
                <label><strong>Idioma: </strong>Español</label>
                <p>
                Una historia de los vikingos alejada de mitos y leyendas. La narración más completa sobre su expansión geográfica; de Terranova a Bagdad, de Rusia a Francia o España. La sociedad violenta y depredadora de la Escandinavia de la Era Oscura tuvo un impacto único en la historia de la Europa medieval...
                </p>
              </div>
            </div>


        </div>
      </div> 
      {/* <!--Targeta 2--> */}
      <div className='col-md-4 containerRanking'>
        <div className='row d-flex justify-content-center '>

            <div className='col-md-5 text-center d-flex align-items-center justify-content-center'>
              <div className='row'>
                <div className='col-md-12'>
                  <img className='containerRanking__Imagen' src={book2} alt='portada-libro'/> 
                </div>
                <div className='col-md-12 mt-3 mb-2'>
                  <Button valor={"Ver más"} classStyle={"btnStyle"}/>
                </div>
              </div>
            </div>

            <div className='col-md-7'>
              <div className='row d-flex justify-content-center text-center'>
                <div className='col-md-auto col-sm-12'>
                    <label className='containerRanking__Titulo'><strong>El líder que no tenía cargo</strong></label>
                </div>
                <div className='col-md-auto col-sm-12'>
                    <span>19K <FontIcon icon={heartIcon} color="red"/> </span>
                    <span>65K <FontIcon icon={eye} color="var(--colo-azul)"/></span>
                </div>
              </div>
              <hr />
              <div className='row d-flex justify-content-center containerRanking__Contenido'>
                <label><strong>Autor: </strong>Robin Sharma</label>
                <label><strong>Editorial: </strong>Debolsillo</label>
                <label><strong>Año: </strong>2012</label>
                <label><strong>Idioma: </strong>Español</label>
                <p>
                Robin Sharma ha compartido durante más de quince años su fórmula para el éxito con las empresas líderes de Fortune 500 y personajes destacados en todo el mundo, una fórmula que le ha convertido en uno de los asesores de liderazgo más solicitados internacionalmente...
                </p>
              </div>
            </div>


        </div>
      </div> 
    </div>   
  )
}

export default Ranking;