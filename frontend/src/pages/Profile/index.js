import React, {useEffect} from 'react';
import './styles.css'
import {FiPower, FiTrash2} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api';
import { useState } from 'react';

export default function Profile(props) {

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    // Serve para disparar funções em determinado momento do componente
    // sempre que ongId mudar, a função é chamada
    // Se for [], só chama uma vez
    useEffect(() => {
        api.get('profile',{
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`ìncideents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })

            setIncidents(incidents.filter(incident => incidents.id !== id));

        } catch(err) {
            alert('Erro ao deletar caso. Tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
      <div className="profile-container">
          <header>
            <img src={logoImg} alt='Be The Hero' />
            <span>Bem vinda, {ongName}</span>

            <Link className='button' to='/incidents/new'>Cadastrar Novo Caso</Link>
            <button type='button' onClick={handleLogout}>
                <FiPower size={18} color="#e02041" />
            </button>
          </header>

          <h1>Casos cadastrados</h1>
          <ul>
            {
                incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>incident.title</p>

                        <strong>DESCRIÇÃO</strong>
                        <p>incident.description</p>

                        <strong>VALOR:</strong>
                        <p>incident.value</p>

                        <button type='button'><FiTrash2 size={20} color='#a8a8b3' onClick={() => handleDeleteIncident(incident.id)} /></button>
                    </li>
                ))
            }
          </ul>
      </div>
    );
  }