import Titulo from '../components/Titulo/Titulo';
import React from 'react';

const Acerca = () => {
  return (
    <div id='acercaView'>

      <div className='row m-0 center-items acercaView__panel1'>
        <div className='col-md-9 p-0 mt-5 mb-4 acercaView__panel1__parrafo'>
          <p>La <strong>Biblioteca Oriental</strong> representa un enclave cultural donde la pasión por la literatura y el conocimiento se entrelazan. No es simplemente un espacio dedicado a los libros, sino un lugar que despierta la curiosidad y alimenta la mente de quienes se sumergen en su vasta colección. Desde obras clásicas hasta ejemplares contemporáneos, abarca un extenso espectro de géneros, cada uno como una ventana que invita a explorar mundos desconocidos.</p>
          <p>Más allá de ser un repositorio de libros, es un oasis para los amantes de la lectura que buscan expandir sus horizontes intelectuales. La biblioteca ofrece una experiencia integral; no solo es un refugio tranquilo, sino también un espacio social y cultural. Aquí se dan cita eventos, charlas, debates y clubes de lectura, creando una atmósfera vibrante y unida por la pasión compartida por el conocimiento.</p>
          <p>En su compromiso por adaptarse a los cambios modernos, la Biblioteca Oriental ha evolucionado hacia una plataforma híbrida. A través de su presencia virtual, los lectores pueden acceder a su rica colección desde cualquier lugar, fusionando la tradición bibliotecaria con la comodidad y accesibilidad de la era digital. Esta convergencia entre lo tangible y lo virtual ofrece una experiencia de lectura más dinámica y versátil.</p>
          <p>El compromiso con la excelencia es una piedra angular de esta institución. La atención personalizada y la constante innovación se reflejan en cada interacción, aspirando siempre a brindar una experiencia de lectura enriquecedora y memorable para cada visitante.</p>
        </div>
      </div>  
      
      <div className='row m-0 center-items text-center pt-3 acercaView__panel2'>
        <Titulo valorTitulo={"Nuestros servicios"}/>

        <div className="row center-items mt-3">
          <div className='col-md-1 center-items'>
            <div className="itemCirculo">
              <span className="numero">1</span>
            </div>
          </div>
          <div className='col-md-8 acercaView__panel2__parrafo'>
            <p>
              <strong>Alquiler y Venta de Libros:</strong> Ofrecemos la posibilidad de alquilar y adquirir libros, permitiendo a nuestros usuarios disfrutar de las obras que deseen, ya sea para su lectura ocasional o como parte de su colección personal. Con un catálogo diverso y actualizado, buscamos satisfacer los gustos y necesidades de cada lector.
            </p>
          </div>
        </div>

        <div className="row center-items mt-3">
          <div className='col-md-1 center-items'>
            <div class="itemCirculo">
              <span class="numero">2</span>
            </div>
          </div>
          <div className='col-md-8 acercaView__panel2__parrafo'>
            <p>
              <strong>Plataforma Virtual:</strong> La Biblioteca Oriental cuenta con una plataforma virtual accesible desde cualquier lugar y en cualquier momento. A través de esta plataforma, los usuarios pueden explorar nuestra colección, reservar libros, acceder a material digital y realizar transacciones de alquiler o compra en línea.
            </p>
          </div>
        </div>

        <div className="row center-items mt-3">
          <div className='col-md-1 center-items'>
            <div class="itemCirculo">
              <span class="numero">3</span>
            </div>
          </div>
          <div className='col-md-8 acercaView__panel2__parrafo'>
            <p>
              <strong>Eventos Culturales:</strong> Fomentamos la interacción entre la comunidad literaria mediante la organización de eventos culturales, tales como clubes de lectura, presentaciones de autores, charlas temáticas y talleres. Estos eventos proporcionan un espacio enriquecedor para compartir ideas, discutir libros y promover el amor por la lectura.
            </p>
          </div>
        </div>

        <div className="row center-items mt-3 mb-3">
          <div className='col-md-1 center-items'>
            <div class="itemCirculo">
              <span class="numero">4</span>
            </div>
          </div>
          <div className='col-md-8 acercaView__panel2__parrafo'>
            <p>
              <strong>Asesoramiento Personalizado:</strong> Nuestro equipo de bibliotecarios está comprometido a brindar asesoramiento personalizado, recomendaciones de lectura y orientación en la búsqueda de libros específicos, garantizando una experiencia satisfactoria para cada visitante.
            </p>
          </div>
        </div>

      </div> 

      <div className='row m-0 center-items text-center mt-3 mb-3 acercaView__panel3'>
        <div className='row center-items '>

          <div className='col-md-4 cardStyle'>
            <Titulo valorTitulo={"Misión"}/>
            <p> Nuestra misión es promover el acceso a la información y la cultura a través de una amplia oferta de libros, servicios virtuales innovadores y actividades culturales que enriquezcan la experiencia de nuestros usuarios, tanto presencial como virtualmente.</p>
          </div>

          <div className='col-md-4 cardStyle'>
            <Titulo valorTitulo={"Visión"}/>
            <p>Buscamos ser reconocidos como un referente en el mundo de la literatura, ofreciendo un ambiente acogedor y servicios de alta calidad que inspiren a las personas a explorar, aprender y disfrutar de la lectura en todas sus formas.</p>
            <p>En la Biblioteca Oriental, estamos comprometidos con la difusión del conocimiento, la diversidad literaria y el fomento de una comunidad lectora apasionada. ¡Únete a nosotros y sumérgete en el fascinante mundo de los libros!</p>
          </div>

        </div>
      </div>

    </div>
    
  );
};

export default Acerca;