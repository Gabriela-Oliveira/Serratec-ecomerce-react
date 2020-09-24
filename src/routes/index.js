import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
<<<<<<< HEAD
import Cadastro_Cliente from '../pages/Cadastro_Cliente';
import Cadastro_Endereco from '../pages/Cadastro_Endereco';
import Cadastro_Funcionario from '../pages/Cadastro_Funcionario';
import Login_Cliente from '../pages/Login_Cliente';
import Login_Funcionario from '../pages/Login_Funcionario';
import Funcionario from '../pages/Funcionario';
=======
import Cadastro_Cliente from '../pages/Cadastro/Cadastro_Cliente';
import Cadastro_Endereco from '../pages/Cadastro/Cadastro_Endereco';
import Cadastro_Funcionario from '../pages/Cadastro/Cadastro_Funcionario';
import Login_Cliente from '../pages/Login/Login_Cliente';
import Login_Funcionario from '../pages/Login/Login_Funcionario';
>>>>>>> f62053b6e162467dec303354678d8466b1ec605c

const Routes = () => (

    <BrowserRouter>

        <Switch>

            <Route path="/" component={Dashboard} exact />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/Ccliente" component={Cadastro_Cliente} />
            <Route path="/Cendereco" component={Cadastro_Endereco} />
            <Route path="/Cfuncionario" component={Cadastro_Funcionario} />
            <Route path="/Lcliente" component={Login_Cliente} />
            <Route path="/Lfuncionario" component={Login_Funcionario} />
            <Route path="/funcionario" component={Funcionario} />
        </Switch>

    </BrowserRouter>

);

export default Routes;