import React, { useState } from "react";
// import Image from "next/image";
import Imagem1 from '../assets/image0.png';
import Imagem2 from '../assets/image1.png';
import Imagem3 from '../assets/image2.png'

export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { id: 1, content: "Sabores que encantam", bgColor: "bg-blue-500", icon: Imagem1 },
        { id: 2, content: "Celebre com excelência", bgColor: "bg-red-500", icon: Imagem2 },
        { id: 3, content: "Momentos que marcam", bgColor: "bg-yellow-500", icon: Imagem3 },
    ];

    const totalSlides = slides.length;

    const proximoSlider = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const preSlider = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    return (

        // <div className="flex mt-4  items-center justify-center border-2 border-amber-300 ">


        <div id="Eventos" className="flex flex-col mt-14 items-center">

            <div>
                <h5 className="text-center mb-6 text-black text-3xl font-montserrat font-[500] uppercase ">
                    Nossos Eventos

                </h5>
                {/* <p className="text-center text-xl text-zinc-500 font-montserrat">Envia-nos uma mensagem, e vamos juntos construir o futuro</p> */}
            </div>
            
            {/* Contêiner do Carousel ${slide.bgColor} */}
            <div className="relative overflow-hidden w-full max-w-5xl h-[68vh] rounded-xl border-2 border-amber-300 p-2">
                {/* Slides */}
                {/* <div className="absolute inset-0 bg-amber-200 opacity-100 w-full h-full z-10"> */}
                    <div
                        className="flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className="relative flex-shrink-0 w-full h-[65vh] rounded-xl flex items-center justify-center text-center text-white"
                                style={{
                                    backgroundImage: `url(${slide.icon?.src})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-indigo-500/15 rounded-xl"></div>

                                {/* Texto */}
                                <article
                                    className={`relative z-20 text-transicao ${index === currentIndex ? "activar" : ""
                                        }`}
                                >

                                    <h5 className="text-white text-2xl font-montserrat font-bold">
                                        {slide.content}

                                    </h5>


                                </article>
                                {/* </div> */}
                            </div>
                        ))}
                    {/* </div> */}

                </div>

            </div>

            {/* Botões de Navegação */}
            <div className="flex justify-center space-x-4 mt-4">
                <button
                    onClick={preSlider}
                    className="bg-gradient-to-r from bg-gray-500 to-black  text-white px-3 py-2 rounded-4xl active:scale-95 transition-transform"
                >
                    ←
                    {/* Anterior */}
                </button>

                <button
                    onClick={proximoSlider}
                    className="bg-gradient-to-r from bg-gray-500 to-black text-white px-3 py-2 rounded-4xl active:scale-95 transition-transform"
                >
                    {/* Próximo */}
                    →
                </button>
            </div>
        </div>

        // </div>
    );
}
