import React from 'react';
import './Cadastro.css';

export default function () {
    return (
        <div className='container-cadastro'>
            <div className="Titulo">
                <h1 className="nome">LibraryClass</h1>
                <img src="logo.png" alt="" className="logo" />
            </div>
{/*             
                <h1 className="nome">LibraryClass</h1>
                <img src="logo.png" alt="" className="logo" /> */}

            <div className="conteudo-cadastro">
            <h1> Cadastre-se</h1>
           
                <div className='box-user-cadastro'>
                    <input className='input-cadastro' type="text" required />
                    <label className='label-cadastro'>RA / CPF</label>
                    </div>
            
                    <div className='box-user-cadastro'>
                    <input className='input-cadastro'type="number" required />
                    <label className='label-cadastro'>Número da casa</label>
    </div>
    <div className='box-user-cadastro'>
                    <input className='input-cadastro' type="number" required />
                    <label className='label-cadastro'>CEP</label>
           </div>
           <div className='box-user-cadastro'>
   
                    <input className='input-cadastro' type="tel" required />
                    <label className='label-cadastro'> Telefone</label>
         </div>
         <div className='box-user-cadastro'>
                    <input className='input-cadastro' type="email" required />
                    <label className='label-cadastro'>E-mail</label>
              </div>
              <div className='box-user-cadastro'>
                    <input className='input-cadastro' type="password" required />
                    <label className='label-cadastro'>Senha</label>
                   </div>
                    <input type='button' className="botao-login-cadastro" value='Enviar'/>

                </div>
            </div>

    )
}