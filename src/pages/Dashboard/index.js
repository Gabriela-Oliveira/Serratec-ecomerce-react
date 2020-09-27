import React from 'react';

import { Link } from 'react-router-dom';

import { Body, Area_Cliente, Area_Funcionario } from './styles';

const Dashboard = () => {
    return(
        <Body>
            <Area_Cliente>
                <div class="container">
                    <h1>Área do cliente</h1>
                    <Link to='/Ccliente' >Cadastro</Link>
                    <Link to='/Lcliente' >Log in</Link>
                </div>
            </Area_Cliente>
            <Area_Funcionario>
                <div class="container">
                        <h1>Área do funcionario</h1>    
                        <Link to='/Cfuncionario' >Cadastro</Link>
                        <Link to='/Lfuncionario' >Log in</Link>
                </div>
            </Area_Funcionario>
        </Body>
    );
}

export default Dashboard;