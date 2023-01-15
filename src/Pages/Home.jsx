import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Bottom from '../Components/selector/Bottom'
import { BsCart3 } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io"
import Logo from '../assets/Logo.png'
import Shop from '../Components/selector/Shop';
import Category from '../Components/selector/Category';
import Modal from '../Components/Modal';
import Footer from '../Components/selector/Footer';




const Home = () => {
  return (
    <>

      <Navbar />

      <div className="w-full top-0 flex justify-between items-center px-40 text-2xl  gap-4 md:px-6 z-40 bg-pink-100 fixed pb-2">
        <div className="flex flex-row">
        </div>
        <p className="font-Lobster">
        <Link to="/">
            <img className="justify-center w-40 md:w-16" src={Logo} alt="" />
          </Link>
        </p>
        <div>
          <BsCart3 className="flex flex-row items-end text-4xl fixed md:items-end right-4 top-5 animate-none" />
        </div>
      </div>

      <br />

      <div className='center flex-col gap-5 w-full md:flex-row mt-20'>
        <div className="bg-clip-text text-transparent h-full flex flex-col justify-center relative center w-full  md:w-2/4"></div>
        <h2 className='animate-[wiggle_1s_ease-in-out_infinite] text-8xl font-Amatic text-center select-none uppercase text-[#F6B2BF] md:text-9xl xl:text-[180px] '>
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
        <Footer/>
      </section>



    </>
  )
}

export default Home