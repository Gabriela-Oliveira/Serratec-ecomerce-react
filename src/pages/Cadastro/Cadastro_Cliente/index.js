import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { TiArrowRightThick } from "react-icons/ti";

import { Container, Form, Body, Footer, Infos } from "./styles";

import Header from '../../../components/Topo/Header';

import api from "../../../services/api";

const Cadastro_Cliente = () => {
  const history = useHistory();

  const [nome, setNome] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrar(evento) {
    evento.preventDefault();

    if (!nome) return;
    if (!nomeUsuario) return;
    if (!cpf) return;
    // if (!dataNascimento) return;
    if (!email) return;
    if (!senha) return;

    console.log(
      "Cadastrado: ",
      "\nNome: ",nome,
      "\nNome de Usuario: ",nomeUsuario,
      "\nCPF: ",cpf,
      "\nData de Nascimento: ",dataNascimento,
      "\nEmail: ",email,
      "\nSenha: ","**************"
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
      
      await api.post("cliente", parametros);
      history.push("/produto");
      console.log("cadastro realizado com sucesso!");
    } catch (erro) {
      console.log("Deu erro no cadastro");
    } finally {
      setNome("");
      setNomeUsuario("");
      setCpf("");
      setDataNascimento("");
      setEmail("");
      setSenha("");
    }
  }

  return (
    <Body>
      <Header nome={"cliente"}/>
        
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

          <input
            value={senha}
            type="password"
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
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