import * as React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel";

import imagem1 from "./Galaeria/A1.png";
import imagem2 from "./Galaeria/A2.png";
import imagem3 from "./Galaeria/A3.png";





export default function CarouselSpacing() {

const Imagem =[
    {id:1, icon:imagem1},
    {id:2, icon:imagem2},
    {id:3, icon:imagem3},
    // {id:4, icon:imagem4},
      
]



  const [currentIndex, setCurrentIndex] = useState(0); // Estado para rastrear o índice ativo

  const totalSlides = Array.from({ length: 5 }).length
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides); // Avança para o próximo índice
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalSlides - 1 : prevIndex - 1// Volta para o índice anterior
    );
  };

  return (
    <>
      <div id="Eventos" className="flex flex-col mt-12 mobile:p-4 mb-0 items-center">
        <div className="py-2 px-4">
          <h5 className="text-center text-black mobile:text-2xl xl:text-3xl font-montserrat font-[500] uppercase">
            Nossos Eventos
          </h5>
          <p className="text-center mobile:text-sm xl:text-lg text-zinc-500 font-montserrat">
            criando sempre experiências que deixam marcas inesquecíveis.
          </p>
        </div>
      </div>

      <div className=" mobile:px-2 mobile:py-1 mobile:h-[28rem] sm:h-64 xl:h-[28rem] 2xl:h-96 grid grid-cols-1 gap-4 place-items-center overflow-hidden">
        <Carousel className="w-full xl:py-2 mobile:w-[100%] mobile:h-96 xl:max-w-6xl   xl:h-[100%]">
          <CarouselContent className="-ml-1"
          
          >
            {Imagem.map((img, index) => (
              <CarouselItem
            //   style={{ Array.from({ length: 5 })
            
            //     transform: `translateX(-${currentIndex * 100}%)`,
            // }}
                key={index}
                className="pl-1 mobile:flex mobile:flex-col md:basis-1/2 lg:basis-1/3"
              >
                <div className="xl:p-1  mobile:px-2">
                  <Card
                    style={{ backgroundImage: `url(${img.icon?.src})` }}
                    className={`  hover:duration-300 hover:shadow-yellow-300/75 hover:shadow-[3px_0px_3px_0px] mobile:h-96 xl:h-full  w-[100%] bg-no-repeat bg-cover bg-center rounded-lg border-0  overflow-hidden`}
                  >
                    
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      {/* Texto ativado com base no índice */}
                      <p
                      className="text-lg text-white font-montserrat font-bold"
                        //   style={{color: "#fff", fontSize: "1.3rem", fontWeight: "bold"}}
                        // className={`relative z-20 text-2xl text-white text-transicao ${
                        //   index === currentIndex ? "activar" : ""
                        // }`}
                    //   style={{color: "#fff", fontSize: "1.3rem", fontWeight: "bold"}}
                        // className={`relative z-20 text-2xl text-white text-transicao ${
                        //   index === currentIndex ? "activar" : ""
                        // }`}
                      >
                      Sabores que encantam
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={"mobile:hidden bg-amber-300 border-0"}
            // onClick={handlePrevious} // Atualiza o índice ao clicar no botão anterior
          />
          <CarouselNext
            className={"mobile:hidden bg-amber-300 border-0"}
            // onClick={handleNext} // Atualiza o índice ao clicar no botão próximo
          />
        </Carousel>
      </div>
    </>
  );
}


