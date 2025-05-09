import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer className=" bg-gradient-to-r from bg-[#101010] to-indigo-950  xl:mt-56 mobile:mt-[5rem]">
            <div className="mobile:flex xl:grid xl:grid-cols-3 xl:p-12  xl:gap-12  overflow-hidden mobile:flex-col text-white mobile:gap-y-14 mobile:items-start mobile:p-4">

                {/* xl:row-start-3 mobile:p-0 mobile:m-0  mobile:flex-col mobile:gap-y-28  text-white  flex xl:gap-[6.20rem] flex-wrap items-center  mobile:justify-center xl:justify-around */}
                <div className='relative  '>
                    <strong className=' font-montserrat font-medium text-2xl text-yellow-300 leading-10'>Eventos e Catering</strong>
                    <hr className='border-b-2 mobile:w-[90vw] xl:w-[28.6vw]  border-amber-300 ' />

                    <p className=' text-justify font-montserrat leading-6'>Somos uma empresa angolana  especializada
                        na organização e  gestão de feiras e eventos.
                        Integrada no  Grupo Aly, criada  em 2023. Tem tido um crescimento  exponencial
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

                                Telefone: (+244) 924 000 080
                            </span>

                            <hr className='border-b-[0.0313rem] w-full  border-white/15 ' />
                            <div className='flex flex-row gap-2'>
                                <FaFacebookSquare />
                                <FaInstagram />
                                <FaSquareWhatsapp />
                                </div>
                        </li>
                        <li >
                            <span className='flex flex-row items-center'>
                                <svg aria-hidden="true" fill='#fff' width={'14'} height={'14'} class="e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                                Email: geral@eventosarena.co.ao
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
            <div style={{ marginTop: "4rem" }} className="flex flex-col items-center justify-center">
                {/* <div class="tm:bg-red-500  tm:p-12 tm:text-white">
                    Este fundo será vermelho em telas com largura mínima de 360px.
                </div> */}
                <p className="text-white font-montserrat">© 2025 Todos Direitos Reservados.</p>
                <p className='text-zinc-400 font-montserrat'>Designed by Eugenio Silva</p>
            </div>
        </footer>
    )
}
