import React from "react";

import { Link } from "react-router-dom";

import { TiArrowRightThick } from "react-icons/ti";

import { Header, Container, Form, Body, Footer } from "./styles";

const Cadastro_Cliente = () => {
  return (
    <Body>
      <Header>
        <h1>Logo</h1>
        <h2>Cadastro de cliente</h2>
      </Header>

      <Container>
        <h3>Complete com seu dados</h3>
        <Link id="link-to-vendedor" to="/Cfuncionario">
          Criar uma conta de vendedor <TiArrowRightThick />
        </Link>
      </Container>

      <Form>
        <input placeholder="Nome"></input>
        <input placeholder="Nome de Usuario"></input>
        <input placeholder="CPF"></input>
        <input placeholder="Data de nascimento"></input>
        <input placeholder="Email"></input>
        <input placeholder="Senha" type="password"></input>
        <span>
          <input type="checkbox" />
          Aceito os Termos e condições e autorizo o uso de meus dados de acordo
          com a Declaração de privacidade
        </span>
      </Form>

      <Link id="link-continuar" to="/Cendereco">
        Continuar
      </Link>

      <Footer>Protegido pela familia Jonsons</Footer>
    </Body>
  );
};

export default Cadastro_Cliente;
