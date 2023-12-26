import React from 'react';
import Banner1 from '../../img/Banner1.jpg';
import Banner2 from '../../img/Banner2.jpg';
import Banner3 from '../../img/Banner3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de haber importado los estilos de Bootstrap
import { Carousel } from 'bootstrap'; // Importa el componente Carousel de Bootstrap
import '../Carousel/Carousel.css'

class CarouselComponent extends React.Component {
  componentDidMount() {
    new Carousel(document.getElementById('carouselExampleControls'), {
      interval: 4000, //Tiempo en milisegundos
    });
  }

  render() {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Banner1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={Banner2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={Banner3} className="d-block w-100" alt="Slide 3" />
          </div>
          {/* Agrega aquí más elementos carousel-item con tus imágenes */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default CarouselComponent;
