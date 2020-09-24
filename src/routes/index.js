import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Cadastro_Cliente from '../pages/Cadastro/Cadastro_Cliente';
import Cadastro_Endereco from '../pages/Cadastro/Cadastro_Endereco';
import Cadastro_Funcionario from '../pages/Cadastro/Cadastro_Funcionario';
import Login_Cliente from '../pages/Login/Login_Cliente';
import Login_Funcionario from '../pages/Login/Login_Funcionario';
import Produto_ from '../pages/Produtos/Produto/index';
// import Produto_Id from '../pages/Produtos/Produto_Id';

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
            <Route path="/produto" component={Produto_} />
            {/* <Route path="/produto/:id" component={Produto_Id} />
             */}
        </Switch>

    </BrowserRouter>

);

export default Routes;