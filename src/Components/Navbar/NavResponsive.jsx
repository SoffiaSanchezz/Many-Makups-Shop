
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

import Logo from '../assets/Logo.png'

const NavResponsive = () => {
    return (
        <div className="w-fullf  ixed top-0 flex justify-between items-center px-40 text-2xl  gap-4 md:px-6 z-40">
            <div className="flex flex-row-reverse">
                <Link to="/">
                    <img className="w-40 left-44 md:w-20 justify-center" src={Logo} alt="" />
                </Link>
            </div>
            <p className="font-Lobster">
                Many Makups
            </p>
            <div>
                <BsCart3 className="flex flex-row items-end md:text-4xl" />
            </div>
        </div>
    )
}

export default NavResponsive