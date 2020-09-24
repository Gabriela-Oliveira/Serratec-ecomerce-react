import React from 'react';

import { Header, Main, Container_cadastro } from './styles';

const Cadastro_Cliente = () => {
    return(
        <>
            <Header>
                <img src={} alt="Logo" />
                <h2>Cadastro de cliente</h2>
            </Header>
            <Main>
                <div>
                    <h3>Complete seu dados</h3>
                    <a>Criar uma conta de vendedor (arrow react-icon)</a>
                </div>

                <Form>
                    <input placeholder="Nome"></input>
                    <input placeholder="Nome de Usuario"></input>
                    <input placeholder="CPF"></input>
                    <input placeholder="Data de nascimento"></input>
                    <input placeholder="Email"></input>
                    <input placeholder="Senha"></input>
                    <button>Continuar</button>
                </Form>
                

            </Main>
        </>
    )
}

export default Cadastro_Cliente;