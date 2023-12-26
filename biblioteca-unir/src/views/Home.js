import Card from '../components/Card/Card';
import Carousel from '../components/Carousel/Carousel';
import Ranking from '../components/Ranking/Ranking';
import React from 'react';

const Home = () => {
  return (
    <div>
      <div className='row m-0 center-items panel1'>
        <div className='col-md-8 p-0'>
          <Carousel />
        </div>
        <div className='col-md-4 d-flex align-items-center'>
          <Card />
        </div>
      </div>  
      <div className='row m-0 center-items panel2'>
        <Ranking/>
      </div>    
    </div>
    
  );
};

export default Home;