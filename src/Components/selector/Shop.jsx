import React from 'react'
import { HiHeart } from "react-icons/hi"
import { TbMapPin } from "react-icons/tb"

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
                <br />
                <div className='max-w-screen-lg m-50-auto overflow-hidden'>
                    <p className='text-center text-4xl text-[#FEC8D8]  underline decoration-wavy'><HiHeart className='text-5xl text-red-400 absolute animate-pulse md:left-72 ' /> TU TIENDA fAVORITA </p>
                    <br />
                    <div class='vid flex justify-center m-auto pl-6'>
                        <video loop autoPlay>
                            <source src="Manyyy.mp4" type="video/mp4" ></source>
                        </video>
                    </div>
                    <br/>
                    <div className='flex flex-row justify-center'>
                    <TbMapPin className='text-5xl text-red-700' />
                    <p className='text-2xl'>
                    Calle 11 #8-30  Villa Sajonia <br/>
                    Facatativa (Cundinamarca)
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shop