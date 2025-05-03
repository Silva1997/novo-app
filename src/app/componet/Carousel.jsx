import React, { useState } from "react";
// import Image from "next/image";
import Imagem1 from '../assets/image0.png';
import Imagem2 from '../assets/image1.png';
import Imagem3 from '../assets/image2.png'

export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { id: 1, content: "Sabores que encantam", bgColor: "bg-blue-500", icon: Imagem1 },
        // { id: 2, content: "Celebre com excelência", bgColor: "bg-red-500", icon: Imagem2 },
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


        <div id="Eventos" className="flex flex-col mt-14 mobile:p-4 mb-2 items-center">

            <div>
                <h5 className="text-center  text-black mobile:text-2xl xl:text-3xl font-montserrat font-[500] uppercase ">
                    Nossos Eventos
                </h5>
                <p className="text-center mobile:text-sm  xl:text-lg text-zinc-500 font-montserrat"> criando sempre experiências que deixam marcas inesquecíveis.</p>
            </div>
            
            {/* Contêiner do Carousel ${slide.bgColor} */}
            <div className="relative overflow-hidden mobile:max-w-3xl xl:w-full max-w-5xl mobile:h-[63dvh] xl:h-[68vh] rounded-xl p-2">
                {/* Gradiente na borda */}
                <div className="absolute inset-0 rounded-xl border-0 p-[2px] ">
                    <div className="w-full h-full  rounded-xl"></div>
                </div>

                {/* Conteúdo do Carousel */}
                <div className="relative z-10">
                    {/* Slides */}
                    <div
                        className="flex transition-transform duration-500 mobile:gap-x-3"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className="relative flex-shrink-0 mobile:w-[100%] mobile:h-[56vh] xl:w-full xl:h-[65vh] rounded-xl flex items-center justify-center text-center text-white"
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

                                    <h5 className="text-white mobile:text-lg xl:text-2xl font-montserrat font-bold">
                                        {slide.content}

                                    </h5>


                                </article>
                                {/* </div> */}
                            </div>
                        ))}
                    </div>
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
