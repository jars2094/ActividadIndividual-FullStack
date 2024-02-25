import React, { useState, useEffect} from 'react';
import FontIcon from '../components/FontIcon/FontIcon';
import { chevronRight, eye, book} from '../components/FontIcon/iconConfig';
import { Link} from 'react-router-dom';
import DropDownList from '../components/DropDownList/DropDownList';
import Titulo from '../components/Titulo/Titulo';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import bookDefault from '../img/books/LibroDefault.jpg';
import useModalNotification from '../hook/useModalNotification/useModalNotification';
import ModalNotification from '../components/ModalNotification/ModalNotification';
function ServicioAlquiler() {

//#regio Variable
let disabledBtn = false;
//#endregion

//#region Generación de listas

const [listRentalTime, setListRentalTime] = useState([]);
const [listDeliveryType, setlistDeliveryType] = useState([]);

  useEffect(() => {

    //Combo de tiempo de alquiler
    fetch('http://localhost:8762/microservice-operational/loantime/GetAll')
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener la lista de opciones de tiempo de alquiler');
        }
        return response.json();
      })
      .then(data => {
         setListRentalTime(data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener la lista de opciones de tiempo de alquiler:', error);
      });

      //Combo de tipo de envio
      fetch('http://localhost:8762/microservice-operational/delivery/GetAll')
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener la lista de opciones de tipo de envio');
        }
        return response.json();
        
      })
      .then(data => {
        setlistDeliveryType(data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener la lista de opciones de tipo de envio:', error);
      });
  }, []);

//#endregion 

//#region Hook useState && useEffect

const [selectedBook, setSelectedBook] = useState(null); //objLibro
const [selectedDelivery, setSelectedDelivery] = useState(''); //string
const [hideAddress, setHideAddress] = useState(true); //bool
const [selectedRentalTime , setSelectedRentalTime] = useState(0); //decimal
const [inputValue, setInputValue] = useState('');
const [objRental, setObjRental] = useState({
    diasRenta: 0,
    tipoEntrega: '',
    direccionEntrega: '',
    fechaAlquiler: new Date(),
    fechaEntrega: new Date()
  });

    useEffect(() => { //Cargar la información del libro seleccionado
        const storedBook = JSON.parse(localStorage.getItem('objLibro'));
        setSelectedBook(storedBook);
        const bookId = storedBook.id;
        setModelData(m => ({ ...m, book: bookId }));
    }, []);

    const ChangeDelivery = (event) => { //Mostrar/Ocultar el campo dirrección
        
        const selectedValue = event.target.value;
        setSelectedDelivery(selectedValue);
        // setObjRental (x => ({...x,tipoEntrega: selectedValue}));
        ChangeComponent(event);


        if (selectedValue === '2') {
            setHideAddress(false);
        } else {
            setHideAddress(true);
        }
    };

    const ChangeRentalTime = (event) => { 
        const selectedValue = parseInt(event.target.value, 10);
        setObjRental (x => ({...x,diasRenta: selectedValue}));
        ChangeComponent(event);
    };

    
    const ChangeAdress = (event) => { 
        const selectedValue = event.target.value;
        setInputValue(selectedValue);
        ChangeComponent(event);
    };

//#endregion

//#region Custom Hook (Notificaciones)
const { showModalNotification, notificationTitle, notificationMessage, show, hide } = useModalNotification();

const [modelData, setModelData] = useState({
    book: 0,
    deliveryType: 0,
    loanTime: 0,
    loanUser: 1
  });

    const MakeRental = async (event) => {
        event.preventDefault();
        try {
            if (objRental.diasRenta !== 0 && objRental.tipoEntrega !== 0) {

                const response = await fetch('http://localhost:8762/microservice-operational/loan/Create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(modelData),
                });

                if (!response.ok) {
                    disabledBtn = false;
                    throw new Error('Network response was not ok');
                }

                const responseData = await response.json();

                const fechaEntrega = new Date(responseData.deadline);
                const options = { month: 'long', day: '2-digit', year: 'numeric' };
                const fechaFormateada = new Intl.DateTimeFormat('es-ES', options).format(fechaEntrega);
                const bookId = selectedBook.id;
                const amount = selectedBook.amount - 1;
                const loanBook = amount === 0 ? "En Prestamo" : "Disponible";

                //#region Actualización de cantidad de libros
                
                fetch('http://localhost:8762/microservice-search/book/Update/AmountBook', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: bookId,
                        amount: amount,
                        loanBook: loanBook
                    })
                })
                .then(response => {
                    if (response.ok) {
                        show('¡Alquiler Exitoso!', 'El alquiler se realizo de forma exitosa, recuerde que debe devolver el libro el:  ' + fechaFormateada + '. ¡Gracias por fomentar la lectura!');
                    } else {
                        console.error('Error al actualizar:', response.statusText);
                    }
                })
                .catch(error => {
                    console.error('Error al actualizar:', error);
                });

                //#endregion
                
            } else {
                show('¡Advertencia!', 'Debe seleccionar los datos de alquiler');
            }

        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

const ChangeComponent = (event) => {
    const { name, value } = event.target;
    setModelData({ ...modelData, [name]: value });
  };

const closedNotificacion = (data) => {
    if(data === "¡Alquiler Exitoso!"){
        hide();
        window.location.href = '/alquiler';
    }else{        
        hide();
    }
};
//#endregion

return (
    <div>
        {showModalNotification && (
            <ModalNotification notificationTitle={notificationTitle} notificationMessage={notificationMessage} hideModal={() => closedNotificacion(notificationTitle)} />
        )}
        {selectedBook ? (
           <form onSubmit={MakeRental}>
                <div>
                    <div className='row center-items m-0 pt-5'>
                        <div className='col-md-10'>
                            <span id='navegador'><Link to={"/alquiler"}><strong>Alquiler </strong></Link><FontIcon icon={chevronRight} color="colorIcon" /> Asignar alquiler </span>
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
                                                    <input type="hidden" name="loanUser" value={modelData.loanUser}/>
                                                    <input type="hidden" name="book" value={modelData.book}/>
                                                    <label className='tituloLibro'>{"(" + selectedBook.code + ") " + selectedBook.qualification}</label>
                                                </div>
                                                <div className='col-md-4 d-flex justify-content-end'>
                                                    <div className='col-md-auto col-sm-12 d-flex justify-content-end'>
                                                        <span className='vistasLibro'>{selectedBook.viewNumber} <FontIcon icon={eye} color="colorIcon" /> | {selectedBook.amount} <FontIcon icon={book} color="colorIcon" /> </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row m-0 infoBook__Texto'>
                                            <span><strong>Autor: </strong>{selectedBook.author.name + " " + selectedBook.author.lastName} </span>
                                            <span><strong>Editorial: </strong>{selectedBook.editorial.name}</span>
                                            <span><strong>Año de publicación: </strong>{new Date(selectedBook.publicationYear).getFullYear()}</span>
                                            <span className='mt-3 text-justify'><strong>Sinopsis: </strong>{selectedBook.synopsis}</span>
                                            {/* <span><strong>ISBN: </strong>{selectedBook.isbn} </span> */}
                                        </div>
                                    </div>
                                    <div className='row m-0'>
                                        <div className='col-md-12 mt-3 text-center'>
                                            <Titulo valorTitulo={"Datos del alquiler"} />
                                        </div>
                                        <div className='col-md-6'>
                                            <DropDownList id="loanTime" name="loanTime" texto={'Tiempo de alquiler:'} options={listRentalTime} handleChange={ChangeRentalTime} mapping={{ value: 'id', label: 'name'}}/>
                                        </div>
                                        <div className='col-md-6'>
                                            <DropDownList id="deliveryType" name="deliveryType" texto={'Tipo de entrega:'} options={listDeliveryType} handleChange={ChangeDelivery} mapping={{ value: 'id', label: 'name'}}/>
                                        </div>

                                        {!hideAddress && (
                                            <div className='col-md-12 mt-3 text-center '>
                                                <div className='row'>
                                                    <Input textLabel={'Dirección de residencia:'} />
                                                </div>
                                            </div>
                                        )}

                                        <div className='col-md-12 mt-3 text-center'>
                                            <Button valor={"Realizar alquiler"} classStyle={"btnStyle"} type={'submit'} isDisabled={disabledBtn} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        ) : (
            <p>No se han encontrado datos</p>
        )}
    </div>
  );
}

export default ServicioAlquiler;