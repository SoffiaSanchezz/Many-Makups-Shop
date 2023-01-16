import { React, useState } from "react";
import { TbShoppingCartPlus } from 'react-icons/tb';
import { RiCloseFill } from 'react-icons/ri'
import Estu from '../../assets/Producto87.jpeg'
import Espejos from '../../assets/Producto73.jpeg'
import Botilitos from '../../assets/Producto72.jpeg'
import Espejito from '../../assets/Producto71.jpeg'
import Plancha from '../../assets/Producto70.jpeg'
import Botella from '../../assets/producto78.jpeg'
import Trendy from '../../assets/producto88.jpeg'
import Cartu from '../../assets/producto02.jpeg'
import Brochh from '../../assets/Producto13.jpeg'


const Modal = () => {
    const [modals, setModal] = useState(false)
    const [Espeji, setEspejo] = useState(false)
    const [CosMe, setOpen] = useState(false)
    const [Boti, SetSection] = useState(false)
    const [Brosh, SetBoch] = useState(false)


    return (
        <>
            <div className="grid grid-cols-2 justify-around md:grid-cols-4 p-2 gap-5">
                    {/* img two */}
                    <div className="" onClick={() => setModal(!modals)}>
                    <div className="bg-purple-100 p-5 rounded-2xl">
                        <img size={40} src={Plancha} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                        <h2 className="text-center text-3xl">
                        Pinza Rizadora
                        </h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-pink-500 font-Lobster text-2xl">$100.000</p>
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
                                Pinza Rizadora
                            </h4>
                            <br />
                            <p className="text-center">
                                ¡Nada mejor que tener un crespos perfectos y definidos!
                                con tubo pequeño para mejor definicion facil de manejar con mango delgado y libiana

                            </p>

                        </div>
                    )}

            {/* img One  */}
                <div className="" onClick={() => setEspejo(!Espeji)}>
                    <div className="bg-purple-100 p-5 rounded-2xl">
                        <img size={40} src={Espejos} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                        <h2 className="text-center text-3xl">Espejos Trendy</h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-pink-500 font-Lobster text-2xl">$15.000</p>
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
                                Espejos Paleta Trendy
                            </h4>
                            <br />
                            <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                                ¡Nada mejor que tener un espejo de mano para maquillarte a detalle!
                                Espejo de mano con forma cuadrada.Diseño exclusivos Trendy. Tiene un mango central de peso equilibrado. Es perfecto para tus viajes, retocar o maquillar en cualquier lugar.
                                <img src={Espejito} className=' w-48'/>
                            </p>

                        </div>
                    )}


                {/* img three */}
                <div className="" onClick={() => setOpen(!CosMe)}>
                    <div className="bg-purple-100 p-5 rounded-2xl">
                        <img size={40} src={Estu} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                        <h2 className="text-center text-3xl">Cosmetiquera Trendy</h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-2xl font-Lobster text-pink-500">$15.000</p>
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
                                Cosmetiquera 
                            </h4>
                            <br />
                            <p className="text-center">
                            Mejora la circulación facial, mantiene la piel uniforme y tersa gracias a sus propiedades frías, ayuda a controlar signos de la edad, mantiene la firmeza, estimula las células de colágeno, para que empiecen a actuar por ellas mismas. Son hermosas, y super espaciosas, su material es super resistente y fácil de limpiar lo que quiere decir que no se va a pelar, mantiene tus implementos de maquillaje intactos y sin temor a que se te  pierdan.
                            </p>

                        </div>
                    )}

                {/* img Four */}

                    <div className="" onClick={() => setOpen(!CosMe)}>
                    <div className="bg-purple-100 p-5 rounded-2xl">
                        <img size={40} src={Trendy} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                        <h2 className="text-center text-3xl">Cosmetiquera Trendy</h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-2xl font-Lobster text-pink-500">$15.000</p>
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
                                Cosmetiquera 
                            </h4>
                            <br />
                            <p className="text-center">
                            Mejora la circulación facial, mantiene la piel uniforme y tersa gracias a sus propiedades frías, ayuda a controlar signos de la edad, mantiene la firmeza, estimula las células de colágeno, para que empiecen a actuar por ellas mismas. Son hermosas, y super espaciosas, su material es super resistente y fácil de limpiar lo que quiere decir que no se va a pelar, mantiene tus implementos de maquillaje intactos y sin temor a que se te  pierdan.
                            </p>

                        </div>
                    )}
                    <div className="" onClick={() => setOpen(!CosMe)}>
                    <div className="bg-purple-100 p-5 rounded-2xl">
                        <img size={40} src={Cartu} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                        <h2 className="text-center text-3xl">Cosmetiquera Trendy</h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-2xl font-Lobster text-pink-500">$15.000</p>
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
                                Cosmetiquera 
                            </h4>
                            <br />
                            <p className="text-center">
                            Mejora la circulación facial, mantiene la piel uniforme y tersa gracias a sus propiedades frías, ayuda a controlar signos de la edad, mantiene la firmeza, estimula las células de colágeno, para que empiecen a actuar por ellas mismas. Son hermosas, y super espaciosas, su material es super resistente y fácil de limpiar lo que quiere decir que no se va a pelar, mantiene tus implementos de maquillaje intactos y sin temor a que se te  pierdan.
                            </p>

                        </div>
                    )}

                {/* img five */}

                <div className="" onClick={() => SetSection(!Boti)}>
                    <div className="bg-purple-100 p-5 rounded-2xl">
                        <img size={40} src={Botilitos} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                        <h2 className="text-center text-3xl">
                            Termo Para agua
                        </h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-pink-500 font-Lobster text-2xl">$15.000</p>
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
                                Botilitos Para el agua
                            </h4>
                            <br />
                            <p className="text-center">
                                ¡Termo de Agua 2 Litros de colores motivacional!
                                Te presentamos este hermoso y práctico.Mide tu ingesta diaria de agua y recuerda mantenerte hidratado, con nuestros dos diseños diferentes
                            </p>

                        </div>
                    )}

                    <div className="" onClick={() => SetSection(!Boti)}>
                    <div className="bg-purple-100 p-5 rounded-2xl">
                        <img size={40} src={Botella} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                        <h2 className="text-center text-3xl">
                            Termo Para agua
                        </h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-pink-500 font-Lobster text-2xl">$15.000</p>
                            <TbShoppingCartPlus  className="text-3xl"/>
                        </div>
                    </div>
                </div>
                

                    <div className="" onClick={() => SetBoch(!Brosh)}>
                    <div className="bg-purple-100 p-5 rounded-2xl">
                        <img size={40} src={Brochh} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                        <h2 className="text-center text-3xl">
                            Brochas Para Mascarilla
                        </h2>
                        <div className='flex flex-row justify-between'>
                            <p className="text-pink-500 font-Lobster text-2xl">$10.000</p>
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
                                Brochas para Mascarillas
                            </h4>
                            <br />
                            <p className="text-center">
                            Nunca fue tan fácil y divertido aplicar nuestras mascarillas favoritas, vienen dos extremos diferentes un lado es una brochas plana ideal para mascarillas y el otro lado una brocha para lavar el rostro con cerdas siliconadas.
                            </p>

                        </div>
                    )}
            </div>
        </>              
    )
}

export default Modal