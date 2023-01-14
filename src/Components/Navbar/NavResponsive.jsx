
import React, { useState } from 'react'
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { GrMenu } from "react-icons/gr";
import { FcShop } from "react-icons/fc";
import { GiToothbrush } from "react-icons/gi";
import { GiPalette } from "react-icons/gi";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";
import { GiJeweledChalice } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { GiEyelashes } from "react-icons/gi";
import { GiFrozenBody } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri"
import Logo from '../../assets/Logo.png'
import Menuu from '../../assets/MenuuTwo.png'

const NavResponsive = () => {

    const [navClass, setNavClass] = useState('hidden')
    const handleOpenMenu = () => {
        setNavClass('absolute top-0 left-0 grid grid-cols-1 bg-magenta-opa w-screen h-screen')
    };
    const handleCloseMenu = () => {
        setNavClass('hidden')
    };

    return (
        <div className='sticky z-[100] top-0 w-full'>
            <div className=' w-18 px-10 py-2'>
                <div>
                    <button onClick={handleOpenMenu}>
                    <img src={Logo}  className='z-40 pb-5 w-20'/>
                    </button>
                    <nav className={navClass}>
                        <div className="fixed left-5 z-30 w-fit h-fit  rounded-full bg-[#FDDDAA]">
                            <button onClick={handleCloseMenu} className='py-5'>
                                <RiCloseFill size={33} className='fill-light cursor-pointer' />
                            </button>
<div className='w-full top-0 flex justify-between items-center px-40 text-2xl  gap-4 md:px-6 z-40'>
                            <div className="flex flex-row items-baseline">

                                <Link >
                                    <FcShop className="text-5xl absolute left-0" />
                                    <span className="p-8">Home</span>
                                    <hr />
                                </Link>
                            </div>


                            <div className="p-4">
                                <Link>
                                    <FaPaintBrush className="absolute left-0 text-4xl text-rose-700" />
                                    <span>Brochas</span>
                                </Link>
                            </div>


                            <Link>
                                <GiPalette className="absolute left-0 text-4xl text-orange-900" />
                                <span className="p-4">Sombras</span>
                            </Link>

                            <Link>
                                <GiToothbrush className="absolute left-0 bottom-3/3 text-4xl text-sky-900" />
                                <span className="p-4">Facial</span>
                            </Link>

                            <Link>
                                <GiJeweledChalice className="absolute left-0 text-4xl text-amber-900" />
                                <span className="p-4">Accesorios</span>
                            </Link>

                            <Link>
                                <GiLipstick className="absolute left-0 text-4xl text-red-600" />
                                <span className="p-4">Labios</span>
                            </Link>

                            <Link>
                                <GiEyelashes className="absolute left-0 text-4xl" />
                                <span className="p-4">Cejas</span>
                            </Link>

                            <Link>
                                <GiFrozenBody className="absolute left-0 text-4xl" />
                                <span className="p-4">Ojos Y Piel</span>
                            </Link>

                            <Link>
                                <MdOutlineFaceRetouchingNatural className="absolute left-0 text-3xl text-fuchsia-300" />
                                <span className="p-3">Capilar y Corporal</span>
                            </Link>
                        </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='top-0 flex justify-between items-center px-40 text-2xl  gap-4 md:px-6 z-40'>
                <Link to='/'><img src={Logo} alt='Logo Many Makups Shop' className='w-20' /></Link>
            </div>
            <div className='colThree col-start-5 col-end-6 items-center'>
                <a href=''><BsCart3 size={25} className='fill-pink-400' /></a>
            </div>
        </div>

    )
}

export default NavResponsive