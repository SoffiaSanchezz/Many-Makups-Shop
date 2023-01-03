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
import { VscPerson } from "react-icons/vsc";
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    return (
        <>

            <div className="fixed left-5 z-30 w-fit h-fit  rounded-full bg-[#FDDDAA]"
                onClick={() => setMenu(!menu)}>
                <CgMenuRound className=" text-5xl" />
            </div>
            <div>
                {menu && (
                    <div className="fixed h-fit pb-20 px-5 py-5 rounded-md flex flex-col items-center gap-4 z-20 font-Handlee text-2xl bg-white">

                        <div className="flex flex-row items-baseline">
                            <Link >
                                <FcShop className="text-3xl" />
                                <span>Home</span>
                                <hr />
                            </Link>
                        </div>


                        <Link>
                            <span>Brochas</span>
                        </Link>

                        <Link>
                            <span>Sombras</span>
                        </Link>

                        <Link>
                            <span>Facial</span>
                        </Link>

                        <Link>
                            <span>Accesorios</span>
                        </Link>

                        <Link>
                            <span>Labios</span>
                        </Link>

                        <Link>
                            <span>Cejas</span>
                        </Link>

                        <Link>
                            <span>Ojos Y Piel</span>
                        </Link>

                        <Link>
                            <span>Capilar y Corporal</span>
                        </Link>


                    </div>

                )
                }
            </div>
        </>
    )
}

export default Navbar