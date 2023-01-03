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
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [selectedId, setSelectedId] = useState(null)


    return (
        <>

            <div className="fixed left-5 z-30 w-fit h-fit  rounded-full bg-[#FDDDAA]"
                onClick={() => setMenu(!menu)}>
                <CgMenuRound className=" text-5xl" />
            </div>
            <div>
                {menu && (
                    <div className="fixed h-fit pb-40 px-8 py-16 rounded-r-full border-4 flex flex-col  gap-4 z-20 font-Handlee text-3xl bg-white">

                        <div className="flex flex-row items-baseline">
                            <Link >
                                <FcShop className="text-5xl absolute left-0" />
                                <span className="p-8">Home</span>
                                <hr />
                            </Link>
                        </div>


                        <div className="p-5">
                        <Link>
                        <FaPaintBrush className="absolute left-0 text-4xl text-rose-700"/>
                            <span>Brochas</span>
                        </Link>
</div>


                        <Link>
                        <GiPalette className="absolute left-0 text-4xl text-orange-900"/>
                            <span className="p-5">Sombras</span>
                        </Link>

                        <Link>
                        <GiToothbrush className="absolute left-0 bottom-3/3 text-4xl text-sky-900"/>
                            <span className="p-5">Facial</span>
                        </Link>

                        <Link>
                        <GiJeweledChalice className="absolute left-0 text-4xl text-amber-900"/>
                            <span className="p-5">Accesorios</span>
                        </Link>

                        <Link>
                        <GiLipstick className="absolute left-0 text-4xl text-red-600"/>
                            <span className="p-5">Labios</span>
                        </Link>

                        <Link>
                        <GiEyelashes className="absolute left-0 text-4xl"/>
                            <span className="p-5">Cejas</span>
                        </Link>

                        <Link>
                        <GiFrozenBody className="absolute left-0 text-4xl"/>
                            <span className="p-4">Ojos Y Piel</span>
                        </Link>

                        <Link>
                        <MdOutlineFaceRetouchingNatural className="absolute left-0 text-3xl text-fuchsia-300"/>
                            <span className="p-3">Capilar y Corporal</span>
                        </Link>

                        


                    </div>

                )
                }
            </div>
        </>
    )
}

export default Navbar