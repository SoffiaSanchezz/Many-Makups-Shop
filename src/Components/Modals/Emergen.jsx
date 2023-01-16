import { React, useState } from "react";
import { TbShoppingCartPlus } from 'react-icons/tb';
import { RiCloseFill } from 'react-icons/ri'
import So from '../../assets/Producto15.jpeg'
import mini from '../../assets/Producto19.jpeg'
import Som from '../../assets/Producto34.jpeg'
import Somb from '../../assets/Producto97.jpeg'



const Emergen = () => {

    const [modal, setModal] = useState(false)
    const [Espeji, setEspejo] = useState(false)
    const [CosMe, setOpen] = useState(false)
    const [Boti, SetSection] = useState(false)

    return (
        <div className="grid grid-cols-2 justify-around md:grid-cols-4 p-2 gap-5">

            {/* img One modal */}
            <div className="" onClick={() => setModal(!modal)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={So} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                    Serum De Cejas Trendy
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">
                            $25.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {modal && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setModal(!modal)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Serum de Cejas Trendy
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                    Gel transparente que ayuda a peinar y fijar tus cejas durante todo el día. Puedes hacer técnicas orgánicas, semi orgánicas o tradicionales (según cómo desees peinar los pelitos de tus cejas) Es súper facil de usar, no aporta pesadez ni color a las cejas, sólo te ayuda a peinarlas. Gran tamaño, te durará bastante tiempo.
                    </p>

                </div>
            )}

            {/* img two esp */}
            <div className="" onClick={() => setEspejo(!Espeji)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={mini} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                    Gel Fijador de Cejas Trendy
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$25.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Espeji && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setEspejo(!Espeji)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                    Gel Fijador de Cejas Trendy
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                        Con este fijador tu maquillaje se hará a prueba de agua, hará que el maquillaje quede estático y que este donde tiene que estar, no irrita la piel ni obstruye poros, ideal para todo tipo de piel, su formulación no derrite el maquillaje.

                    </p>

                </div>
            )}

            {/* img Three  */}
            <div className="" onClick={() => setOpen(!CosMe)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={Som} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                    Cejas All About Brows
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$12.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {CosMe && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setOpen(!CosMe)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                    Cejas Trendy All About Brows
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                    Kit de cejas con dos pigmentos en betún y dos pigmentos en polvo. Sus tonos son únicos y universales. Ideal para las cejas de tono medio a oscuro. Alta adherencia, pigmentación, duración y deslizan super suaves. Su presentación trae un espejo full HD.

                    </p>

                </div>
            )}
            {/* img Four  */}
            <div className="" onClick={() => SetSection(!Boti)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={Somb} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Aceite Four Sensations
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$20.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Boti && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => SetSection(!Boti)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                    Aceite Crecimiento Pestañas- Cejas Four Sensations
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                    Detiene y evita la caída de las cejas y pestañas, las fortalece y nutre desde la raíz, hidratando profundamente el foliculo piloso del párpado.En las estrías, ayuda a desvanecerlas notablemente proporcionando muchisima hidratación.
                    </p>

                </div>
            )}
            </div>
    )}

            export default Emergen