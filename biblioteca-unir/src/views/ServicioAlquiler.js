import React, { useState, useEffect } from 'react';
import FontIcon from '../components/FontIcon/FontIcon';
import { chevronRight, eye} from '../components/FontIcon/iconConfig';
import { Link } from 'react-router-dom';
import DropDownList from '../components/DropDownList/DropDownList';
import Titulo from '../components/Titulo/Titulo';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import useModalNotification from '../hook/useModalNotification/useModalNotification';
import ModalNotification from '../components/ModalNotification/ModalNotification';

function ServicioAlquiler() {

//#region Variable
var model ={
    diasRenta: 0,
    tipoEntrega: '',
    fechaAlquiler: new Date(),
    fechaEntrega: null
}
//#endregion

//#region Generación de listas

const listRentalTime = [
    { value: 0, label: 'Seleccionar un tiempo de alquiler' },
    { value: 8, label: '8 días' },
    { value: 15, label: '15 días' },
    { value: 30, label: '30 días' }
  ];

  const listDeliveryType = [
    { value: '', label: 'Seleccionar un tipo de entrega' },
    { value: 'PF', label: 'Punto Físico' },
    { value: 'ED', label: 'Envio a domicilio' }
  ];

//#endregion 

//#region Hook useState && useEffect

const [selectedBook, setSelectedBook] = useState(null); //objLibro
const [selectedDelivery, setSelectedDelivery] = useState(''); //string
const [hideAddress, setHideAddress] = useState(true); //bool
const [selectedRentalTime , setSelectedRentalTime] = useState(0); //decimal

    useEffect(() => { //Cargar la información del libro seleccionado
        const storedBook = JSON.parse(localStorage.getItem('objLibro'));
        setSelectedBook(storedBook);
    }, []);

    const ChangeDelivery = (event) => { //Mostrar/Ocultar el campo dirrección
        const selectedValue = event.target.value;
        setSelectedDelivery(selectedValue);
        model.tipoEntrega= selectedDelivery;

        if (selectedValue === 'ED') {
            setHideAddress(false);
        } else {
            setHideAddress(true);
        }
    };

    const ChangeRentalTime = (event) => { 
        const selectedValue = event.target.value;
        setSelectedRentalTime(selectedValue);
        model.diasRenta = selectedRentalTime;
    };

//#endregion

//#region Custom Hook (Notificaciones)
const { showModalNotification, notificationTitle, notificationMessage, show, hide } = useModalNotification();

    const MakeRental = () => {

        const opcionesFecha = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        model.fechaEntrega = model.fechaAlquiler.toLocaleDateString('es-ES', opcionesFecha);
        
        show('¡Alquiler Exitoso!', 'El alquiler se realizo de forma exitosa, recuerde que debe devolver el libro el: <strong>' + model.fechaEntrega + '</strong>.');
    };

    const closedNotificacion = () => {
        hide();
    };
//#endregion

return (
    <div>
        {showModalNotification && (
            <ModalNotification notificationTitle={notificationTitle} notificationMessage={notificationMessage} hideModal={closedNotificacion} />
        )}
        {selectedBook ? (
            <div>
                <div className='row center-items m-0 pt-5'>
                    <div className='col-md-10'>
                        <span id='navegador'><Link to={"/alquiler"}><strong>Alquiler </strong></Link><FontIcon icon={chevronRight} color="var(--colo-azul)" /> Asignar alquiler </span>
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
                                <img className='imgInfo' src={selectedBook.ruta} alt='portada-libro' />
                            </div>
                            <div className='col-md-8'>
                                <div className='row infoBook'>
                                    <div className='col-md-12'>
                                        <div className='row'>
                                            <div className='col-md-8'>
                                                <label className='tituloLibro'>{selectedBook.titulo}</label>
                                            </div>
                                            <div className='col-md-4 d-flex justify-content-end'>
                                                <div className='col-md-auto col-sm-12 d-flex justify-content-end'>
                                                    <span className='vistasLibro'>{selectedBook.cantVistas} <FontIcon icon={eye} color="var(--colo-azul)" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row m-0 infoBook__Texto'>
                                        <span><strong>Autor: </strong>{selectedBook.autor} </span>
                                        <span><strong>Editorial: </strong>{selectedBook.editorial}</span>
                                        <span><strong>ISBN: </strong>{selectedBook.isbn} </span>
                                        <span><strong>Año de publicación: </strong>{selectedBook.anio}</span>
                                        <span className='mt-3 text-justify'><strong>Sinopsis: </strong>{selectedBook.description}</span>
                                    </div>
                                </div>
                                <div className='row m-0'>
                                    <div className='col-md-12 mt-3 text-center'>
                                        <Titulo valorTitulo={"Datos del alquiler"} />
                                    </div>
                                    <div className='col-md-6'>
                                        <DropDownList texto={'Tiempo de alquiler:'} options={listRentalTime} handleChange={ChangeRentalTime}/>
                                    </div>
                                    <div className='col-md-6'>
                                        <DropDownList texto={'Tipo de entrega:'} options={listDeliveryType} handleChange={ChangeDelivery} />
                                    </div>

                                    {!hideAddress && (
                                        <div className='col-md-12 mt-3 text-center '>
                                            <div className='row'>
                                                <Input textLabel={'Dirección de residencia:'} />
                                            </div>
                                        </div>
                                    )}

                                    <div className='col-md-12 mt-3 text-center'>
                                        <Button valor={"Realizar alquiler"} classStyle={"btnStyle"} onClick={() => MakeRental()} />
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