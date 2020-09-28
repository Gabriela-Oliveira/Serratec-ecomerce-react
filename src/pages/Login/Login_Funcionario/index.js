import React, { useState } from 'react';

import { Container, ErrorMessage } from "./styles";

import api from '../../../services/api';

import { useHistory, Link } from 'react-router-dom';

import logo from '../../../assets/Logo1.png';

import { Main_Cima, Main_Baixo, Body } from '../Login_Cliente/styles';

const Login_Funcionario = () => {
    const history = useHistory();

    const [nomeFuncionario, setNomeFuncionario] = useState("");
    const [cpf, setCpf] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    let listadeFunc = [];

    const logIn = async (e) => {
        e.preventDefault();
        setCarregando(true);
        setErrorMessage("");
    
        if(nomeFuncionario == "" || cpf == "") {
            setErrorMessage("Preencha os campos por favor!");
            setCarregando(false);
            return;
        }
    
        try {
    
          const listaFuncionario = await api.get("funcionario");
          console.log("Tudo certo!");
          listadeFunc = listaFuncionario;
          console.log(listadeFunc.data)
    
        } catch (erro) {
    
          console.log("Nao peguei nada na api nao nego mals aew kkk");
    
        }
    
        listadeFunc.data.map((func) => {
    
            if(func.nome == nomeFuncionario && func.cpf == cpf) {
    
              alert('Login realizado com sucesso!');
                setCarregando(false);
                setCpf("");
                setNomeFuncionario("");
                localStorage.setItem("@ECOMMERCE:funcionario", JSON.stringify(func));
                window.location.reload();
    
            } else {
              setErrorMessage("Usuario e senha invalidos!")
                setCarregando(false);
                setCpf("");
                setNomeFuncionario("");
                return;
            } 
        })
      };

    return(
        <Body>

        <Main_Cima>
          <img src={logo}></img>
          </Main_Cima>
  
        <Container>
          <div id="infos">
          <h4>Obrigado por trabalhar conosco : )</h4>
              <input
                  value={nomeFuncionario}
                  onChange={(e) => setNomeFuncionario(e.target.value)}
                  placeholder="Nome de usuario"
              />
              <input
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  placeholder="CPF"
              />
              <button onClick={(e) => logIn(e)}>{carregando ? 'Carregando...' : 'Entrar'}</button>
              <Link to="/Cfuncionario">Cadastrar</Link>
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
}

export default Login_Funcionario;