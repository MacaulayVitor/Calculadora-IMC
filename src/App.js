import React,{useState} from 'react'
import './App.css';
import TabelaIMC from './components/tabelaIMC';
import Peso from './components/peso';
import Altura from './components/altura';
import Calcular from './components/calcular';
import Resultado from './components/resultado';

export default function App(){
  const [peso,setPeso]=useState()
  const [altura,setAltura]=useState()
  const [resultado,setResultado]=useState(0)
  return(
    <div>
      <h1>Tabela IMC</h1>
      <div className='atividade'>
        <Peso p={peso} sp={setPeso}/>
        <Altura a={altura} sa={setAltura}/>
        <Calcular p={peso} a={altura} sr={setResultado}/>
      </div>
    <div className='res'>
      <Resultado r={resultado}/>
    </div>
    <div className='tab'>
      <TabelaIMC/>
    </div>
    </div>
    
    
  )

}