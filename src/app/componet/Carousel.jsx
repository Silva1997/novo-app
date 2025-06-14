
import React, { useState } from "react";
import Imagem1 from '../assets/image0.png';
import Imagem3 from '../assets/image1.png';
import Chefe1 from './chefe2.png';
import Chefe2 from './mulher.png';
import  CarouselSpacing  from "../utlis/Carousel";
import { CarouselDApiDemo } from "./Cardapi";

export default function Carousel() {

   


// 
const Equipe = [
    {
      icon:Chefe1,
      nome: "Carlos Silva",
      cargo: "Chefe de Cozinha",
      habilidades: "Mestre na culinária angolana, especialista em pratos típicos como moamba e mufete, e liderança na cozinha.",
      experiencia: "Mais de 15 anos comandando cozinhas de prestígio e elevando sabores tradicionais com um toque contemporâneo.",
    },
    {
      icon:Chefe2,
      nome: "Mariana Santos",
      cargo: "Garçonete",
      habilidades: "Atendimento caloroso, conhecimento das tradições gastronômicas locais e serviço ágil e eficiente.",
      experiencia: "8 anos proporcionando hospitalidade com o verdadeiro espírito angolano, garantindo que cada cliente seja unico.",
    },
    {
        icon:Chefe1,
        nome: "Costa Junior",
        cargo: "Bar Men",
        habilidades: "Especialista em doces típicos angolanos como bolo de ginguba e cocada, além de confeitaria fina.",
        experiencia: "12 anos aperfeiçoando receitas tradicionais e inovando na arte da confeitaria para encantar os paladares.",
      },
       {
      icon:Chefe2,
      nome: "Ana Costa",
      cargo: "Pasteleira",
      habilidades: "Especialista em doces típicos angolanos como bolo de ginguba e cocada, além de confeitaria fina.",
      experiencia: "12 anos aperfeiçoando receitas tradicionais e inovando na arte da confeitaria para encantar os paladares.",
    },
  ];
  

    return (
        <>
            {/* Nossos Eventos */}
            
            <CarouselDApiDemo/>
                {/* <CarouselSpacing/> */}

            {/* Nossa Equipa */}


            <div id="#" className="flex flex-col xl:mt-9  mobile:mt-1 mobile:p-4 items-center">

                <div className="py-4 px-2">
                    <h5 className="text-center  text-black mobile:text-2xl xl:text-3xl font-montserrat font-[500] uppercase ">
                        Nossa Equipa
                    </h5>
                    <p className="text-center mobile:text-sm  xl:text-lg text-zinc-500 font-montserrat">Profissionais apaixonados, sabores inesquecíveis excelência em <br className="mobile:hidden"/> catering para cada ocasião.</p>
                </div>

                <div className=" xl:-mt-4   xl:grid xl:h-screen mobile:items-center mobile:justify-center w-full xl:grid-cols-4 mobile:flex mobile:flex-col mobile:gap-y-2 xl:place-items-center xl:gap-4 xl:px-16">
                    {Equipe.map((equipe, index) => (
                        <div
                            key={index}
                            className=" xl:gap-8 mobile:gap-y-2   w-80  mobile:h-[31rem] xl:h-[89%] flex flex-col items-start px-4 overflow-hidden"
                        >


                           {/* Conteudo head */}

                           <div className=" bg-white h-[480px] mobile:mt-2 rounded-xl">


                         <div className=" p-2 h-60 w-72">

                          <div
                                style={{
                                    backgroundImage: `url(${equipe?.icon.src})`,
                          
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                }}
                                className="relative top-2 -right-2 bg-zinc-100 w-56 mobile:h-[100%] xl:h-56 z-20 rounded-tl-3xl rounded-br-3xl p-2 grayscale-0 "
                            >
                            </div>

                            {/* Fundo Secundário */}
                            <div className="relative -top-[12rem] left-8 bg-amber-300 w-56 h-[100%] xl:h-56 z-10 rounded-tl-3xl rounded-br-3xl"></div>
                          </div>

                            {/* Conteúdo do Card */}
                            <div className="relative top-14 flex flex-col  gap-1 py-2 px-4">
                                <h2 className=" text-start text-xl text-yellow-300  font-montserrat font-semibold">{equipe.nome}</h2>
                                <p className="text-black font-medium text-md  text-start font-montserrat">{equipe.cargo}</p>
                                <p className="text-zinc-400  font-montserrat text-start">{equipe.habilidades}</p>
                                {/* <p className="text-black  font-montserrat text-start">{equipe.experiencia}</p> */}
                            </div>
                       


                           </div>
                         
                       
                       
                        </div>
                    ))}
                </div>


            </div>

        </>
    );
}


  function meu (){

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

    return(


          <>
        <div className="relative border-2 border-violet-500 overflow-hidden mobile:max-w-[76rem] xl:w-screen xl:max-w-[76rem] mobile:h-[63dvh] xl:h-[72vh] rounded-xl px-4 py-2">
        {/* Gradiente na borda */}
        <div className="absolute inset-0 rounded-xl border-0 p-[2px] ">
            <div className="w-full h-full  rounded-xl"></div>
        </div>

        {/* Conteúdo do Carousel */}
        <div className="relative z-10">
            {/* Slides */}
            <div
                className="flex transition-transform duration-500 xl:gap-x-1 mobile:gap-x-3"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="relative flex-shrink-0 mobile:w-[100%] mobile:h-[60vh] xl:w-[100%] xl:h-[69vh] rounded-xl flex items-center justify-center text-center text-white"
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

    </>
    )
}