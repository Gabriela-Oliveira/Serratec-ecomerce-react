import React from 'react';

import { Link } from 'react-router-dom';

import { Body, Area_Cliente, Area_Funcionario } from './styles';

const Dashboard = () => {
    return(
        <Body>
            <Area_Cliente>
                <h1>Area do cliente</h1>

                <Link to='/Ccliente' >Cadastro</Link>
                <Link to='/Lcliente' >Log in</Link>
            </Area_Cliente>

            <Area_Funcionario>
                <h1>Area do funcionario</h1>    

                <Link to='/Cfuncionario' >Cadastro</Link>
                <Link to='/Lfuncionario' >Log in</Link>
            </Area_Funcionario>
        </Body>
    );
}

export default Dashboard;