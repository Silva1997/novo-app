


export const Formulario = () => {

    return (
        <div className="bg-gradient-to-r from bg-[#101010] to-indigo-950 mobile:p-4 mobile:mt-[1rem] overflow-hidden xl:h-full  xl:mt-20 xl:py-4 xl:px-16">
            <div id="Contactos" className="flex  items-center flex-col justify-center gap-12 ">
                <div>
                    <h5 style={{ marginTop: '2rem' }} className="text-center text-white mobile:text-2xl xl:text-3xl font-montserrat font-[500] uppercase ">
                        Contactos

                    </h5>
                    <p className="text-center mobile:text-lg xl:text-xl text-zinc-500 font-montserrat">Envia-nos uma mensagem, e vamos juntos construir o futuro</p>
                </div>


                <div className="flex mobile:flex-col  xl:flex-row mobile:gap-20 xl:gap-56">
                    <div className="flex items-center gap-2 flex-col" >
                        <div >
                            <svg id='items-color' fill="yellow" aria-hidden="true" width={'25'} class="e-font-icon-svg e-fas-location-arrow" viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path></svg>
                        </div>

                        <p className="text-center text-white font-montserrat">
                            ENDEREÇO <br />
                            Benguela<br />
                            Lobito | Angola</p>

                    </div>


                    <div className="flex items-center gap-2 flex-col" >
                        <div >
                            <svg id='items-color' fill="yellow" aria-hidden="true" width={'20'} class="e-font-icon-svg e-fas-mobile-alt" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>
                        </div>

                        <p className="text-center text-white font-montserrat">
                            TELEFONE<br />
                            +244 939 000 222
                        </p>

                    </div>

                    <div className="flex items-center gap-2 flex-col" >
                        <div >
                            <svg id='items-color' fill="yellow" aria-hidden="true" width={'35'} class="e-font-icon-svg e-far-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                        </div>

                        <p className="text-center text-white font-montserrat">
                            EMAIL<br />
                            geral@portifolio.co.ao

                        </p>

                    </div>


                </div>
            </div>



            <div className="mt-[1rem] mb-[1rem] overflow-hidden" >

                <div  className="flex p-2 mobile:flex-col xl:flex-row mobile:gap-8 xl:gap-3 items-center justify-center">
                    <input type="text" placeholder="Nome" className="input input-info border-2 border-white  text-white   mobile:w-full mobile:max-w-2xl xl:w-[80rem] h-10  pl-3" />
                    <input type="text" placeholder="Email" className=" input input-info border-2 border-white  text-white  mobile:w-full mobile:max-w-2xl xl:w-[80rem] h-10  pl-3" />
                    <input type="number" maxLength={8} max={8} placeholder="Contacto" className=" input input-info border-2 border-white  text-white  mobile:w-full mobile:max-w-2xl xl:w-[80rem] h-10  pl-3" />
                </div>

                <div className="flex mt-14 flex-col gap-8 items-center justify-center gap-y-4 mobile:px-1">
                    <textarea placeholder="Mensagem" className=" textarea-info textarea border-2 border-white text-white mobile:w-full mobile:max-w-2xl xl:w-[76rem] h-36  xl:pl-3" />
                    <button className=" cursor-pointer text-center text-lg text-white w-44 h-11 bg-amber-300 rounded-2xl ">Enviar</button>
                </div>

            </div>

        </div>

    )
}