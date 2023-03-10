import { React, useState } from "react";
import { TbShoppingCartPlus } from 'react-icons/tb';
import { RiCloseFill } from 'react-icons/ri'
import So from '../../assets/Producto9.jpeg'
import mini from '../../assets/Producto06.jpeg'
import Som from '../../assets/Producto10.jpeg'
import Somb from '../../assets/Producto11.jpeg'
import Sombr from '../../assets/Producto27.jpeg'
import fa from '../../assets/Producto29.jpeg'
import fac from '../../assets/Producto30.jpeg'
import faci from '../../assets/Producto31.jpeg'
import facia from '../../assets/Producto20.jpeg'
import Re from '../../assets/Producto21.jpeg'
import Recl from '../../assets/Producto32.jpeg'


const Piel = () => {

    const [modal, setModal] = useState(false)
    const [Espeji, setEspejo] = useState(false)
    const [CosMe, setOpen] = useState(false)
    const [Boti, SetSection] = useState(false)
    const [Brosh, SetBoch] = useState(false)
    const [Secti, setModal1] = useState(false)
    const [Sect, setModal2] = useState(false)
    const [Sec, setModal3] = useState(false)
    const [Sep, setModal4] = useState(false)
    const [Sept, setMod] = useState(false)
    const [SeptO, setModl] = useState(false)


    return (
        <div className="grid grid-cols-2 justify-around md:grid-cols-4 p-2 gap-5">

            {/* img One modal */}
            <div className="" onClick={() => setModal(!modal)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={So} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Purpure Bloqueador
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">
                            $37.000</p>
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
                        ??Logra cejas muy pobladas con nuestro Serum Crecimiento de Cejas! Este serum promueve el crecimiento y fortalecimiento de las cejas. Contiene extractos vegetales que ayudan a fortalecer el fol??culo piloso. El vello crece m??s resistente, el??stico y brillante. Ayuda a fijar y mantener los vellos de las cejas peinados durante el d??a. No contiene Parabenos ni colorantes.

                    </p>

                </div>
            )}

            {/* img two esp */}
            <div className="" onClick={() => setEspejo(!Espeji)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={mini} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Fijador Makeup Trendy
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
                        Sombras Star Luz
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                        Con este fijador tu maquillaje se har?? a prueba de agua, har?? que el maquillaje quede est??tico y que este donde tiene que estar, no irrita la piel ni obstruye poros, ideal para todo tipo de piel, su formulaci??n no derrite el maquillaje.

                    </p>

                </div>
            )}

            {/* img Three  */}
            <div className="" onClick={() => setOpen(!CosMe)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={Som} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Crema Anti Acne
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$20.000</p>
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
                        Crema Anti Acne
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                        Su formula es hidratante, suave y delicada con la piel, no obstruye los poros lo que puede ser utilizada todos los d??as, el extracto de rosas es lo mas beneficioso es calmante, refrescante, hidratante, nivela el ph ayuda a combatir el acn??.


                    </p>

                </div>
            )}
            {/* img Four  */}
            <div className="" onClick={() => SetSection(!Boti)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={Somb} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Mascarilla Aloe Vera
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
                        Mascarilla Aloe Vera
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                        Anti inflamatoria, astringente, desinflama,ayuda con la dermatitis, favorece las pieles con ros??cea, regenera todas las c??lulas de la piel, ??sala tambi??n en el cuerpo te beneficiara mucho


                    </p>

                </div>
            )}

            {/* img Four  */}
            <div className="" onClick={() => SetBoch(!Brosh)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={Sombr} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Parches Anti Acne
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$25.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Brosh && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => SetBoch(!Brosh)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Parches Anti Acne
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                        Mejora la piel seca y deshidratada devolviendo vida, contiene natto en vitamina B6 y E estimulando la renovaci??n celular y retarda el envejecimiento $4.000 Parchecitos anti acn?? especialmente dise??ados para secar y absorber toda la materia del granito, calma la inflamaci??n y se camuflan muy bien en la piel, d??jalos entre 4 y 12 horas y veras la diferencia, viene 60 stickres.
                    </p>

                </div>
            )}

            {/* img Four  */}
            <div className="" onClick={() => setModal1(!Secti)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={fa} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Aceite Desmaquillador
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$27.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Secti && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setModal1(!Secti)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Aceite Desmaquillante
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                        DESMAQUILLA TODOS LOS PRODUCTOS A PRUEBA DE AGUA ?? DE DIFICIL RETIRADO. Su f??rmula es NO comedog??nica, lo que quiere decir que NO obstruye los poros, NO ocasiona acn??, NO ocasiona alergia en los poros o en los fol??culos de las cejas y las pesta??as como si puede suceder con aceites de extractos puros.
                    </p>

                </div>
            )}

            {/* img Four  */}
            <div className="" onClick={() => setModal2(!Sect)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={fac} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Protector solar BioAqua
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$27.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Sect && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setModal2(!Sect)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Protector solar
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                        Crema de protecci??n solar Facial, aislamiento UV, bloqueador solar corporal, corrector resistente al agua, protector solar, cosm??ticos
                    </p>

                </div>
            )}

            {/* img Four  */}
            <div className="" onClick={() => setModal3(!Sec)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={faci} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Crema Facial hidratante
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$27.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Sec && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setModal3(!Sec)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Crema Facial hidratante
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                        Ideal para piel grasa, tiene aloe vera que hidrata y calma el rostro, y hamamelis que cicatriza imperfecciones y controla exceso de brillo.
                    </p>

                </div>
            )}

            {/* img Four  */}
            <div className="" onClick={() => setModal4(!Sep)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={facia} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Crema de Arroz
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$27.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Sep && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setModal4(!Sep)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Crema Facial de Arroz Bioaqua
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                        El arroz puede equilibrar la producci??n de aceites naturales, haciendo que la piel se hidrate por s?? sola y se mantenga suave por m??s tiempo, combinado tambi??n con la exfoliaci??n hace que se unifique el tono de la piel aclarando manchas e imperfecciones. Esta crema facial deja la piel con un aspecto suave e hidratado.
                    </p>

                </div>
            )}

            {/* img Four  */}
            <div className="" onClick={() => setMod(!Sept)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={Re} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Protector Solar Sun
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$37.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Sept && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setMod(!Sept)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Protector Solar Facial Sun Screen ??? Purpure Facial
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                        SUNSCREEN PROTECTOR SOLAR PURPURE SPF 50+ ideal para hidratar la piel y protegerla por los da??os causados por los rayos solares, so f??rmula con vitamina E previene el envejecimiento prematuro de la piel, la combinaci??n de los filtros solares act??an como una barrera protectora ante los rayos UV que producen las quemaduras solares. CL??NICAMENTE COMPROBADO.
                    </p>

                </div>
            )}

            {/* img Four  */}
            <div className="" onClick={() => setModl(!SeptO)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={Recl} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Jab??n Facial Detox
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$30.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {SeptO && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#e2554b] flex-col  gap-4 font-Handlee text-3xl bg-[#D2918C] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setModl(!SeptO)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Jab??n Facial Detox
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                        ??Nuestro Jab??n Facial D??tox es perfecto si tu tipo de piel es grasa!Combate la producci??n de grasa en el rostro, disminuye visualmente los poros y previene la aparici??n de imperfecciones. Su ingrediente principal es el carb??n activado. Limpia a profundidad sin resecar. Perfecto para pieles normales, mixtas y grasas. Puedes usarlo d??a y noche.
                    </p>

                </div>
            )}


        </div>

    )
}

export default Piel