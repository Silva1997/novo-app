"use client"

import * as React from "react"

// import { Card, CardContent } from "@/components/ui/card";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// //   type CarouselApi,
// } from "@/components/ui/carousel"

import fundo_imagem from '../componet/bolinhos.png';
import fundo_imagem1 from '../componet/pizza.png';
import fundo_imagem3 from '../utlis/Galaeria/comida1.png';
import imagem1 from "../utlis/Galaeria/A1.png";
import imagem2 from "../utlis/Galaeria/A2.png";
import imagem3 from "../utlis/Galaeria/A3.png";


export default function CarouselDApiDemo() {
  const [api, setApi] = React.useState()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)



   const Imagem = [
      { id: 1, icon: imagem1,text:'Sabores que encantam' },
      { id: 2, icon: imagem2,text:'Sabores que  voce ama' },
      { id: 3, icon: imagem3,text:'Perfeito para voce' },
  
    ]
  

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (

    <>
     <div id="Eventos" className="flex flex-col md:mt-4 mobile:mt-1 xl:mt-9 mobile:py-2  items-center">
        <div className="py-4 px-2">
          <h5 className="text-center text-black md:text-3xl mobile:text-2xl xl:text-3xl font-montserrat font-[500] uppercase">
            Nossos Eventos
          </h5>
          <p className="text-center md:text-md mobile:text-sm xl:text-lg text-zinc-500 font-montserrat">
            Criando experiências únicas que deixam marcas inesquecíveis, com excelência.
          </p>
        </div>
      </div>
      

 <div className=" bg-gradient-to-r from bg-[#101010] to-indigo-950 xl:m-16 xl:p-2 xl:mt-0 mobile:px-7 mobile:py-1 md:px-8 md:-mt-4 mobile:h-full md:h-[42rem] md:mb-20 sm:h-64 xl:h-[50.5rem] 2xl:h-96 grid grid-cols-1 gap-4 place-items-center overflow-hidden"  >

{/* <div className="grid bg-zinc-50 gap-1  w-full h-full place-items-center overflow-hidden"> */}
  {/* Primeira linha */}
  <div className="w-full flex flex-col md:py-0.5  mobile:gap-y-1 md:flex-row gap-x-1 h-full">
    <div
      className="bg-blue-500 w-full  md:w-1/1 mobile:h-96 md:h-80 xl:h-[28rem] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${fundo_imagem.src})` }}
    >
      3
    </div>
    <div
      className="bg-green-500 w-full md:w-1/2 mobile:h-60 md:h-60 xl:h-72  bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${fundo_imagem1.src})` }}
    >
      4
    </div>
  </div>
  {/* Segunda linha */}
  <div className="w-full flex flex-col md:flex-row mobile:gap-y-1 gap-x-1 h-full">
    <div className="bg-violet-500 w-full md:w-1/1  h-[21.445rem] flex items-center justify-center bg-center bg-no-repeat bg-cover"
     style={{ backgroundImage: `url(${imagem1.src})` }}
    >
      3
    </div>
    <div className="bg-yellow-500 w-full md:w-1/2 max-h-full mobile:h-80 md:h-[26.442rem] md:-top-20 xl:h-[31.445rem] relative xl:-top-40 flex items-center justify-center bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${fundo_imagem3.src})` }}
    >
      4
    </div>
  </div>
{/* </div> */}
     
      {/* <div className="text-muted-foreground py-2 text-center text-sm">
        Inicio {current} de {count}
      </div> */}
    </div>
    
    </>
    );
  }




  // const Meu = () =>{

  // return (



  //    <Carousel setApi={setApi} 
      
  //         className="w-full xl:py-2 mobile:w-[100%]  md:h-[28rem]  mobile:h-[24rem] xl:max-w-[60rem]   xl:h-[100%]">


  //    <CarouselContent className="-ml-1"

  //         >
  //           {Imagem.map((img, index) => (
  //             <CarouselItem
               
  //               key={index}
  //               className="pl-1 mobile:flex mobile:flex-col md:basis-1/2 lg:basis-1/2 "
  //             >
  //               <div className="xl:p-2 md:px-1 md:py-2  mobile:px-2">
  //                 <Card
  //                   style={{ backgroundImage: `url(${img.icon?.src})` }}
  //                   className={` grayscale-[10px] hover:duration-300 hover:shadow-yellow-300/75 hover:shadow-[3px_0px_3px_0px] md:h-[27rem] mobile:h-96 xl:h-full  w-[100%] bg-no-repeat bg-cover bg-center rounded-none border-0  overflow-hidden`} 
  //                 >

  //                   <CardContent className="flex aspect-square items-center justify-center p-6">
                 
  //                     <p
                      
  //                     className={`relative z-20 text-3xl font-montserrat font-semibold text-yellow-300 text-transicao ${
  //                       index + 1 === current ? "activar" : "text-nulo"
  //                     }`}
                   
  //                     >
  //                    {index + 1 === current ? img.text : 'texto nao tem'}
  //                     </p>
  //                   </CardContent>
  //                 </Card>
  //               </div>
  //             </CarouselItem>
  //           ))}
  //         </CarouselContent>


  //       <CarouselPrevious className='mobile:hidden md:hidden' />
  //       <CarouselNext className='mobile:hidden md:hidden' />
  //     </Carousel>
  // )
  // }