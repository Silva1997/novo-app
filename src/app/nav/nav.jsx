'use client'
import React from 'react'
import Image from 'next/image';
import Icon from '../assets/Rectangle.svg';

export default function Navegador() {

    const [menuAberto, setMenuAberto] = React.useState(false);

    const items = [
        {
            key: 'part-1',
            href: '#home',
            title: 'Home',
        },
        {
            key: 'part-2',
            href: '#sobre',
            title: 'Sobre',
        },
        {
            key: 'part-3',
            href: '#servic',
            title: 'Serviços',
        },
        {
            key: 'part-4',
            href: '#Eventos',
            title: 'Eventos',
        }, {
            key: 'part-5',
            href: '#Contactos',
            title: 'Contactos'
        }
    ];

    return (
        <main>
            <nav

                style={{ padding: "0.75rem" }}
                className="flex  md:bg-white sm:bg-amber-700 lg:bg-violet-500 mobile:bg-white xl:bg-white  fixed top-0 w-full h-16 z-100 overflow-hidden items-center justify-between  mobile:justify-end"
            >
                 


{/* Mobile */}

<section className=' xl:hidden md:hidden cursor-pointer  overflow-hidden flex flex-row gap-x-1  items-center relative right-[13.3rem]'>
                        
                        {/* <Image className='p-0.5' src={Icon} alt='icon logotipo' width={'50'} height={'50'} /> */}
                        <div className='flex flex-col gap-0 m-0 p-0'>
                            <h5 className='text-lg text-yellow-300    mobile:hover:text-black font-bold uppercase font-montserrat relative -left-0'>Eventos</h5>
                            <p className='text-sm -mt-2 text-zinc-500/75 font-montserrat uppercase'>Catering</p>
                        </div>





                    </section>


                <button
                    className=" flex items-center justify-center text-base bg-white w-10 h-8 sm:hidden"
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    {menuAberto ? <svg width={'30'} height={'36'} fill="#faca15" aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path></svg> : <svg width={'30'} height={'36'} fill="#faca15" aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--open e-font-icon-svg e-eicon-menu-bar" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path></svg>}
                </button>



{/* Desktop */}
                <div className="flex flex-row items-center  w-full   p-1 overflow-hidden   gap-6 justify-end mobile:hidden">

                    <section className='  cursor-pointer w-32  overflow-hidden flex flex-row gap-x-1  items-center relative md:right-44  xl:right-[39.5rem]'>
                        
                        {/* <Image className='p-0.5' src={Icon} alt='icon logotipo' width={'57'} height={'53'} /> */}
                        <div className='flex flex-col justify-end gap-0 m-0 p-0'>
                            <h5 className='text-xl text-yellow-300  font-bold xl:hover:text-black uppercase font-montserrat relative -left-0'>Eventos</h5>
                            <p className='text-sm -mt-2 text-zinc-500/75 font-montserrat uppercase'>Catering</p>
                        </div>





                    </section>


                    {
                        items.map((item, index) => (
                            <li key={index} className="no-underline list-none">
                                <a className=" flex-wrap list-none no-underline font-montserrat nav-item relative xl:right-16 md:right-5 font-semibold text-black/55 hover:cursor-pointer hover:text-black hover:border-b-2 hover:border-yellow-300"
                                    href={item.href}>     <span className="text-yellow-300 hover:border-none border-0">{index + 1}. </span>
                                    {item.title}</a></li>
                        ))
                    }
                </div>

                 
            </nav>

            {/* Overlay para fechar o menu */}
            {menuAberto && (
                
                <div
                    className="fixed inset-0 bg-white/10 bg-opacity-50 sm:hidden"
                    onClick={() => setMenuAberto(false)}
                >

                </div>
            )}

            {/* Dispositos  */}



            {/* Menu Gaveta */}
            <div
                className={`fixed top-0 z-[60] left-0 h-full w-72 bg-white transform ${menuAberto ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 sm:hidden`}
            >

                <ul className=" relative top-28 p-4 text-black">

                    {
                        items.map((item, index) => (

                          
                          
                      <li

                       key={index}>

                      <a className='text-xl  hover:cursor-pointer hover:text-black hover:border-b-2 hover:border-yellow-300' href={item.href}>
                        <span className='text-yellow-300 flex flex-row gap-2 '> {index+1}.  <p className='text-black'>{item.title}</p> </span>
                        
                        </a>
                      
                      
                      </li>



                        ))
                    }

                </ul>
            </div>
        </main>
    )
}
