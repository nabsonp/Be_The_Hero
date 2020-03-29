import React from 'react';
import {FiLogIn} from 'react-icons/fi'
// Link serve para seguir arq. SPA, acessando outra rota sem recarregar a página inteira
import {Link} from 'react-router-dom';

import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

// Componente Header sendo exportado
// Recebe um só parâmetro props com todas as propriedades passadas
export default function Logon(props) {
  return (
    <div className='logon-container'>
        <section className='form'>
            <img src={logoImg} alt='Be The Hero' />

            <form>
                <h1>Faça seu logon</h1>

                <input placeholder='Sua ID' />
                <button className='button' type='submit'>Entrar</button>

                <Link to='/register'>
                    <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastro
                </Link>
            </form>

        </section>

        <img src={heroesImg} alt='Heroes' />
    </div>
  );
}