import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


// import { 
//     Dashboard,
//     Cadastro_Cliente,
//     Cadastro_Endereco,
//     Cadastro_Funcionario,
//     Login_Cliente,
//     Login_Funcionario

// } from '../pages';

import Carrinho from '../pages/Carrinho';


import Dashboard from '../pages/Dashboard';

import Cadastro_Cliente from '../pages/Cadastro_Cliente';
import Cadastro_Funcionario from '../pages/Cadastro_Funcionario';
import Login_Cliente from '../pages/Login_Cliente';
import Login_Funcionario from '../pages/Login_Funcionario';
import Carrinho from '../pages/Carrinho';
import Funcionario from '../pages/Funcionario';


const Routes = () => (

    <BrowserRouter>

        <Switch>

            <Route path="/" component={Dashboard} exact />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/Ccliente" component={Cadastro_Cliente} />
            <Route path="/Cfuncionario" component={Cadastro_Funcionario} />
            <Route path="/Lcliente" component={Login_Cliente} />
            <Route path="/Lfuncionario" component={Login_Funcionario} />
            <Route path="/carrinho" component={Carrinho} />
            <Route path="/funcionario" component={Funcionario} />
        </Switch>

    </BrowserRouter>

);

export default Routes;