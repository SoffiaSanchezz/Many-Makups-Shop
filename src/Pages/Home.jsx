import React from 'react'
import Navbar from '../Components/Navbar'
import Bottom from '../Components/selector/Bottom'
import { IoLogoWhatsapp } from "react-icons/io"
import Shop from '../Components/selector/Shop';
import Category from '../Components/selector/Category';
import Footer from '../Components/selector/Footer';
import { NavResponsive } from '../Components/Navbar/NavResponsive';




const Home = () => {
  return (
    <>
      <NavResponsive />
      <Navbar />

      <div className='center flex-col gap-5 w-full md:flex-row mt-20'>
        <div className="bg-clip-text text-transparent h-full flex flex-col justify-center relative center w-full  md:w-2/4"></div>
        <h2 className=' w-96 m-auto animate-[wiggle_1s_ease-in-out_infinite] text-8xl font-Amatic text-center select-none uppercase text-[#F6B2BF] md:text-9xl xl:text-[180px] '>
          Bienvenidos
        </h2>
        <div className='flex  justify-center'>
          <p className='font-Amatic text-7xl letf-2'>A</p>
          <p className='font-Amatic text-7xl'><br />Many Makeup</p>
        </div>
        <div>
          <br />
          <p className='font-lobster flex justify-center text-2xl p-2'>Te ofrecemos Variedad para el cuidado de la piel, cabello y mas...</p>
        </div>
      </div>

      <div className='fixed bottom-3 right-3 text-5xl '>
        <a href='https://api.whatsapp.com/message/YBJNOVTV34NUK1?autoload=1&app_absent=0'>
          <IoLogoWhatsapp className='text-[#957DAD]  animate-none' /></a>
      </div>
      <br />
      <section>
        <Category />
      </section>
      <br />
      <section>
        <Bottom />
      </section>
      <br />
      <section>
        <Shop />
      </section>
      <section>
      </section>



      <section>
        <Footer />
      </section>



    </>
  )
}

export default Home