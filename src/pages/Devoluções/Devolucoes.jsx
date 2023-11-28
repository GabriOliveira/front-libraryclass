import React, { useState } from 'react'
import './Devolucoes.css';
export default function Devolucoes() {
  const [devolver, setDevolver] = useState([]);
  const addDevolucao = (e) => {
    e.preventDefault();
    return setDevolver([devolver]);
  }  
  return (
    <div className='container-devolucoes'>
        
    <div className='conteudo-devolucoes'>
    <h1>Devoluções</h1>
        <input className='input-devolucoes'  placeholder='Escreva o livro a ser devolvido...' type='text' id='devolucao' onChange={(e) => setDevolver(e.target.value)} />
        <input className='button-devolucoes' type='button' value='Devolver' onClick={addDevolucao}/> 
        <ul >
       {devolver.map((item) => (
            <li key={item}>{item}</li>
        ))}
        </ul>
    </div>
    
   
    </div>

  )
}
