import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer className=" bg-gradient-to-r from bg-[#101010] to-indigo-950  xl:mt-28 mobile:mt-[5rem]">
            <div className="mobile:flex md:grid md:grid-cols-3 md:gap-3 md:p-2 xl:grid  xl:grid-cols-3 xl:px-[5rem] xl:py-16  xl:gap-12  overflow-hidden mobile:flex-col text-white mobile:gap-y-14 mobile:items-start mobile:p-4">

                {/* xl:row-start-3 mobile:p-0 mobile:m-0  mobile:flex-col mobile:gap-y-28  text-white  flex xl:gap-[6.20rem] flex-wrap items-center  mobile:justify-center xl:justify-around */}
                <div className='relative  '>
                    <strong className=' font-montserrat font-medium text-2xl text-yellow-300 leading-10'>Eventos e Catering</strong>
                    <hr className='border-b-2 mobile:w-[90vw] xl:w-[28.6vw]  border-amber-300 ' />

                    <p className=' text-justify font-montserrat leading-6'>Somos uma empresa angolana  especializada
                        na organização e  gestão de feiras e eventos.
                        Integrada no  Grupo 100, criada  em 2023. Tem tido um crescimento  exponencial
                        na sua  área de actuação,  tendo alcançado  uma posição  de  referência no mercado angolano.</p>
                </div>

                <div className='relative '>
                    <strong className='font-montserrat font-medium  text-2xl text-yellow-300 leading-10'>Empresa</strong>
                    <hr className='border-b-2 mobile:w-[90vw] xl:w-[28.6vw]  border-amber-300 ' />
                    <ul className="list-none leading-6font-montserrat ">
                        <li>
                            <span className='flex flex-row items-center'>

                                <svg aria-hidden="true" fill='#fff' width={'14'} height={'14'} class="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                                Sobre Nós
                            </span>


                            <hr className='border-b-[0.0313rem] w-full  border-white/15 ' />

                        </li>
                        <li>
                            <span className='flex flex-row items-center'>
                                <svg aria-hidden="true" fill='#fff' width={'14'} height={'14'} class="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                                Contato
                            </span>


                            <hr className='border-b-[0.0313rem] w-full  border-white/15 ' />

                        </li>
                        <li>
                            <span className='flex flex-row items-center'>
                                <svg aria-hidden="true" fill='#fff' width={'14'} height={'14'} class="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                                Documentos Legais
                            </span>


                            <hr className='border-b-[0.0313rem] w-full  border-white/15 ' />
                        </li>
                    </ul>
                </div>

                <div className='relative '>
                    <strong className='font-montserrat font-medium  text-2xl text-yellow-300 leading-10'>Contacto</strong>
                    <hr className='border-b-2 mobile:w-[90vw] xl:w-[28.6vw]  border-amber-300 ' />
                    <ul className="list-none leading-6 font-montserrat">
                        <li >

                            <span className='flex flex-row items-center'>
                                <svg aria-hidden="true" fill='#fff' width={'14'} height={'14'} class="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>

                                Telefone: (+244) 924 000 000
                            </span>

                            <hr className='border-b-[0.0313rem] w-full  border-white/15 ' />
                            <div className='flex flex-row gap-1'>
                            <svg class="e-font-icon-svg e-fab-facebook"  width={'24'} height={20} fill='#fff' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                            <svg class="e-font-icon-svg e-fab-instagram"  width={'24'} height={20} fill='#fff' viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                            <svg class="e-font-icon-svg e-fab-tiktok"  width={'24'} height={20} fill='#fff' viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg>
                                </div>
                        </li>
                        <li >
                            <span className='flex flex-row items-center'>
                                <svg aria-hidden="true" fill='#fff' width={'14'} height={'14'} class="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                                Email: geral@eventoscarteing.co.ao
                            </span>

                            <hr className='border-b-[0.0313rem] w-full  border-white/15 ' />
                        </li>


                        <li>
                            <span className='flex flex-row items-center'>
                                <svg aria-hidden="true" fill='#fff' width={'14'} height={'14'} class="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                                |
                            </span>

                            <hr className='border-b-[0.0313rem] w-full  border-white/15 ' />
                        </li>

                    </ul>
                </div>




            </div>
            <div style={{ marginTop: "2rem" }} className="flex flex-col items-center justify-center">
                {/* <div class="tm:bg-red-500  tm:p-12 tm:text-white">
                    Este fundo será vermelho em telas com largura mínima de 360px.
                </div> */}
                <p className="text-white font-montserrat">© 2025 Todos Direitos Reservados.</p>
                <p className='text-zinc-400 font-montserrat'>Designed by Eugenio Silva</p>
            </div>
        </footer>
    )
}
