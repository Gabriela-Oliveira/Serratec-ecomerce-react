import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { TiArrowRightThick } from "react-icons/ti";

import { Header, Container, Form, Body, Footer, Infos } from "./styles";

import api from "../../../services/api";

const Cadastro_Cliente = () => {
  const history = useHistory();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  async function cadastrar(evento) {
    evento.preventDefault();

    if (!nome) return;
    if (!cpf) return;

    console.log("Tentando cadastrar... \nNome:", nome, "\nCpf: ", cpf );

    const parametros = {
      nome: nome,
      cpf: cpf
    };

    try {
      await api.post("/cliente", parametros);
      history.push("/produto");
      console.log("cadastro realizado com sucesso!");
    } catch (erro) {
      console.log("Deu erro");
    } finally {
      setNome("");
      setCpf("");
    }
  }

  return (
    <Body>
      <Header>
        <h1>Logo</h1>
        <h2>Cadastro de funcionario</h2>
      </Header>

      <Container>
        <h3>Complete com seu dados</h3>
        <Link id="link-to-vendedor" to="/Ccliente">
          Criar uma conta de vendedor <TiArrowRightThick />
        </Link>
      </Container>

      <Form onSubmit={(e) => cadastrar(e)}>
        <Infos>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
          />
         
          <input
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF"
          />       

          <span>
            <input type="checkbox" />
            Aceito os Termos e condições e autorizo o uso de meus dados de
            acordo com a Declaração de privacidade
          </span>
        </Infos>

        <button type="submit" id="link-continuar">
          Continuar
        </button>
      </Form>

      <Footer>Protegido pela familia Jonsons</Footer>
    </Body>
  );
};

export default Cadastro_Cliente;