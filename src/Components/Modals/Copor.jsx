import { React, useState } from "react";
import { TbShoppingCartPlus } from 'react-icons/tb';
import { RiCloseFill } from 'react-icons/ri'
import So from '../../assets/Producto18.jpeg'
import mini from '../../assets/Producto35.jpeg'
import Som from '../../assets/Producto36.jpeg'
import Somb from '../../assets/Producto37.jpeg'
import Sombr from '../../assets/Producto38.jpeg'
import fa from '../../assets/Producto39.jpeg'
import fac from '../../assets/Producto41.jpeg'
import faci from '../../assets/Producto43.jpeg'
import facia from '../../assets/Producto44.jpeg'
import Re from '../../assets/Producto89.jpeg'



const Copor = () => {

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

    
  return (
    <div className="grid grid-cols-2 justify-around md:grid-cols-4 p-2 gap-5">

            {/* img One modal */}
            <div className="" onClick={() => setModal(!modal)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={So} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Depilador istantanio
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">
                            $30.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {modal && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#4be2b0] flex-col  gap-4 font-Handlee text-3xl bg-[#8cd2cf] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setModal(!modal)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        DepilYA Depilador instantaneo
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                    Elimina el vello corporal en solo 1 minuto y lo mejor de todo ??Sin dolor! Con depilYA no solo eliminas el vello de tu cuerpo, sino que reduce la cantidad que sale y su grosor. Tu piel merece lo mejor, por eso este producto ser?? tu mejor amigo para evitar ardor, cortaduras y m??s molestias producidas por otros tipos de depilaci??n.
                    </p>

                </div>
            )}

            {/* img two esp */}
            <div className="" onClick={() => setEspejo(!Espeji)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={mini} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Shampoo Four Sensation
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$50.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Espeji && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#4be2b0] flex-col  gap-4 font-Handlee text-3xl bg-[#8cd2cf] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setEspejo(!Espeji)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                    Shampoo Four Sensation
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                    !Potencializada con Biotina, Ginseng, Pantenol, Aloe vera, prote??na de Seda y microesferas que ir??n destilando todas sus propiedades en el acondicionador.Ayudan a devolver la vitalidad perdida, regeneran, reparan y suavizan gracias a su formula tan nutritiva. Dejan el cabello con libertad de movimiento, f??cil de peinar y manejable. Controla la ca??da del cabello y favorece el crecimiento del mismo. Apto para cualquier tono, con decoloraciones, tintes o procesos quimicos permanentes.
                    </p>

                </div>
            )}

            {/* img Three  */}
            <div className="" onClick={() => setOpen(!CosMe)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={Som} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Shampoo
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$20.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {CosMe && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#4be2b0] flex-col  gap-4 font-Handlee text-3xl bg-[#8cd2cf] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setOpen(!CosMe)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Shampoo
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
                        Crema Corporal
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$20.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Boti && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#4be2b0] flex-col  gap-4 font-Handlee text-3xl bg-[#8cd2cf] drop-shadow-2xl text-center">
                    <button
                        onClick={() => SetSection(!Boti)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Crema Corporal hidratante
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
                        Kit Detox Capilar
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$61.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Brosh && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#4be2b0] flex-col  gap-4 font-Handlee text-3xl bg-[#8cd2cf] drop-shadow-2xl text-center">
                    <button
                        onClick={() => SetBoch(!Brosh)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                    Kit Detox Capilar
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                    Nuestro cabello tambi??n necesita una desintoxicaci??n, un aire, una oxigenaci??n. Y para ello, te recomendamos este kit <br/>*SHAMPOO* <br/>???Libre de Sulfato y Sal <br/>???Es una f??rmula enriquecida con Emolientes humectantes y una mezcla de extractos los cuales ayudan restableciendo la fuerza y la nutrici??n del cabello.
                    </p>

                </div>
            )}

            {/* img Four  */}
            <div className="" onClick={() => setModal1(!Secti)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={fa} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                    Four Sensations Suero
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$26.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Secti && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#4be2b0] flex-col  gap-4 font-Handlee text-3xl bg-[#8cd2cf] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setModal1(!Secti)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                    Four Sensations Suero Capilar 
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                    Contiene Aceite de mano de res, queratina hidrolizada, miel, arg??n, entre otros.Restaura, protege e hidrata profundamente, da vol??men, brillo y mucha fuerza a las puntas del cabello; las cuales han sido maltratadas debido a los efectos nocivos del medio ambiente, al uso de qu??micos y de aparatos el??ctricos para el cabello.

                    </p>

                </div>
            )}

            {/* img Four  */}
            <div className="" onClick={() => setModal2(!Sect)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={fac} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                    Champ?? 2en1 perd plus 
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$27.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Sect && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#4be2b0] flex-col  gap-4 font-Handlee text-3xl bg-[#8cd2cf] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setModal2(!Sect)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                    Champ?? 2En1 Pert Plus Champ?? Y Acondicionador
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                    PERT Plus 2 en 1 champ?? y acondicionador cl??sico limpia. F??rmula del medio acondicionado. Champ?? y acondicionador de medio en una f??rmula que a??ade facilidad de uso, enjuague con agua limpia y no acumular. Hacer cabello normal cabello brillante y saludable.
                    </p>

                </div>
            )}

            {/* img Four  */}
            <div className="" onClick={() => setModal3(!Sec)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={faci} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                    Fantas??a Natural
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$32.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Sec && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#4be2b0] flex-col  gap-4 font-Handlee text-3xl bg-[#8cd2cf] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setModal3(!Sec)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                    Fantas??a Natural
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                    CON PROTECCI??N UV (crea en el cabello una barrera que protege de los rayos solares directos). Literal, vivir??s una experiencia de maravillosos e inigualables resultados. ??Muchos extractos se fusionan para formar tres productos en uno solo! Crema para peinar, tratamiento y termoprotector
                    </p>

                </div>
            )}

            {/* img Four  */}
            <div className="" onClick={() => setModal4(!Sep)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={facia} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Keratina Epa Colombia
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$160.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Sep && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#4be2b0] flex-col  gap-4 font-Handlee text-3xl bg-[#8cd2cf] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setModal4(!Sep)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                        Keratina Epa Colombia
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                    COMBO SUPER COMPLETO DE KERATINA MAS POST CUIDADO F??RMULA NUEVA AMIGA , TU CABELLO QUEDARA SUPER LISO Y ADEMAS TE VA A CRECER MUCHISIMO.
                    </p>

                </div>
            )}

            {/* img Four  */}
            <div className="" onClick={() => setMod(!Sept)}>
                <div className="bg-purple-100 p-5 rounded-2xl">
                    <img size={40} src={Re} alt="Cosmetiquera" className=" rounded-3xl hover:scale-105" />
                    <h2 className="text-center text-3xl">
                        Dulce Renacer
                    </h2>
                    <div className='flex flex-row justify-between'>
                        <p className="text-pink-500 font-Lobster text-2xl">$37.000</p>
                        <TbShoppingCartPlus className="text-3xl" />
                    </div>
                </div>
            </div>
            {Sept && (
                <div className=" fixed z-[90] inline-block h-98 w-98 px-10 py-10 top-40 right-5 left-5 rounded-lg border-4 border-[#4be2b0] flex-col  gap-4 font-Handlee text-3xl bg-[#8cd2cf] drop-shadow-2xl text-center">
                    <button
                        onClick={() => setMod(!Sept)} className='absolute top-4 right-5'>
                        <RiCloseFill size={33} className='fill-light cursor-pointer bg-[#0005] border-2 rounded-full border-black  hover:text-purple-900 hover:border-purple-900' />
                    </button>
                    <h4 className="text-center font-Amatic text-5xl">
                    DULCE RENACER TRATAMIENTO CAPILAR NUTRITIVO
                    </h4>
                    <br />
                    <p className="text-center text-xl flex md:text-2xl flex-row-reverse">
                    Contiene Aguacate, Papaya, Frutos Rojos, Proteina de Seda, Proteina de Trigo, Coco, Miel, Tomate, Mango, Manzana, Ciruelas, Almendras, Uchuvas, Maracuy??, Cacao, Aceites, prote??nas, amino??cidos, Ceramidas, Vitaminas, y Agentes acondicionadores los cuales trabajan en conjunto para realizar una nutrici??n profunda y un fortalecimiento del cabello, proporcionando a la fibra capilar una apariencia suave y muy sedosa, mucho brillo, hidrataci??n, nutrici??n, suavidad, vitalidad. Detiene la ca??da, quita la resequedad y la caspa. Acelera el crecimiento del cabello, estimulando el fol??culo piloso. Evita y controla el Frizz.
                    </p>

                </div>
            )}

        </div>
  )
}

export default Copor