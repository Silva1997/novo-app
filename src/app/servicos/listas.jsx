
import React from 'react'
import Card from '../utlis/cardItem'

export default function Servicos() {
  return (
    <div id='servic' className='h-[200%] overflow-hidden' >
      <h2 className=" mt-6 pb-4 text-center mobile:text-2xl xl:text-3xl font-montserrat font-[500] uppercase ">Nossos Serviços</h2>

      <div className="xl:mx-9 xl:p-7  mobile:p-4   text-black place-items-center mobile:grid-cols-1 mobile:gap-x-4 mobile:gap-y-4  grid xl:grid-cols-3 xl:grid-rows-[58dvh]   xl:gap-x-5 xl:gap-y-5 ">

        {


          Card.map((index) => (

            <div
              key={index.id}
              style={{ padding: '7px' }}
              className="w-full mobile:h-76 xl:h-[350px] rounded-xl transition xl:hover:scale-95
               hover:cursor-pointer 
               bg-gradient-to-r from bg-[#fdfcfc] to-zinc-50   
               shadow-[0px_0px_8px_rgba(0,0,0,0.09)]  space-y-3 relative overflow-hidden"
            >
              <div className="w-20 h-20 bg-yellow-300 rounded-full absolute -right-5 -top-7">
                <p className="absolute bottom-4 left-7 text-white text-2xl">{index.id}</p>
              </div>

              <div id="head" style={{ marginTop: '24px' }}>
                <span>{index.icon}</span>
                <h1 className="font-medium mobile:text-xl xl:text-xl font-montserrat ">{index.title}</h1>
              </div>

              <div style={{ marginTop: '24px' }} id="content" className="flex flex-col leading-6 ">
                <p className="text-lg  tracking-tight text-start text-zinc-500 leading-6 font-montserrat">
                  {index.desc}
                </p>
              </div>

              {/* <div className=" flex flex-1 items-center justify-center" style={{marginTop:'24px'}}>
                    <button className="rounded-2xl bg-yellow-300 p-3 w-24 h-8">Saiba Mais</button>
                     </div> */}

            </div>

          ))



        }








      </div>
      {/* 
             <div className="flex items-center justify-center mt-12">
             // Card.map((index) => (
                 //   <div key={index.id} style={{ padding: '12px' }} className="bg-white rounded-xl  border-1 border-gray-100 w-full h-64  transform transition duration-500 hover:rotate-[8deg]">
                 //     <h5 className="font-bold text-gray-800">{index.title}</h5>
                 //     <p className="text-gray-700">
                 //       {index.desc}
                 //     </p>
                 //   </div>
   
                 // ))
   
             <div className="card">
                 <div className="main-content">
                   <div className="header">
                     <span>Workshops</span>
                     <span>Gastronômicos</span>
                   </div>
                 
                   <div className="categories">
   
                     <p>
                     Transforme um evento em uma experiência
                      única! Oferecemos workshops 
                      culinários interativos, onde os participantes 
                      aprendem e se divertem. Uma maneira envolvente
                       de criar memórias especiais com amigos ou colegas.
                     </p>
                  
                   </div>
                 </div>
              
               </div>
               </div> */}

      {/* Planos */}

    </div>
  )
}
