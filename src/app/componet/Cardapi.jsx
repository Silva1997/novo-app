"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
//   type CarouselApi,
} from "@/components/ui/carousel"

// import imagem from '../assets/BG.png'


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
     <div id="Eventos" className="flex flex-col mobile:mt-1 xl:mt-9 mobile:py-2  items-center">
        <div className="py-4 px-2">
          <h5 className="text-center text-black mobile:text-2xl xl:text-3xl font-montserrat font-[500] uppercase">
            Nossos Eventos
          </h5>
          <p className="text-center mobile:text-sm xl:text-lg text-zinc-500 font-montserrat">
            Criando experiências únicas que deixam marcas inesquecíveis, com excelência.
          </p>
        </div>
      </div>
      

        <div className=" max-a mobile:px-7 mobile:py-1 mobile:h-[25rem] sm:h-64 xl:h-[34.5rem] 2xl:h-96 grid grid-cols-1 gap-4 place-items-center overflow-hidden">

      <Carousel setApi={setApi} 
      
          className="w-full xl:py-2 mobile:w-[100%] mobile:h-[24rem] xl:max-w-[60rem]   xl:h-[100%]">


     <CarouselContent className="-ml-1"

          >
            {Imagem.map((img, index) => (
              <CarouselItem
               
                key={index}
                className="pl-1 mobile:flex mobile:flex-col md:basis-1/2 lg:basis-1/2"
              >
                <div className="xl:p-2  mobile:px-2">
                  <Card
                    style={{ backgroundImage: `url(${img.icon?.src})` }}
                    className={` grayscale-[10px] hover:duration-300 hover:shadow-yellow-300/75 hover:shadow-[3px_0px_3px_0px] mobile:h-96 xl:h-full  w-[100%] bg-no-repeat bg-cover bg-center rounded-none border-0  overflow-hidden`}
                  >

                    <CardContent className="flex aspect-square items-center justify-center p-6">
                 
                      <p
                      
                      className={`relative z-20 text-3xl font-montserrat font-semibold text-yellow-300 text-transicao ${
                        index + 1 === current ? "activar" : "text-nulo"
                      }`}
                   
                      >
                     {index + 1 === current ? img.text : 'texto nao tem'}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>


        <CarouselPrevious className='mobile:hidden' />
        <CarouselNext className='mobile:hidden' />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Inicio {current} de {count}
      </div>
    </div>
    </>
    
  )
}
