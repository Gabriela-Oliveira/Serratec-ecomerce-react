import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { TiArrowRightThick } from "react-icons/ti";

import { Container, Form, Body, Infos } from "./styles";

import Header from '../../../components/Topo/Header';

import api from "../../../services/api";

import Footer from '../../../components/Footer';

import swal from 'sweetalert';

const Cadastro_Cliente = () => {
  const history = useHistory();

  const [nome, setNome] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");

  async function cadastrar(evento) {
    evento.preventDefault();

    if (!nome || !nomeUsuario || !cpf || !dataNascimento || !email) {
      swal("Atenção", "Preencha os campos para continuar", "warning"); 
      return;
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
      nome: nome.toString(),
      usuario: nomeUsuario.toString(),
      cpf: cpf.toString(),
      email: email.toString(),
      dataNascimento: "1992-02-01T00:00:00Z",
      endereco: {
        rua: "Rua dos Bobos",
        numero: "0",
        complemento: "",
        bairro: "Castanheira",
        cidade: "Metropolis",
        estado: "SP",
        cep: "23451234"
      }
    };    

    try {
      
      const resposta = await api.post("cliente", parametros);
      localStorage.setItem("@ECOMMERCE:cliente", JSON.stringify(resposta.data));
      swal("Obrigado!", "cadastro realizado com sucesso!", "success");
      history.push("/produto");
    } catch (erro) {
      console.log(erro.message);
      swal("Erro!", "Erro no cadastro", "error");
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
        <button type="submit" id="link-continuar">
          Continuar
        </button>
      </Form>

      {/* <Footer>Protegido pela familia Jonsons</Footer> */}

      <Footer/> 
    </Body>
  );
};

export default Cadastro_Cliente;