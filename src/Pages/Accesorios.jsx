import React from 'react'
import Navbar from '../Components/Navbar'
import { NavResponsive } from '../Components/Navbar/NavResponsive'
import Bottom from '../Components/selector/Bottom'
import Footer from '../Components/selector/Footer'

const Accesorios = () => {
    return (
        <div className='mt-16'>
            <Navbar />
            <NavResponsive />
            <img src='https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600' className='h-24 w-full bg-purple-100' />
            <h2 className='absolute left-12 top-20 text-8xl font-Amatic'>Accesorios</h2>
            <br />
            <div className=' flex justify-center w-5/6 m-auto'>
                <p className='font-Handlee  flex center rounded-3xl border-4 border-[#c7463d] bg-[#D2918C] px-8 p-2 text-2xl'>
                    Se La persona que quisieras ser en tu vida
                </p>
            </div>
            <Bottom/>
            <Footer/>
        </div>
    )
}

export default Accesorios