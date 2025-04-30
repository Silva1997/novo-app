
function Butao({ texto, onClick, direcao, disabled }) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        style={{padding:'4px'}}
        className={`rounded-3xl w-8 h-8 font-medium ${
          disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-amber-300 hover:bg-amber-500'
        } text-white transition-colors flex items-center ${
          direcao === 'esquerda' ? 'flex-row-reverse' : ''
        }`}
      >
        {texto} <span style={{margin:'0 auto'}} className="text-md">{direcao === 'esquerda' ? '←' : '→'}</span>
      </button>
    );
  }
  
  
  
  export { Butao }
  
  
  