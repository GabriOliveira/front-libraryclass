import React, { useState } from 'react'
import "../Sessões/Sessoes.css"
export default function Sessoes() {
    const [lista, setLista] = useState([]);

  return (
    <div className='container-sessoes'>
      <div className='conteudo-sessoes'>
        <h1>Sessões</h1>
        <input className='input-sessoes'type='text' placeholder='Coloque a Categoria aqui...' onClick={() => setLista(lista ++)}/>

        <input className='input-sessoes' type='text' placeholder='Coloque o nome aqui...'/>
        <input className='input-sessoes' type='text' placeholder='Coloque o ID do Livro aqui...'/>
        <input className='button-sessoes' type='button' value="Enviar"/>
        </div>
    </div>
  )
}
