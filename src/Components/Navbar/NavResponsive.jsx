import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import Logo from '../../assets/Logo.png'

export const NavResponsive = () => {
    return (
        <div className="w-full top-0 flex justify-between items-center px-40 text-2xl  gap-4 md:px-6 z-40 bg-pink-100 fixed pb-2">
            <div className="flex flex-row">
            </div>
            <p className="font-Lobster">
                <Link to="/">
                    <img size={120} className="justify-center md:w-16" src={Logo} alt="" />
                </Link>
            </p>
            <div>
                <BsCart3 className="flex flex-row items-end text-4xl fixed md:items-end right-4 top-5 animate-none z-[80]" />
            </div>
        </div>

    )
}
