import React from 'react'
import Ventanta from '../Components/Modals/Ventanta'
import Navbar from '../Components/Navbar'
import { IoLogoWhatsapp } from "react-icons/io"
import { NavResponsive } from '../Components/Navbar/NavResponsive'
import Bottom from '../Components/selector/Bottom'
import Footer from '../Components/selector/Footer'

const Labios = () => {
    return (
        <div className='mt-16'>
            <Navbar />
            <NavResponsive />
            <img src='https://images.pexels.com/photos/10415083/pexels-photo-10415083.jpeg?auto=compress&cs=tinysrgb&w=600' className='h-24 w-full bg-purple-100' />
            <h2 className='absolute left-12 top-20 text-8xl font-Amatic text-white'>Labios</h2>
            <br />
            <div className=' flex justify-center w-5/6 m-auto'>
                <p className='font-Handlee  flex center rounded-3xl border-4 border-[#c7463d] bg-[#D2918C] px-8 p-2 text-2xl'>
                    Espero que hayan dias en los que enamores de estar viv@
                </p>
            </div>

            <div className='fixed bottom-3 right-3 text-5xl '>
                <a href='https://api.whatsapp.com/message/YBJNOVTV34NUK1?autoload=1&app_absent=0'>
                    <IoLogoWhatsapp className='text-[#957DAD]  animate-none' /></a>
            </div>

            <Bottom />
            <Ventanta />
            <Footer />
        </div>
    )
}

export default Labios