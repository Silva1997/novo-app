'use client'

import Link from "next/link";
import Image from "next/image";
import icon5 from './assets/about.png'
import icon3 from './assets/valores.png'
import icon4 from './assets/missao.png'
import Desenho from './assets/Desenho2.svg'
import Servicos from "./servicos/listas";
import CarouselDApiDemo from "./componet/Cardapi";
import PacotesCateringVertical from "./componet/Card";
import { Formulario } from "./componet/Form";


export default function Home() {


  return (
    <>


      {/* Conteúdo Principal */}
      <main id="home" >

        {/* Fundo do do carosel id='fundo-imagem' */}
      
        <div 
        className="grid  overflow-hidden grid-cols-1 mobile:grid-rows-[85vh] xl:grid-rows-[100vh] md:grid-rows-[50vh] place-items-center bg-[url('../../src/app/assets/fundo1.png')] bg-cover bg-no-repeat bg-center"
        >

          <div className="absolute inset-0 z-10 bg-blue-600 opacity-50 mobile:h-[85vh] xl:h-[100vh] md:h-[50vh] overflow-hidden"></div>

          <div  className="absolute md:top-32 xl:top-28">

            <Image  className=" mobile:hidden   relative z-30 md:right-62 xl:-left-[30rem] top-28 " src={Desenho} alt="desenho" width={'80'} height={'80'}/>
            <div className="flex items-center justify-center flex-col gap-y-6">
            <h2 className='text-white leading-[1rem]   font-bold text-center mobile:text-[32px] md:text-4xl xl:text-[2.5rem] z-50'> EVENTOS  & <span className="text-yellow-300">CATERING</span></h2>
            <p className="text-white leading-[1rem] text-center text-2xl z-50">
              Celebramos seus momentos <br /> com execelência
            </p>
            <Link  href="#sobre" className=" mt-1 py-2 px-4 animate-fade-right animate-once animate-duration-200 animate-delay-200 hover:bg-amber-300/55 hover:border-white flex flex-row items-center text-lg gap-2 justify-center text-center text-white w-32 border-2 border-white  rounded-3xl z-10">

           <p className="font-semibold">Sobre</p>
              <svg xmlns="http://www.w3.org/2000/svg" width={'24'} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </Link>
            </div>

          </div>
        </div>

        {/* Sobre a Empresa */}
        <div id="sobre"  className="bg-zinc-50" >
          <div   className=" mobile:[clip-path:var(--clip-path-2)] xl:[clip-path:var(--clip-path)] bg-fixed" >

            <div id="div-margin-" className="bg-gradient-to-r from bg-[#101010] to-indigo-950 mobile:py-8 mobile:px-4  md:p-8  xl:px-16  md:gap-4 xl:gap-8 justify-center  mobile:flex mobile:flex-col mobile:h-full md:grid md:grid-cols-1   xl:flex flex-row items-center lg:h-96 " >

              <div className=" relative xl:-top-12" >

                <div  className=" md:mb-3  xl:mb-2.5 flex flex-row items-center justify-start gap-1 leading-4">
                  <Image style={{ padding: '2.5px' }} placeholder="empty" className="bg-amber-300 rounded-3xl" src={icon5} alt="about" width={30} height={30} />
                  <h6 className="text-yellow-300 text-start font-montserrat font-medium text-2xl -my-2">
                    SOBRE NÓS
                  </h6>
                </div>

                <p className="text-white mobile:text-start mobile:text-md md:text-dm xl:text-lg/normal xl:text-start font-montserrat font-[400] mobile:py-3">
                  Integrada em um grupo empresarial de 
                  renome, a nossa atuação destaca-se pela 
                  posição de referência que ocupamos no 
                  mercado angolano. Com uma equipa diversa 
                  e multidisciplinar, trabalhamos continuamente para superar
                  as expectativas dos clientes, promovendo o crescimento e
                  o sucesso em cada projeto.
                </p>
              </div>

              <div className=" relative xl:-top-9">
                <div style={{ marginBottom: '0.75rem' }} className="flex flex-row items-center justify-start gap-1 leading-4">
                  <Image style={{ padding: '2.5px' }} placeholder="empty" className="bg-amber-300 rounded-3xl" src={icon3} alt="miss" width={30} height={30} />
                  <h6 className="text-yellow-300 text-start font-montserrat font-medium text-2xl  mobile:-my-2">
                    MISSÃO
                  </h6>
                </div>
                <p className="text-white mobile:text-start mobile:text-md md:text-md xl:text-lg/normal xl:text-start font-montserrat font-[400] mobile:py-3">
                  Atuamos como parceiros na modernização empresarial.
                  Promovemos soluções para o crescimento sustentável.
                  Trabalhamos para alcançar o sucesso das organizações.
                </p>
              </div>

              <div className=" relative md:-top-0.5 xl:-top-10" >
                <div style={{ marginBottom: '0.75rem' }} className="flex flex-row items-center justify-start gap-1 leading-4">
                  <Image style={{ padding: '1.5px' }} placeholder="empty" className="bg-amber-300 rounded-3xl object-cover" src={icon4} alt="miss" width={30} height={30} />
                  <h6 className="text-yellow-300 text-start font-montserrat font-medium  text-2xl  mobile:-my-2">
                    VALORES
                  </h6>
                </div>

                {/* </span> */}
                <p className="text-white mobile:text-start mobile:text-md md:text-md xl:text-lg/normal xl:text-start font-montserrat font-[400] mobile:py-3">
                  Dedicação ao profissionalismo.<br className="xl:hidden" />
                  Busca contínua pela excelência.<br className="xl:hidden" />
                  Trabalho conjunto e colaborativo.
                  Foco em soluções inovadoras.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Servicos da Empresa */}

        <Servicos />
        {/*  */}
        <PacotesCateringVertical />
        {/*  */}
        <Formulario/>
        {/*  */}
        {/* <Carousel /> */}
        <CarouselDApiDemo />
      </main>
    </>
  );
}
