import { React, useState } from "react";
import { TbShoppingCartPlus } from 'react-icons/tb';
import { RiCloseFill } from 'react-icons/ri'
import kit from '../../assets/Producto03.jpeg'
import BrochGru from '../../assets/Producto61.jpeg'
import Brochss from '../../assets/Producto90.jpeg'
import MiniBros from '../../assets/Producto83.jpeg'
import lab from '../../assets/Producto.1.png'



const Motions = () => {

    const [modals, setModal] = useState(false)
    const [Espeji, setEspejo] = useState(false)
    const [CosMe, setOpen] = useState(false)
    const [Boti, SetSection] = useState(false)
    const [Brosh, SetBoch] = useState(false)


  return (
    <>
            <div className="grid grid-cols-2 justify-around md:grid-cols-4 p-2 gap-5">

            {/* img One  */}
                <div className="" onClick={() => setEspejo(!Espeji)}>
                    <div className="bg-purple-100 p-5 rounded-2xl">
                        <img size={40} src={kit} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                        <h2 className="text-center text-3xl">Kit Velve</h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-pink-500 font-Lobster text-2xl">$30.000</p>
                            <TbShoppingCartPlus  className="text-3xl"/>
                        </div>
                    </div>
                </div>
                    {Espeji && (
                        <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#f65c24] flex-col  gap-4 font-Handlee text-3xl bg-[#FFDFD3] drop-shadow-2xl text-center">
                            <button
                                onClick={() => setEspejo(!Espeji)} className='absolute top-4 right-5'>
                                <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                            </button>
                            <h4 className="text-center font-Amatic text-5xl">
                                Kit Velve
                            </h4>
                            <br />
                            <p className="text-center text-3xl md:text-2xl">
                            Si estas empezando en el mundo del maquillaje o quieres implementar estas brochas son para ti, son de calidad profesional, sus fibras son sintéticas y el mango es madera (Incluye cosmetiquera)
                            </p>

                        </div>
                    )}

                    {/* img two */}
                    <div className="" onClick={() => setModal(!modals)}>
                    <div className="bg-purple-100 p-5 rounded-2xl">
                        <img size={40} src={BrochGru} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                        <h2 className="text-center text-3xl">
                        Brocha Mini 
                        </h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-pink-500 font-Lobster text-2xl">$15.000</p>
                            <TbShoppingCartPlus  className="text-3xl"/>
                        </div>
                    </div>
                </div>
                    {modals && (
                        <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#f65c24] flex-col  gap-4 font-Handlee text-3xl bg-[#FFDFD3] drop-shadow-2xl text-center">
                            <button
                                onClick={() => setModal(!modals)} className='absolute top-4 right-5 hover:text-purple-600'>
                                <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                            </button>
                            <h4 className="text-center font-Amatic text-5xl">
                                Brocha
                            </h4>
                            <br />
                            <p className="text-center">
                            Ideal para lograr una aplicación uniforme de la base. Úsala con productos líquidos o cremosos. Fabricada con pelo sintético y mango de madera. Es de línea económica y de excelente calidad.


                            </p>

                        </div>
                    )}

                    {/* img three */}
                <div className="" onClick={() => setOpen(!CosMe)}>
                    <div className="bg-purple-100 p-5 rounded-2xl">
                        <img size={40} src={Brochss} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                        <h2 className="text-center text-3xl">Kit Brochas x9</h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-2xl font-Lobster text-pink-500">$40.000</p>
                            <TbShoppingCartPlus className="text-3xl"/>
                        </div>
                    </div>
                </div>
                    {CosMe && (
                        <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#f65c24] flex-col  gap-4 font-Handlee text-3xl bg-[#FFDFD3] drop-shadow-2xl text-center">
                            <button
                                onClick={() => setOpen(!CosMe)} className='absolute top-4 right-5'>
                                <RiCloseFill size={40} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                            </button>
                            <h4 className="text-center font-Amatic text-5xl">
                                Kit Brocha x9
                            </h4>
                            <br />
                            <p className="text-center">
                            Si estas empezando en el mundo del maquillaje o quieres implementar estas brochas son para ti, son de calidad profesional, sus fibras son sintéticas y el mango es madera (Incluye cosmetiquera)
                            </p>
                        </div>
                    )}

                    <div className="" onClick={() => SetSection(!Boti)}>
                    <div className="bg-purple-100 p-5 rounded-2xl">
                        <img size={40} src={MiniBros} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                        <h2 className="text-center text-3xl">
                            Kit Brochas Mini
                        </h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-pink-500 font-Lobster text-2xl">$50.000</p>
                            <TbShoppingCartPlus  className="text-3xl"/>
                        </div>
                    </div>
                </div>
                    {Boti && (
                        <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#f65c24] flex-col  gap-4 font-Handlee text-3xl bg-[#FFDFD3] drop-shadow-2xl text-center">
                            <button
                                onClick={() => SetSection(!Boti)} className='absolute top-4 right-5'>
                                <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                            </button>
                            <h4 className="text-center font-Amatic text-5xl">
                                Kit Brochas Mini
                            </h4>
                            <br />
                            <p className="text-center">
                            ¡Este es Kit de Brochas Mini más completo de todos! Trae 10 mini brochas. Son 10 mini brochitas para rostro y ojos. Puedes aplicar productos en crema y en polvo con este kit. Son de muy alta calidad y ultra suaves. Fabricadas en pelo sintético y con mango en madera. Perfectas para llevar de viaje y en el bolso diario Incluye una cosmetiquera.

                            </p>

                        </div>
                    )}

                    <div className="" onClick={() => SetBoch(!Brosh)}>
                    <div className="bg-purple-100 p-5 rounded-2xl">
                        <img size={40} src={lab} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                        <h2 className="text-center text-3xl">
                            Kit Brochas Labial
                        </h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-pink-500 font-Lobster text-2xl">$50.000</p>
                            <TbShoppingCartPlus  className="text-3xl"/>
                        </div>
                    </div>
                </div>
                    {Brosh && (
                        <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#f65c24] flex-col  gap-4 font-Handlee text-3xl bg-[#FFDFD3] drop-shadow-2xl text-center">
                            <button
                                onClick={() => SetBoch(!Brosh)} className='absolute top-4 right-5'>
                                <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                            </button>
                            <h4 className="text-center font-Amatic text-5xl">
                                Kit Brochas Labial
                            </h4>
                            <br />
                            <p className="text-center">
                            Contiene 4 brochas, tres para ojos, difuminadora, aplicadora, detalles y una para piel la puedes usar como iluminador o polvos
                            </p>

                        </div>
                    )}

            </div>
                </> 
  )
}

export default Motions