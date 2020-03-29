import React from 'react';
// import {useState} from 'react';
// Não é necessário especificar o index.js porque ele já vai procurar por um index automaticamente na pasta
import Logon from './pages/Logon';
import './global.css'

import Routes from './routes'

function App() {
  return (
    // Sempre tem que rodear com alguma tag estrutural
    <Routes />
  );
}

export default App;
