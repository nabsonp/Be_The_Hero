import React from 'react';
import './styles.css'
import {FiArrowLeft} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg'
import { useState } from 'react';
import api from '../../services/api';


// Componente Header sendo exportado
// Recebe um só parâmetro props com todas as propriedades passadas
export default function Register(props) {

    const [nome, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    // Serve para fazer navegação
    const history = useHistory();

    async function handleRegister(e) {

        e.preventDefault();

        const data = {
            nome,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data);
            alert(`O seu ID de acesso é ${response.data.id}`);
            history.push('/');
        } catch(error) {
            alert('Erro no cadastro. Tente novamente.');
        }
    }

  return (
    <div className='register-container'>
        <div className='content'>
            <section>
                <img src={logoImg} alt='Be The Hero' />

                <h1>Cadastro</h1>
                <p>
                    Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
                </p>
                <Link className='back-link' to='/'>
                    <FiArrowLeft size={16} color="#e02041" />
                    Já tenho cadastro
                </Link>
            </section>
            <form onSubmit={handleRegister}>
                <input placeholder="Nome da ONG" value={nome} onChange = {e => setName(e.target.value)} />
                <input type="email" placeholder="E-mail" value={email} onChange = {e => setEmail(e.target.value)} />
                <input placeholder="Whatsapp" value={whatsapp} onChange = {e => setWhatsapp(e.target.value)} />
                <div className="input-group">
                    <input placeholder="Cidade" value={city} onChange = {e => setCity(e.target.value)} />
                    <input placeholder="UF" style={{ width: 80 }} value={uf} onChange = {e => setUf(e.target.value)} />
                </div>
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
  );
}