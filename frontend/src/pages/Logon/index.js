import React from 'react';
import {FiLogIn} from 'react-icons/fi'
// Link serve para seguir arq. SPA, acessando outra rota sem recarregar a página inteira
import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import api from '../../services/api';

import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

// Componente Header sendo exportado
// Recebe um só parâmetro props com todas as propriedades passadas
export default function Logon(props) {

  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions',{id});
      // Salvando o ID e o nome na aplicação
      localStorage.setItem('ongID',id);
      localStorage.setItem('ongName',response.data.nome);
      history.push('/profile')
    } catch(err) {
      alert('Este ID não pertence a uma ONG cadastrada. Tente novamente.');
    }
  }

  return (
    <div className='logon-container'>
        <section className='form'>
            <img src={logoImg} alt='Be The Hero' />

            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>

                <input placeholder='Sua ID' value={id} onChange={e => setId(e.target.value)} />
                <button className='button' type='submit'>Entrar</button>

                <Link className='back-link' to='/register'>
                    <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastro
                </Link>
            </form>

        </section>

        <img src={heroesImg} alt='Heroes' />
    </div>
  );
}