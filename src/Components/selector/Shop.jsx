import React from 'react'
import {HiHeart} from "react-icons/hi"

const Shop = () => {
    return (
        <>
            <div className='p-5'>
                <div className='flex justify-center'>
                    <h3 className='text-4xl font-Lobster'>
                        ¿Quienes Somos?
                    </h3>
                </div>
                <div className='flex justify-center'>
                    <p className='text-2xl'>
                        Ofrecemos producto de belleza y tenemos Un Puntos de venta en el cual nos puedes encontrar tenemos varias categorias y encuentras varidad de productos damos servicio de domicilio
                    </p>
                </div>
                <br/>
                <div className='max-w-screen-lg m-50-auto overflow-hidden'>
                    <p className='text-center text-4xl text-[#FEC8D8]  underline decoration-wavy'><HiHeart className='text-5xl text-red-400'/> TU TIENDA fAVORITA </p>
                    <br/>
                </div>
            </div>
        </>
    )
}
export default Shop