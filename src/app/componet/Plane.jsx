
// "use client"
import { useState } from 'react';
import { Butao } from './Button';

export default function PacotesCateringVertical() {
  const [inicio, setInicio] = useState(0);

  const cardsPorVez = 3;

  const pacotes = [
    {
      id: 1,
      nome: "BÁSICO",
      // cor: "bg-amber-100",
      itens: [
        "Buffet simples",
        "Até 50 pessoas",
        "3 opções de pratos",
        "Bebidas não incluídas"
      ],
      botao: "Saiba mais"
    },
    {
      id: 2,
      nome: "PREMIUM",
      // cor: "bg-amber-500 text-white",
      itens: [
        "Buffet completo",
        "Até 100 pessoas",
        "5 opções de pratos",
        "Bebidas inclusas",
        "Sobremesa especial"
      ],
      botao: "Sabia Mais",
      destaque: true
    },
    {
      id: 3,
      nome: "CORPORATIVO",
      // cor: "bg-white",
      itens: [
        "Coffee break executivo",
        "Até 80 pessoas",
        "Opções saudáveis",
        "Bebidas premium"
      ],
      botao: "Saiba mais"
    },
    {
      id: 4,
      nome: "CASAMENTO",
      // cor: "bg-amber-100",
      itens: [
        "Menu personalizado",
        "Até 150 pessoas",
        "Degustação prévia",
        "Bolo incluso"
      ],
      icon:<img src='meu-app\assets\wedding.png' alt='casamento'/>,
      botao: "Saiba mais"
    },
    {
      id: 5,
      nome: "INFANTIL",
      // cor: "bg-amber-300",
      itens: [
        "Tema personalizado",
        "Até 30 crianças",
        "Comida divertida",
        "Doces e lembrancinhas"
      ],
      botao: "Saiba mais"
    },
    {
      id: 6,
      nome: "PACOTE LUXO",
      // cor: "bg-amber-400",
      itens: [
        "Chef exclusivo",
        "Até 200 pessoas",
        "Menu gourmet",
        "Open bar premium",
        "Decoração inclusa"
      ],
      botao: "Sabia Mais"
    }
  ];

  const mostrarPacotes = pacotes.slice(inicio, inicio + cardsPorVez);

  const anterior = () => {
    setInicio((prev) => Math.max(0, prev - 1));
  };

  const proximo = () => {
    setInicio((prev) => Math.min(pacotes.length - cardsPorVez, prev + 1));
  };

  return (
    <div  >
      <div  className='mt-60 text-center py-8'>
        <h2 className='text-center text-black text-3xl font-montserrat font-[500] uppercase'>Pacotes de Catering</h2>
        <p className='text-lg  text-gray-600 font-montserrat'>Oferecemos pacotes especiais para cada tipo de evento</p>
      </div>

      <div className='flex flex-col items-center gap-8'>
        <div className='flex flex-row    items-center gap-8'>
        <Butao
          texto=""
          direcao="esquerda"
          onClick={anterior}
          disabled={inicio === 0}
        />

        <div className='flex flex-row gap-1'>
          {mostrarPacotes.map((pacote) => (

<div key={pacote.id} className={`flex flex-col items-center justify-center   rounded-xl shadow-lg w-72  overflow-hidden ${
    // Se for o card do meio (índice 1 no array de 3 cards mostrados     background: linear-gradient(135deg, rgb(251, 188, 5), rgb(245, 124, 0));)
    mostrarPacotes.findIndex(p => p.id === pacote.id) === 1 ? 'h-96 z-20 bg-gradient-to-r from bg-amber-500 to-yellow-300 text-white' : `h-80 bg-gradient-to-l from bg-white to-zinc-50 relative top-8 z-10`
  }`}>
              <div className={`${pacote.cor} w-full h-1/3 rounded-[0px_0px_0px_24px] flex items-center justify-center`}>
                <span className='text-lg font-medium font-montserrat '>{pacote.nome}</span>
              </div>
              <div className='p-4   flex-grow flex flex-col items-center'>
                <ul className='list-inside  text-start mb-4 space-y-1 text-md leading-6 font-montserrat'>
                  {pacote.itens.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button style={{marginTop:'1rem'}} className={` w-32  h-10 rounded-3xl font-montserrat ${
                  pacote.destaque ? 'bg-amber-100 text-amber-800' : 'bg-amber-100 text-amber-800'
                } hover:bg-amber-700 hover:text-white transition-colors`}>
                  {pacote.botao || "Saiba mais"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <Butao
          texto=""
          direcao="direita"
          onClick={proximo}
          disabled={inicio >= pacotes.length - cardsPorVez}
        />
        </div>
      </div>
    </div>
  );
}