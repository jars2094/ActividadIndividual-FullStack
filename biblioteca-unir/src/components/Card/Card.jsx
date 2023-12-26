import React from 'react';
import Button from '../../components/Button/Button';
import Titulo from '../../components/Titulo/Titulo';
import '../Card/Card.css'

const Card = () => {
  return (
    <div className='cardInfo'>
        <Titulo valorTitulo={"¡Bienvenido a la lectura!"}/>
        <p>
          Sumérgete en un mundo de historias y conocimientos. Ofrecemos una amplia gama de libros, desde clásicos hasta éxitos de ventas, para todas las edades y gustos. Entre nuestros principales
          servicios tenemos <strong>préstamos de libros, salas de lectura y eventos culturales para toda la comunidad.</strong>
        </p>
        <Button valor={"Suscríbete"} classStyle={"btnStyle"}/>
    </div>
  )
};

export default Card;