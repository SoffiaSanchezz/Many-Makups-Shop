import React from 'react'
import { AiFillInstagram } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiWhatsappFill } from "react-icons/ri"
import { FaTiktok } from "react-icons/fa"
import { BiHeart } from "react-icons/bi"
import { FcShipped } from "react-icons/fc"

const Footer = () => {
  return (
    <>
      <div className=''>
        <div className='bg-[#E0BBEA] px-10 py-4'>
          <h2 className='text-center text-purple-900 text-1xl leading-5 font-Amatic text-3xl'>
            ¡Hecha un vistazo a nuestros productos y conocenos mas!
          </h2>
          <div className='py-2'>
            <h2 className=' text-2xl'>
              Siguenos en nuestras redes sociales
            </h2>
            <div className='py-2 gap-2 ml-2'>
              <a href='https://www.instagram.com/many.makeup.shop/' className='flex flex-row hover:text-[#EA5E54]'>
                <AiFillInstagram className='text-[#471778] text-4xl hover:text-[#ea5e54]' />
                <p className='text-xl'>@many.makeup.shop</p>
              </a>
              <a href='https://www.facebook.com/Many.makeup2/' className='flex flex-row gap-2 hover:text-[#EA5E54]' >
                <BsFacebook className='text-[#471778] text-3xl hover:text-[#ea5e54]' />
                <p className='text-xl'> Many.makeup</p>
              </a>
              <a href='https://api.whatsapp.com/message/YBJNOVTV34NUK1?autoload=1&app_absent=0' className='flex flex-row gap-1 hover:text-[#ea5e54]'>
                <RiWhatsappFill className='text-4xl text-[#471778] hover:text-[#ea5e54]' />
                <p className='text-xl'> +57 3114529096</p>
              </a>
              <a href='https://www.tiktok.com/@many.makeup' className='flex flex-row gap-1 hover:text-[#ea5e54]'>
                <FaTiktok className='text-3xl text-[#471778] hover:text-[#ea5e54]' />
                <p className='text-xl'> Many.makeup</p>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 bg-purple-400 border-t-2 border-purple-900'>
              <div className=' px-20 py-4'>
        <h2 className='text-2xl font-Lobster'>
          Recibimos todo tipo de pago
        </h2>
        <div className=''>
          <div className='flex flex-row'>
            <BiHeart className='text-1xl text-red-900' />
            <p>Bancolombia (Cta de Ahorros)</p>
          </div>
          <div className='flex flex-row'>
            <BiHeart className='text-1xl text-red-900' />
            <p>Nequi y DaviPlata</p>
          </div>
          <div className='flex flex-row'>
            <BiHeart className='text-1xl text-red-500' />
            <p>Datafono</p>
          </div>
        </div>
        </div>
        <div>
          <div className='flex flex-row justify-center'>
            <FcShipped  className='text-5xl'/>
            <h3 className=' font-Amatic text-3xl'>Envios Nacionales</h3>
            </div>
            <div>
          <p className='text-center'>Contraentrega a:<br/> (Funza ,Facatativa ,Mosquera)</p>
        </div>
        </div>
        </div>

    </>
  )
}

export default Footer