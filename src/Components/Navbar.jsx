import { React, useState } from "react";
import Logo from '../assets/Logo.png'
import { CgMenuRound } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    return (
        <>
            <div className="fixed top-2 left-5 z-30 w-fit h-fit  rounded-full bg-[#FDDDAA] flex flex-row"
                onClick={() => setMenu(!menu)}>
                <CgMenuRound className=" text-5xl " />
            </div>

            <div className="pr-80 sm:pr-180">
                {menu && (
                    <div className="left-8 bottom-10 h-fit pb-20 px-5 py-20 rounded-md flex flex-col gap-4 z-20 font-Handlee text-1xl">

                        <Link>
                            <span>Home</span>
                            <hr />
                        </Link>

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