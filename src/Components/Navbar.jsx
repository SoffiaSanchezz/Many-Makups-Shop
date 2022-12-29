import {React, useState} from "react";
import { CgMenuRound } from "react-icons/cg";
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState(false)

return (
    <>
    <div className="fixed left-10 z-30 w-fit h-fit  rounded-full bg-[#FDDDAA]"
        onClick={() => setMenu(!menu)}>
        <CgMenuRound className=" text-5xl "/>
    </div>

    <div className="pr-20">
    {menu && (
        <div className="left-8 bottom-10 h-fit pb-20 px-5 py-20 rounded-md flex flex-col gap-4 z-20 font-Handlee">

        <Link>
            <span>Home</span>
            <hr/>
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