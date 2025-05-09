
import React from 'react';
import Card from '../utlis/cardItem';
import { FaStar } from 'react-icons/fa';

import icon from '../assets/image0.png';

export default function Servicos() {

  return (
    <div id='servic' className='bg-zinc-50 mobile:h-auto xl:h-[160vh] overflow-hidden' >

      <div className='px-4 py-2'>

        <h2 className="   text-center mobile:text-2xl xl:text-3xl font-montserrat font-[500] uppercase ">Nossos Serviços</h2>
        <p className=' text-center mobile:text-sm xl:text-lg  text-gray-600 font-montserrat'>
          Somos a sua escolha premium para <br className='xl:hidden' /> transformar os  seus eventos  em experiências <br /> verdadeiramente memoráveis.
        </p>
      </div>

      <div className="

    overflow-hidden
      xl:mt-6 grid place-items-center xl:grid-rows-12 xl:grid-cols-3  xl:gap-x-8 xl:gap-y-8 xl:mx-9 xl:mr-16 xl:ml-16 mobile:p-4  text-black 
      mobile:grid-cols-1 mobile:gap-x-4 mobile:gap-y-4  ">
        {

          Card.map((index) => (
            <div
              key={index.id}
              className="
               flex flex-col 
              w-full mobile:h-[23rem] xl:h-96 rounded-xl transition 
               hover:cursor-pointer 
              bg-white
               shadow-[0px_0px_8px_rgba(0,0,0,0.09)]  space-y-3 relative overflow-hidden
              "
            >
              {/* content */}
              <div className='mobile:h-56 xl:h-56  transition-transform ease-in xl:hover:scale-105  '
                style={{
                  backgroundImage: `url(${index.icones?.src})`,
                  // backgroundImage: `url(${icon?.src})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center bottom",

                }}
              >

                <div className="mobile:w-16 mobile:h-16 xl:w-16 xl:h-16  bg-yellow-300 rounded-full absolute mobile:-right-4 xl:-right-3 mobile:-top-4 xl:-top-5">

                  <p className="absolute bottom-4 left-6 text-white text-xl">{index.id}
                  </p>

                </div>

                <div id="head" className='mt-2'>
                  <span>{index.icon}</span>
                  <h1 className="font-medium mobile:text-lg text-white xl:text-xl font-montserrat ">{index.title}</h1>
                </div>


              </div>
              {/* contentsub */}
              <div className="py-4 px-2 relative mobile:-top-2 leading-1 h-fit ">

                <p className=" text-md  tracking-tight text-start text-zinc-500 leading-6 font-montserrat ">
                  {index.desc}
                </p>

                <div className='flex  fle-row gap-4 items-stretch justify-between'>
                <hr className='w-72 mt-4 border-[1.8] border-blue-300'/>  
               <div className="relative flex flex-row items-center top-1 gap-2">
               <FaStar className="text-yellow-300 text-xl" />
                <FaStar className="text-yellow-300 text-xl" />
                <FaStar className="text-yellow-300 text-xl" />
               </div>
                </div>

              </div>

            </div>

          ))



        }








      </div>


    </div>
  )
}
