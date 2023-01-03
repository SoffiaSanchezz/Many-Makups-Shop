import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Bottom from '../Components/selector/Bottom'
import { BsCart3 } from "react-icons/bs";
import { IoLogoWhatsapp} from "react-icons/io"
import Logo from '../assets/Logo.png'
import Shop from '../Components/selector/Shop';
import Category from '../Components/selector/Category';
import Slideshow from '../Components/Slideshow.jsx';



const Home = () => {
  return (
    <>

    <Navbar/>

<div className="w-full top-0 flex justify-between items-center px-40 text-2xl  gap-4 md:px-6 z-40">
        <div className="flex flex-row ">
          <Link to="/">
            <img className="w-20 justify-center" src={Logo} alt="" />     
          </Link>
        </div>
        <p className="font-Lobster">
          Many Makeups
        </p>
        <div>
          <BsCart3 className="flex flex-row items-end text-4xl fixed md:items-end right-0 top-2" />
        </div>
        </div>

        <br/>

        <div className='center flex-col gap-5 w-full md:flex-row'>
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

      <div className='fixed bottom-0 right-0 text-5xl '>
      <a href='https://api.whatsapp.com/message/YBJNOVTV34NUK1?autoload=1&app_absent=0'>
      <IoLogoWhatsapp className='text-[#957DAD]  decoration-4'/></a>
      </div>
      <br />
      <Bottom />
      <br />
      <Category />
      <br />
      <Shop />
      <Slideshow />

    

    </>
)
}

export default Home