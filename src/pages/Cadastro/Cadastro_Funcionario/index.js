import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { TiArrowRightThick } from "react-icons/ti";

import { Container, Form, Body, Infos } from "./styles";

import Footer from '../../../components/Footer';

import Header from '../../../components/Topo/Header';

import api from "../../../services/api";

import swal from 'sweetalert';

const Cadastro_Funcionario = () => {
  const history = useHistory();
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  async function cadastrar(evento) {
    evento.preventDefault();

    if (!nome || !cpf) {
     swal("Preencha os campos para continuar", "warning"); 
      return;
    } 

    console.log("Cadastrando... \nNome:", nome, "\nCpf: ", cpf );

    const parametros = {
      nome: nome,
      cpf: cpf
    };

    try {

      const resposta = await api.post("funcionario", parametros);
      localStorage.setItem("@ECOMMERCE:funcionario", JSON.stringify(resposta.data));
      window.location.reload();
      console.log("cadastro realizado com sucesso!");
      swal("Obrsgado!", "cadastro realizado com sucesso!", "success");

    } catch (erro) {

      console.log("Deu erro no cadastro", "error");
    }
  }

  return (
    <>
    <Body>
      <Header nome={"Cadastro de funcionario"} />

      <Container>
        <h3>Complete com seu dados</h3>
        <Link id="link-to-vendedor" to="/Ccliente">
          Criar uma conta de cliente <TiArrowRightThick />
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
      
    </Body>
    <Footer/>
    </>
  );
};

export default Cadastro_Funcionario;