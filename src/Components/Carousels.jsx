import React from 'react'
import Slideshow from './Slideshow'
import Tienda from './../assets/Tienda.jpeg'
import Shop from './../assets/Shop.jpeg'
import Many from './../assets/Many.jpeg'

const Carousels = () => {

  const slides = [
    ]

  return (
    <>
    <div>
      <h1>Ven y Visita tu tienda Favorita</h1>
      <div className='w-96 h-72 m-auto'>
        <Slideshow slides={slides}/>
        <img src={Many}/>
    <img src={Shop} />
    <img src={Tienda}/>
      </div>
    </div>
    
    </>
  );
}



export default Carousels