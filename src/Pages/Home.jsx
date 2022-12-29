import React from 'react'
import Navbar from '../Components/Navbar'
import NavResponsive from '../Components/NavResponsive'

const Home = () => {
  return (
    <>
      <Navbar />
      <NavResponsive />

      <section className='bottom-5'>
        <div className='center flex-col gap-5 w-full md:flex-row'>
          <div className="bg-clip-text text-transparent h-full flex flex-col justify-center relative center w-full  md:w-2/4"></div>
          <h2 className='text-6xl font-Amatic text-center select-none uppercase text-[#F6B2BF] sm:text-8xl xl:text-[120px]'>
            Bienvenidos
          </h2>
          <div className='flex fle justify-center'>
          <p className='font-Amatic text-5xl letf-2'>A</p>
          <p className='font-Amatic text-5xl'><br/>Many Makups</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home