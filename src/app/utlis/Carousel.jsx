import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import imagem from './imageP4.png'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function CarouselSpacing() {
    return (

        <>
            <div id="Eventos" className="flex flex-col mt-12 mobile:p-4 mb-0 items-center">

                <div className="py-2 px-4">
                    <h5 className="text-center  text-black mobile:text-2xl xl:text-3xl font-montserrat font-[500] uppercase ">
                        Nossos Eventos
                    </h5>
                    <p className="text-center mobile:text-sm  xl:text-lg text-zinc-500 font-montserrat"> criando sempre experiências que deixam marcas inesquecíveis.</p>
                </div>



            </div>

            <div className=" bg-gradient-to-r from bg-[#101010] to-indigo-950  mobile:px-2 mobile:py-3 mobile:h-[22rem] sm:h-64 xl:h-[28rem] 2xl:h-96 grid grid-cols-1 gap-4 place-items-center overflow-hidden">


                <Carousel className="w-full mobile:w-[100%] mobile:h-96   xl:max-w-6xl">
                    <CarouselContent className="-ml-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 mobile:flex mobile:flex-col md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                <Card
                                style={{backgroundImage:`url(${imagem?.src})`}}  className={`bg-amber-400 bg-no-repeat bg-cover bg-center mobile:h-80 xl:h-96 rounded-xl border-0`}
                            
                                >
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                           {/* <Image  width={100} height={100} src={imagem} alt="Random" className="rounded-lg" /> */}


                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className={'mobile:hidden bg-amber-300 border-0'} />
                    <CarouselNext className={'mobile:hidden bg-amber-300 border-0'} />
                </Carousel>
            </div>
        </>
    )
}


