import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { TiArrowRightThick } from "react-icons/ti";

import { Container, Form, Body, Footer, Infos, ErrorMessage } from "./styles";

import Header from '../../../components/Topo/Header';

import api from "../../../services/api";

const Cadastro_Cliente = () => {
  const history = useHistory();

  const [nome, setNome] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function cadastrar(evento) {
    evento.preventDefault();

    if (!nome || !nomeUsuario || !cpf || !dataNascimento || !email) {
      setErrorMessage("Há campos vazios preencha para completar o cadastro!"); return;
    }

    console.log(
      "Cadastrado: ",
      "\nNome: ",nome,
      "\nNome de Usuario: ",nomeUsuario,
      "\nCPF: ",cpf,
      "\nData de Nascimento: ",dataNascimento,
      "\nEmail: ",email,
    );

    const parametros = {
      nome: nome,
      usuario: nomeUsuario,
      cpf: cpf,
      email: email,
      dataNascimento: "1992-02-01T00:00:00Z",
      endereco: { 
        rua: "Rua Jonsons", 
        numero: "0", 
        complemento: "Casa", 
        bairro: "Parque do Ingá", 
        cidade: "Teresopolis", 
        estado: "RJ", 
        cep: "25961225"
    }};    

    try {
      
      const resposta = await api.post("cliente", parametros);
      localStorage.setItem("@ECOMMERCE:cliente", JSON.stringify(resposta.data));
      alert("cadastro realizado com sucesso!");
      console.log("cadastro realizado com sucesso!");
      history.push("/produto");
    } catch (erro) {
      console.log("Deu erro no cadastro");
      setErrorMessage("Erro no cadastro! Algumas informações foram informadas erradas")
    }
  }

  return (
    <Body>
      <Header nome={"Cadastro de cliente"}/>
        
      <Container>
        <h3>Complete com seu dados</h3>
        <Link id="link-to-vendedor" to="/Cfuncionario">
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
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
            placeholder="Nome de Usuario"
          />

          <input
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF"
          />

          <input
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            placeholder="Data de nascimento"
          />

          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <span>
            <input type="checkbox" />
            Aceito os Termos e condições e autorizo o uso de meus dados de
            acordo com a Declaração de privacidade
          </span>
        </Infos>
        { errorMessage &&                 
                <ErrorMessage>
                  <i>{errorMessage}</i>
                </ErrorMessage>
            }

        <button type="submit" id="link-continuar">
          Continuar
        </button>
      </Form>

      <Footer>Protegido pela familia Jonsons</Footer>
    </Body>
  );
};

export default Cadastro_Cliente;