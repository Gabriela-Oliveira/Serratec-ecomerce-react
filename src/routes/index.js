import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Cadastro_Cliente from '../pages/Cadastro/Cadastro_Cliente';
import Cadastro_Funcionario from '../pages/Cadastro/Cadastro_Funcionario';
import Login_Cliente from '../pages/Login/Login_Cliente';
import Login_Funcionario from '../pages/Login/Login_Funcionario';
import Carrinho from '../pages/Carrinho';
import Funcionario from '../pages/Funcionario';
import Produto from '../pages/Produtos/Produto';
import Produto_Id from '../pages/Produtos/Produto_Id';


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
            <Route path="/produto" component={Produto} />
            <Route path="/produto/:id" component={Produto_Id} />

        </Switch>

    </BrowserRouter>

);

export default Routes;