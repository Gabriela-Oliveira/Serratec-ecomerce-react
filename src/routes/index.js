import React from 'react';

import { BrowserRouter, Switch, Router } from 'react-router-dom';

import { 
    Dashboard,
    Cadastro_Cliente,
    Cadastro_Endereco,
    Cadastro_Funcionario,
    Login_Cliente,
    Login_Funcionario

} from '../pages';

const Router = () => (

    <BrowserRouter>

        <Switch>

            <Router path="/" component={Dashboard} exact />
            <Router path="/dashboard" component={Dashboard} exact />
            <Router path="/Ccliente" component={Cadastro_Cliente} />
            <Router path="/Cendereco" component={Cadastro_Endereco} />
            <Router path="/Cfuncionario" component={Cadastro_Funcionario} />
            <Router path="/Lcliente" component={Login_Cliente} />
            <Router path="/Lfuncionario" component={Login_Funcionario} />
            
        </Switch>

    </BrowserRouter>

);

export default Routes;