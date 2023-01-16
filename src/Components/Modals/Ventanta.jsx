import { React, useState } from "react";
import { TbShoppingCartPlus } from 'react-icons/tb';
import { RiCloseFill } from 'react-icons/ri'
import So from '../../assets/Producto47.jpeg'
import mini from '../../assets/Producto48.jpeg'


const Ventanta = () => {

    const [modals, setModal] = useState(false)
    const [Espeji, setEspejo] = useState(false)
    

  return (
    <div className="grid grid-cols-2 justify-around md:grid-cols-4 p-2 gap-5">

            {/* img One modal */}
            <div className="" onClick={() => setModal(!modals)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={So} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                    Tinta Marcador Trendy
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">
                            $10.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {modals && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#7313f1] flex-col  gap-4 font-Handlee text-3xl bg-[#af81d6] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setModal(!modals)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Tinta Marcador Trendy
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                    ¡Si quieres tener color en tus labios durante todo el día, estas tintas son para ti! Son ultra pigmentadas. Su fórmula es líquida. De secado rápido. Es a prueba de manchas y no transfiere. Es de larga duración. Su divertido diseño en forma de marcador tiene una punta delgada que facilita su aplicación. Puedes construir su pigmentación. Al detal se envían tonos surtidos. Al por mayor se envían 3 tonos surtidos.

                    </p>

                </div>
            )}

            {/* img two esp */}
            <div className="" onClick={() => setEspejo(!Espeji)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={mini} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                    Labial Matte Trendy
                        </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$15.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Espeji && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#7313f1] flex-col  gap-4 font-Handlee text-3xl bg-[#af81d6] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setEspejo(!Espeji)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                    Labial Matte Trendy
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                    Labiales de larga duración acabado matte. Escoge tu tono favorito (nudes, rosas, rojos y cafés).
                    </p>

                </div>
            )}
        </div>

  )
}

export default Ventanta