import React from 'react'
import Producto01 from '../../assets/Producto01.jpeg' 

const Pop = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 px-5'>
        <div className='max-w-3xl mx-auto'>
        <div className='text-center py-2 px-2  bg-purple-200 border-2 border-purple-700 rounded-3xl'>
        <button className='px-5 py-5  rounded hover:scale-110 transition text-2xl'>
        <img src={Producto01} classNamew-52/>
        </button>
        <p>
            Producto 1
        </p>
        <div className='flex flex-row justify-between	'>
        <p>Precio</p>
        <p>BsCart3</p>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Pop