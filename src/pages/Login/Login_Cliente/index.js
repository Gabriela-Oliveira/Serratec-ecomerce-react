import React, { useState } from "react";

import api from "../../../services/api";

import { Container, ErrorMessage } from "./styles";

import Header from "../../../components/Topo/Header";

import { useHistory } from 'react-router-dom';

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
    <>
      <Header nome="Login de Cliente" />
      <Container>
        <div>
            <span>Nome de Usuario</span>
            <input
                value={nomeUsuario}
                onChange={(e) => setNomeUsuario(e.target.value)}
                placeholder="Digite aqui.."
            />
            <span>CPF</span>
            <input
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="Digite aqui.."
            />
            <button onClick={(e) => logIn(e)}>{carregando ? 'Carregando...' : 'Entrar'}</button>

            { errorMessage &&                 
                <ErrorMessage>
                  <i class="fas fa-exclamation-triangle"></i>{errorMessage}
                </ErrorMessage>
            }
            
        </div>


      </Container>
    </>
  );
};

export default Login_Cliente;