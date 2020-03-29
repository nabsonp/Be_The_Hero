import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// Switch serve para chamar apenas uma rota por vez

import Logon from './pages/Logon'
import Register from './pages/Register';

// Componente Routes retorna uma rota para o caminho 'path' 
//    mostrando o componente 'component'
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logon} />
                <Route path='/register' component={Register} />
            </Switch>
        </BrowserRouter>
    );
}