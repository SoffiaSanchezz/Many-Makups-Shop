import { React, useState } from "react";
import { CgMenuRound } from "react-icons/cg";
import { FcShop } from "react-icons/fc";
import { GiToothbrush } from "react-icons/gi";
import { GiPalette } from "react-icons/gi";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";
import { GiJeweledChalice } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { GiEyelashes } from "react-icons/gi";
import { GiFrozenBody } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import Menuu from '../assets/MenuuTwo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState(false) 


    return (
        <>

            <div className="fixed left-5 top-4 z-[100] w-fit h-fit  rounded-full bg-[#E0BBEA] hover:bg-pink-200"
                onClick={() => setMenu(!menu)}>
                <CgMenuRound className="text-5xl"  />
            </div>
            <div>
            <br/>
                {menu && (
                    <div className="fixed z-[90] h-fit w-full pb-32 pt-16 px-8 top-5 rounded-br-full border-r-4 border-[#E0BBEA] flex flex-col  gap-4 font-Handlee text-3xl bg-pink-100 drop-shadow-2xl">

                        <div className="flex flex-row">
                            <Link to="/">
                                <FcShop className="text-5xl absolute left-3" />
                                <span className="p-8  hover:text-pink-600">Home</span>
                                <hr />
                            </Link>
                        </div>


                        <div className="p-4 hover:text-purple-800">
                        <Link to="/Brochas">
                        <FaPaintBrush className="absolute left-0 text-4xl text-rose-700"/>
                            <span>Brochas</span>
                        </Link>
</div>


                        <Link to="/Sombras">
                        <GiPalette className="absolute left-0 text-4xl text-orange-900"/>
                            <span className="p-4  hover:text-purple-800">Sombras</span>
                        </Link>

                        <Link to="/Facial">
                        <GiToothbrush className="absolute left-0 bottom-3/3 text-4xl text-sky-900"/>
                            <span className="p-4  hover:text-purple-800">Facial</span>
                        </Link>

                        <Link to="/Accesorios">
                        <GiJeweledChalice className="absolute left-0 text-4xl text-amber-900"/>
                            <span className="p-4  hover:text-purple-800">Accesorios</span>
                        </Link>

                        <Link to="/Labios">
                        <GiLipstick className="absolute left-0 text-4xl text-red-600"/>
                            <span className="p-4 hover:text-purple-800">Labios</span>
                        </Link>

                        <Link to="/Cejas">
                        <GiEyelashes className="absolute left-0 text-4xl"/>
                            <span className="p-4 hover:text-purple-800">Cejas</span>
                        </Link>

                        <Link to="/Ojos">
                        <GiFrozenBody className="absolute left-0 text-4xl"/>
                            <span className="p-4 hover:text-purple-800">Ojos Y Piel</span>
                        </Link>

                        <Link to="/Capilar">
                        <MdOutlineFaceRetouchingNatural className="absolute left-0 text-3xl text-fuchsia-300"/>
                            <span className="p-3 hover:text-purple-800">Capilar y Corporal</span>
                        </Link>
                    </div>
                )
                }
            </div>
        </>
    )
}

export default Navbar