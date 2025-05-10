import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import iconPreminum from "../assets/value.png";
import iconCorporativo from "../assets/team.png";
import iconCasamento from "../assets/wedding.png";
import iconInfantil from "../assets/playing.png"; 
import iconBoxluxo from "../assets/guarantee.png"; 


import Image from "next/image";

export default function CarouselSize() {
  const pacotes = [
    {
      id: 1,
      icon: iconPreminum,
      nome: "BÁSICO",
      itens: [
        "Buffet simples",
        "Até 50 pessoas",
        "3 opções de pratos",
        "Bebidas não incluídas",
      ],
      botao: "Saiba mais",
    },
    
    {
      id: 2,
      icon: iconCorporativo,
      nome: "CORPORATIVO",
      itens: [
        "Coffee break executivo",
        "Até 80 pessoas",
        "Opções saudáveis",
        "Bebidas premium",
      ],
      botao: "Saiba mais",
    },
    {
      id: 3,
      icon: iconCasamento,
      nome: "CASAMENTO",
      itens: [
        "Menu personalizado",
        "Até 150 pessoas",
        "Degustação prévia",
        "Bolo incluso",
      ],
      botao: "Saiba mais",
    },

    {
      id: 4,
      icon: iconPreminum,
      nome: "PREMIUM",
      itens: [
        "Buffet completo",
        "Até 100 pessoas",
        "5 opções de pratos",
        "Bebidas inclusas",
        "Sobremesa especial",
      ],
      botao: "Saiba mais",
      destaque: true,
    },
    {
      id: 5,
      icon: iconInfantil,
      nome: "INFANTIL",
      itens: [
        "Tema personalizado",
        "Até 30 crianças",
        "Comida divertida",
        "Doces e lembrancinhas",
      ],
      botao: "Saiba mais",
    },
    {
      id: 6,
      icon: iconBoxluxo,
      nome: "PACOTE LUXO",
      itens: [
        "Chef exclusivo",
        "Até 200 pessoas",
        "Menu gourmet",
        "Open bar premium",
        "Decoração inclusa",
      ],
      botao: "Saiba mais",
    },
  ];

  return (



    <div className="grid grid-cols-1 place-items-center mt-4  ">


      <div className='mobile:p-4 overflow-hidden' >
        <div className=' text-center  xl:py-8'>
          <h2 className='text-center text-black mobile:text-2xl xl:text-3xl font-montserrat font-[500] uppercase'>Outros Serviços</h2>
          <p className=' mobile:text-sm xl:text-lg  text-gray-600 font-montserrat'>Oferecemos pacotes especiais para <br className='xl:hidden' /> cada tipo de evento.</p>
        </div>
      </div>


      <Carousel
      // autoplay={true}
      //   loop={true}
        opts={{
          align: "center",
        }}
        className={'w-full max-w-6xl px-4'}
      >
        <CarouselContent>
          {pacotes.map((pacote,index) => (
            <CarouselItem key={pacote.id} className=" mobile:basis-1/1 md:basis-1/2 lg:basis-1/4 gap-1">
              <div className="py-2 px-1">
                <Card className={`    rounded-lg border-0 hover:duration-300 hover:shadow-yellow-300/75 hover:shadow-[3px_0px_3px_0px]  ${pacotes.findIndex(p => p.id === pacote.id) === 3 ? ' bg-gradient-to-r from bg-amber-500 to-yellow-300 h-96 w-[100%] text-white' : 'h-96 w-full bg-gradient-to-l from bg-white to-zinc-50 '}`}>
                  <CardContent className="p-6">
                   <article className="flex flex-col items-center py-0 justify-center">
                     {/* Imagem card */}
                     <Image src={pacote.icon} width={50} height={50} alt={`icon${index + 1}`}/>
                    {/* Nome do Pacote */}
                    <h3 className="text-lg  text-center font-bold text-gray-800 mb-4 font-montserrat">
                      {pacote.nome}
                    </h3>
                    </article>

                    {/* Lista de Itens */}
                    <ul className="text-gray-600 mb-4 mobile:text-center xl:text-start font-montserrat">
                      {pacote.itens.map((item, index) => (
                        <li key={index} className="text-md">
                          - {item}
                        </li>
                      ))}
                    </ul>

                    {/* Botão */}
                  <div className="flex flex-col items-center">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-violet-400 transition font-montserrat">
                      {pacote.botao}
                    </button>
                  </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}

        </CarouselContent>
        <CarouselPrevious className={'mobile:hidden'} />
        <CarouselNext className={'mobile:hidden'} />
      </Carousel>
    </div>
  );
}
