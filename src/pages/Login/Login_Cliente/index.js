import React, { useState } from "react";

import api from "../../../services/api";

import { Container, ErrorMessage, Body, Main_Cima, Main_Baixo } from "./styles";

import { useHistory, Link } from 'react-router-dom';

import logo from '../../../assets/Logo1.png';

const Login_Cliente = () => {
  const history = useHistory();

  const [nomeUsuario, setNomeUsuario] = useState("");
  const [cpf, setCpf] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let listadeUsuarios = [];

  const logIn = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setErrorMessage("");

    if(nomeUsuario == "" || cpf == "") {
        setErrorMessage("Preencha os campos por favor!");
        setCarregando(false);
        return;
    }

    try {

      const listaUsuarios = await api.get("cliente");
      console.log("Tudo certo!");
      listadeUsuarios = listaUsuarios;

    } catch (erro) {

      console.log("Nao peguei nada na api nao nego mals aew kkk");

    }

    listadeUsuarios.data.map((usuario) => {

        if(usuario.usuario == nomeUsuario && usuario.cpf == cpf) {

            alert('tudo certo doido | pode passar');
            setCarregando(false);
            setCpf("");
            setNomeUsuario("");
            localStorage.setItem("@ECOMMERCE:cliente ", JSON.stringify(usuario));
            history.push("/produto")

        } else {
            setErrorMessage("tu nao me trola nao nego!")
            setCarregando(false);
            setCpf("");
            setNomeUsuario("");
            return;
        } 
    })
  };

  return (
    <Body>

      <Main_Cima>
        <img src={logo}></img>
        </Main_Cima>

      <Container>
        <div id="infos">
        <h4>Obrigado por comprar conosco : )</h4>
            <input
                value={nomeUsuario}
                onChange={(e) => setNomeUsuario(e.target.value)}
                placeholder="Nome de usuario"
            />
            <input
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="CPF"
            />
            <button onClick={(e) => logIn(e)}>{carregando ? 'Carregando...' : 'Entrar'}</button>
            <Link to="/Ccliente">Cadastrar</Link>
          { errorMessage &&                 
                <ErrorMessage>
                  <i>{errorMessage}</i>
                </ErrorMessage>
            }
        </div>
      </Container>
      <Main_Baixo />
    </Body>
  );
};

export default Login_Cliente;