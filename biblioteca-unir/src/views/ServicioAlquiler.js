import React, { useState, useEffect } from 'react';
import FontIcon from '../components/FontIcon/FontIcon';
import { chevronRight, eye } from '../components/FontIcon/iconConfig';
import { Link } from 'react-router-dom';
import DropDownList from '../components/DropDownList/DropDownList';
import Titulo from '../components/Titulo/Titulo';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

function ServicioAlquiler() {

    const [libroSeleccionado, setDataSeleccionada] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [hideElement, setHideElement] = useState(true);

      const tiempoAlquiler = [
        { value: '8', label: '8 días' },
        { value: '15', label: '15 días' },
        { value: '30', label: '30 días' }
      ];
    
      const tipoEntregaAlquiler = [
        { value: '1', label: 'Punto Físico' },
        { value: '2', label: 'Envio a domicilio' }
      ];

    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem('objLibro'));
      setDataSeleccionada(storedData);
    }, []); 

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        if (selectedValue === '2') {
            setHideElement(false);
        } else {
            setHideElement(true);
        }
    };

    const RealizarAlquiler = () => {
        alert("El alquiler se realizo con exito");    
    };

  return (
    <div>
      {libroSeleccionado ? (
        <div>
            <div className='row center-items m-0 pt-5'>
                <div className='col-md-10'>
                    <span id='navegador'><Link to={"/alquiler"}><strong>Alquiler </strong></Link><FontIcon icon={chevronRight} color="var(--colo-azul)"/> Asignar alquiler </span>
                </div>
            </div>

            <div className='row center-items m-0 pt-4 pb-2'>
                <div className='col-md-10'>
                    <label >Bienvenido al mundo lector, te recordamos que el alquiler máximo de libros es de <strong>30 días</strong> y cuentan apartir del día siguiente al alquiler.
                    A continuación se encuentra la información del libro que estas pronto a alquilar:</label>
                </div>
            </div>

            <div className='row center-items m-0 pt-4'>
                <div className='col-md-10 mb-4'>
                    <div className='row center-items'>
                        <div className='col-md-4 center-items align-items-start'>
                            <img className='imgInfo' src={libroSeleccionado.ruta} alt='portada-libro'/> 
                        </div>
                        <div className='col-md-8'>
                            <div className='row infoBook'>
                                <div className='col-md-12'>
                                    <div className='row'>
                                        <div className='col-md-8'>
                                            <label className='tituloLibro'>{libroSeleccionado.titulo}</label>
                                        </div>
                                        <div className='col-md-4 d-flex justify-content-end'>
                                            <div className='col-md-auto col-sm-12 d-flex justify-content-end'>
                                                <span className='vistasLibro'>{libroSeleccionado.cantVistas} <FontIcon icon={eye} color="var(--colo-azul)"/></span>                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row m-0 infoBook__Texto'>
                                    <span><strong>Autor: </strong>{libroSeleccionado.autor} </span>
                                    <span><strong>Editorial: </strong>{libroSeleccionado.editorial}</span>
                                    <span><strong>ISBN: </strong>{libroSeleccionado.isbn} </span>
                                    <span><strong>Año de publicación: </strong>{libroSeleccionado.anio}</span>
                                    <span className='mt-3 text-justify'><strong>Sinopsis: </strong>{libroSeleccionado.description}</span>
                                </div>
                            </div>
                            <div className='row m-0'>
                                <div className='col-md-12 mt-3 text-center'>
                                    <Titulo valorTitulo={"Datos del alquiler"}/>
                                </div>
                                <div className='col-md-6'>
                                    <DropDownList texto={'Tiempo de alquiler:'} options={tiempoAlquiler}/>
                                </div>
                                <div className='col-md-6'>
                                    <DropDownList texto={'Tipo de entrega:'} options={tipoEntregaAlquiler} handleChange={handleChange}/>
                                </div>

                                {!hideElement && (
                                    <div className='col-md-12 mt-3 text-center '>
                                        <div className='row'>
                                            <Input textLabel={'Dirección de residencia:'} />
                                        </div>
                                    </div>
                                )}

                                <div className='col-md-12 mt-3 text-center'>
                                    <Button valor={"Realizar alquiler"} classStyle={"btnStyle"} onClick={() => RealizarAlquiler()}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
      ) : (
        <p>No se han encontrado datos</p>
      )}
    </div>
  );
}

export default ServicioAlquiler;