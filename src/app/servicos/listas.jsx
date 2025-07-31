
import React from 'react';
import Card from '../utlis/cardItem';
import { FaStar } from 'react-icons/fa';

export default function Servicos() {

  return (
    <div id='servic' className='bg-zinc-50 mobile:h-auto xl:h-[150vh] overflow-hidden mobile:py-8  xl:mt-0' >

      <div className='px-4 py-2 md:py-8 '>

        <h2 className="   text-center mobile:text-2xl md:text-3xl xl:text-3xl font-montserrat font-[500] uppercase ">Nossos Serviços</h2>
        <p className=' text-center mobile:text-sm md:text-md xl:text-lg  text-gray-600 font-montserrat'>
          Somos a sua escolha premium para  transformar os  seus eventos  em experiências.
        </p>
      </div>

      <div className="
      overflow-hidden xl:mt-2
      grid place-items-center md:grid-cols-2 md:gap-4 xl:grid-rows-12 xl:grid-cols-3  xl:gap-x-6 xl:gap-y-6 xl:p-4  xl:m-16 md:px-8 mobile:px-7 mobile:py-4 text-black 
      mobile:grid-cols-1 mobile:gap-x-4 mobile:gap-y-4">
        {

          Card.map((index) => (
            <div
              key={index.id}
              className="flex flex-col  mobile:hover:bg-zinc-50
              w-full mobile:h-[24rem] md:h-80 xl:h-full bg-white  border-1 hover:border-1 hover:duration-300 hover:shadow-yellow-300/75 hover:shadow-[3px_0px_3px_0px]  space-y-3 relative overflow-hidden" >
              {/* content  head */}
              <div className='mobile:h-60 md:h-60 bg-transparent w-full xl:h-56 transition-transform ease-in hover:scale-105  '
              
              style={{
                  backgroundImage: `url(${index.icones?.src})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center bottom",

                }}

              >
              {/* Content-body */}

                <div className="mobile:w-16 mobile:h-16 xl:w-16 xl:h-16  bg-yellow-300 rounded-full absolute mobile:-right-4 xl:-right-3 mobile:-top-4 xl:-top-5">

                  <p className="absolute bottom-4 left-6 text-white text-xl">{index.id}
                  </p>

                </div>

                <div id="head" className='mt-2'>
                  <span>{index.icon}</span>
                  <h1 className="font-medium mobile:text-lg text-white xl:text-xl font-montserrat ">{index.title}</h1>
                </div>


              </div>
              {/* content-body */}
              <div className="py-4 px-4 relative mobile:-top-2 leading-1 h-fit ">

                <p className=" text-md  tracking-tight text-start text-zinc-500 leading-6 font-montserrat ">
                  {index.desc}
                </p>

                <div className='flex  fle-row gap-4 items-stretch justify-between'>
                  <hr className='w-72 mt-4 border-[1.8] border-blue-300' />
                  <div className="relative flex flex-row items-center top-1 gap-2">
                    <FaStar className="text-yellow-300 text-xl hover:duration-200 hover:text-blue-500 hover:cursor-pointer hover:scale-110" />
                    <FaStar className="text-yellow-300 text-xl hover:duration-200 hover:text-blue-500 hover:cursor-pointer hover:scale-110" />
                    <FaStar className="text-yellow-300 text-xl hover:duration-200 hover:text-blue-500 hover:cursor-pointer hover:scale-110" />
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
