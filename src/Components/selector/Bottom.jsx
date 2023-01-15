import React from 'react'
import { Link } from 'react-router-dom'

const Bottom = () => {
    return (

        <div className='overflow-x-auto p-2 cursor-grabbing'>
            <div className='flex flex-nowrap text-3xl items-center gap-2 font-Amatic left-1 px-5'>

                <Link to="/Brochas" >
                    <button className='bg-[#e0bbeaa1] p-2 px-5 hover:text-[#4e1713] rounded-3xl border-2 border-[#957DAD] text-[#957DAD] nap-start hover:bg-[#D2918C] hover:border-[#d65b52]'>
                        Brochas
                    </button>
                </Link>


                <Link to="/Sombras">
                    <button className='bg-[#e0bbeaa1] p-2 px-5 hover:text-[#4e1713] rounded-3xl border-2 border-[#957DAD] text-[#957DAD] nap-start hover:bg-[#D2918C] hover:border-[#d65b52]'>
                        Sombras
                    </button>
                </Link>

                <Link to="/Facial">
                    <button className='bg-[#e0bbeaa1] p-2 px-5 hover:text-[#4e1713] rounded-3xl border-2 border-[#957DAD] text-[#957DAD] nap-start hover:bg-[#D2918C] hover:border-[#d65b52]'>
                        Facial
                    </button>
                </Link>

                <Link to="/Accesorios">
                    <button className='bg-[#e0bbeaa1] p-2 px-5 hover:text-[#4e1713] rounded-3xl border-2 border-[#957DAD] text-[#957DAD] nap-start hover:bg-[#D2918C] hover:border-[#d65b52]'>
                        Accesorios
                    </button>
                </Link>


                <Link to="/Accesorios">
                    <button className='bg-[#e0bbeaa1] p-2 px-5 hover:text-[#4e1713] rounded-3xl border-2 border-[#957DAD] text-[#957DAD] nap-start hover:bg-[#D2918C] hover:border-[#d65b52]'>
                        Labios
                    </button>
                </Link>

                <Link to="/Accesorios">
                    <button className='bg-[#e0bbeaa1] p-2 px-5 hover:text-[#4e1713] rounded-3xl border-2 border-[#957DAD] text-[#957DAD] nap-start hover:bg-[#D2918C] hover:border-[#d65b52]'>
                        Cejas
                    </button>
                </Link>

                <Link to="/Accesorios">
                    <button className='bg-[#e0bbeaa1] p-2 px-5 hover:text-[#4e1713] rounded-3xl border-2 border-[#957DAD] text-[#957DAD] nap-start hover:bg-[#D2918C] hover:border-[#d65b52]'>
                        Ojos
                    </button>
                </Link>

                <Link to="/Capilar">
                    <button className='bg-[#e0bbeaa1] w-60 p-2 px-5 hover:text-[#4e1713] rounded-3xl border-2 border-[#957DAD] text-[#957DAD] nap-start hover:bg-[#D2918C] hover:border-[#d65b52]'>
                        Capilares y Corporales
                    </button>
                </Link>

                <a href='https://wa.me/573114529096?text=Hola!%20Estoy%20interesado%20en%20tu%20servicio%20de%20Keratinas'>
                    <button className='bg-[#e0bbeaa1] p-2 px-5 hover:text-[#4e1713] rounded-3xl border-2 border-[#957DAD] text-[#957DAD] nap-start hover:bg-[#D2918C] hover:border-[#d65b52]'>
                        Keratinas
                    </button>
                </a>


                <a href='https://wa.me/573114529096?text=Hola!%20Estoy%20interesado%20en%20tu%20servicio%20de%20Cursos'>
                    <button className='bg-[#e0bbeaa1] w-56 p-2 px-5 hover:text-[#4e1713] rounded-3xl border-2 border-[#957DAD] text-[#957DAD] nap-start hover:bg-[#D2918C] hover:border-[#d65b52]'>
                        Cursos de Maquillaje
                    </button>
                </a>


                <a href='https://wa.me/573114529096?text=Hola!%20Estoy%20interesado%20en%20tu%20servicio%20de%20los%20Cortes%20Lunares'>
                    <button className='bg-[#e0bbeaa1] w-48 p-2 px-5 hover:text-[#4e1713] rounded-3xl border-2 border-[#957DAD] text-[#957DAD] nap-start hover:bg-[#D2918C] hover:border-[#d65b52]'>
                        Cortes Lunares
                    </button>
                </a>

            </div>

        </div>

    )
}

export default Bottom