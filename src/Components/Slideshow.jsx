import ReactModal from 'react-modal';
import React, { useState } from 'react';
import Kit from '../assets/Producto01.jpeg'
import KitF from '../assets/Producto02.jpeg'


const Slideshow = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null)

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 p-5 '>
            <button onClick={() => setIsOpen(true)}>
                <img src={Kit} alt='' className='' />
                <h2 className='font-Lobster text-3xl'>
                    Kit Brocha Labial
                </h2>
            </button>

            <button onClick={() => setIsOpen(true)}>
                <img src={KitF} alt='' className='' />
                <h2 className='font-Lobster text-3xl'>
                    Kit Fantacy
                </h2>
            </button>

            <ReactModal
                isOpen={isOpen}
                contentLabel="Slideshow02"
                onRequestClose={() => setIsOpen(false)}
            >
                <div>
                    <h2 className='font-Lobster text-3xl text-center'>
                        Kit Brocha Labial
                    </h2>
                    <br />
                    <p className='text-2xl'>Contiene 4 brochas, tres para ojos, difuminadora, aplicadora,detalles y una para piel la puedes usar como iluminador o
                        polvos
                    </p>
                </div>
                

            </ReactModal>

            <ReactModal
                isOpen={isOpen}
                contentLabel="Slideshow"
                onRequestClose={() => setIsOpen(false)}
            >
            <div>
                    <h2 className='font-Lobster text-3xl text-center'>
                        Kit Fantacy
                    </h2>
                    <br />
                    <p className='text-2xl'>
                        Brochas de calidad en fibra de nylon, super suaves al tacto, no maltaran la piel, contiene 4 brochas 3 para ojitos y una para rostro, super prácticas de llevar y su diseño es divino.
                    </p>
                </div>
                </ReactModal>

                
        </div>
        

    )
}

export default Slideshow