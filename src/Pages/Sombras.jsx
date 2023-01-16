import React from 'react'
import MyModal from '../Components/Modals/MyModal'
import Navbar from '../Components/Navbar'
import { NavResponsive } from '../Components/Navbar/NavResponsive'
import Bottom from '../Components/selector/Bottom'
import Footer from '../Components/selector/Footer'

const Sombras = () => {
  return (
    <div className=' mt-16'>
    <Navbar/>
    <NavResponsive />
        <img src='https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=600' className='h-24 w-full bg-purple-300' />
        <h2 className='absolute left-12 top-20 text-8xl font-Amatic'>Sombras</h2>
        <br/>
        <div className=' flex justify-center w-5/6 m-auto'>
                <p className='font-Handlee  flex center rounded-3xl border-4 border-[#c049e0] bg-[#E0BBEA] px-8 p-2 text-2xl'>
                Se de las personas que quisieras tener un ti vida 
                </p>
            </div>
            <Bottom/>
            <MyModal/>
            <Footer/>
    </div> 
  )
}

export default Sombras