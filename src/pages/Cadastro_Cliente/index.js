import React from 'react';

import { 
    Header,
    Container,
    Form,
    Button,
    Footer
} from './styles';

const Cadastro_Cliente = () => {
    return(
        <>
            <Header>
                <h1>Logo</h1><h2>Cadastro de cliente</h2>
            </Header>

        
            <Container>
                <h3>Complete com seu dados</h3>
                <a>Criar uma conta de vendedor</a>
            </Container>

            <Form>
                <input placeholder="Nome"></input>
                <input placeholder="Nome de Usuario"></input>
                <input placeholder="CPF"></input>
                <input placeholder="Data de nascimento"></input>
                <input placeholder="Email"></input>
                <input placeholder="Senha" type="password"></input>
                <span><input type='checkbox'/>Aceito os Termos e condições e autorizo o uso de meus dados de acordo com a Declaração de privacidade</span>
            </Form>
            
                <Button>Continuar</Button>

            <Footer>Protegido pela familia Jonsons</Footer>
        </>
    )
}

export default Cadastro_Cliente;