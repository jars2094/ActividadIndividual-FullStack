import React, { useState, useEffect } from 'react';
import FontIcon from '../components/FontIcon/FontIcon';
import { chevronRight, eye, book} from '../components/FontIcon/iconConfig';
import { Link } from 'react-router-dom';
import DropDownList from '../components/DropDownList/DropDownList';
import Titulo from '../components/Titulo/Titulo';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import bookDefault from '../img/books/LibroDefault.jpg';
import useModalNotification from '../hook/useModalNotification/useModalNotification';
import ModalNotification from '../components/ModalNotification/ModalNotification';
import { opcionesFecha } from '../general.js';
function ServicioAlquiler() {

//#region Variable
var model ={
    diasRenta: 0,
    tipoEntrega: '',
    fechaAlquiler: new Date(),
    fechaEntrega: new Date()
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
const [objRental, setObjRental] = useState({
    diasRenta: 0,
    tipoEntrega: '',
    fechaAlquiler: new Date(),
    fechaEntrega: new Date()
  });

    useEffect(() => { //Cargar la información del libro seleccionado
        const storedBook = JSON.parse(localStorage.getItem('objLibro'));
        console.log(storedBook);
        setSelectedBook(storedBook);
    }, []);

    const ChangeDelivery = (event) => { //Mostrar/Ocultar el campo dirrección
        const selectedValue = event.target.value;
        setSelectedDelivery(selectedValue);
        setObjRental (x => ({...x,tipoEntrega: selectedValue}));

        if (selectedValue === 'ED') {
            setHideAddress(false);
        } else {
            setHideAddress(true);
        }
    };

    const ChangeRentalTime = (event) => { 
        const selectedValue = parseInt(event.target.value, 10);
        setSelectedRentalTime(selectedValue);
        setObjRental (x => ({...x,diasRenta: selectedValue}));
    };

//#endregion

//#region Custom Hook (Notificaciones)
const { showModalNotification, notificationTitle, notificationMessage, show, hide } = useModalNotification();

    const MakeRental = () => {
console.log(objRental.diasRenta );
    if(objRental.diasRenta !== 0 && objRental.tipoEntrega !== ""){
        let fechaEntrega = new Date(model.fechaAlquiler);
        fechaEntrega.setDate(fechaEntrega.getDate() + objRental.diasRenta); 

        let fechaFormateada = fechaEntrega.toLocaleDateString('es-ES', opcionesFecha);
        console.log(fechaFormateada);

        model.fechaEntrega = fechaFormateada;

        show('¡Alquiler Exitoso!', 'El alquiler se realizo de forma exitosa, recuerde que debe devolver el libro el:  ' + model.fechaEntrega + '. ¡Gracias por fomentar la lectura!');
    }else{
        show('¡Advertencia!', 'Debe seleccionar los datos de alquiler');
    }
        
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
                                <img className='imgInfo' src={bookDefault} alt='portada-libro' />
                            </div>
                            <div className='col-md-8'>
                                <div className='row infoBook'>
                                    <div className='col-md-12'>
                                        <div className='row'>
                                            <div className='col-md-8'>
                                                <label className='tituloLibro'>{"(" + selectedBook.code + ") " + selectedBook.qualification}</label>
                                            </div>
                                            <div className='col-md-4 d-flex justify-content-end'>
                                                <div className='col-md-auto col-sm-12 d-flex justify-content-end'>
                                                    <span className='vistasLibro'>{selectedBook.viewNumber} <FontIcon icon={eye} color="colorIcon" /> | {selectedBook.amount} <FontIcon icon={book} color="colorIcon"/> </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row m-0 infoBook__Texto'>
                                        <span><strong>Autor: </strong>{selectedBook.author.name + " " + selectedBook.author.lastName} </span>
                                        <span><strong>Editorial: </strong>{selectedBook.editorial.name}</span>
                                        {/* <span><strong>ISBN: </strong>{selectedBook.isbn} </span> */}
                                        <span><strong>Año de publicación: </strong>{new Date(selectedBook.publicationYear).getFullYear()}</span>
                                        <span className='mt-3 text-justify'><strong>Sinopsis: </strong>{selectedBook.synopsis}</span>
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