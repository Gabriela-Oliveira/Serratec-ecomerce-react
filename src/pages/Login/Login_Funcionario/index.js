import React, { useState } from 'react';

import { Container, ErrorMessage } from "./styles";

import Header from '../../../components/Topo/Header';

import api from '../../../services/api';

import { useHistory } from 'react-router-dom';

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
    
                alert('tudo certo doido | pode passar');
                setCarregando(false);
                setCpf("");
                setNomeFuncionario("");
                history.push("/funcionario")
    
            } else {
                setErrorMessage("tu nao me trola nao nego!")
                setCarregando(false);
                setCpf("");
                setNomeFuncionario("");
                return;
            } 
        })
      };

    return(
        <>
            <Header nome="Login de funcionario"/>
            <Container>
            <div>
                <span>Nome </span>
                <input
                    value={nomeFuncionario}
                    onChange={(e) => setNomeFuncionario(e.target.value)}
                    placeholder="Digite aqui.."
                />
                <span>CPF</span>
                <input
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="Digite aqui.."
                />
                <button onClick={(e) => logIn(e)}>{carregando ? 'Carregando...' : 'Entrar'}</button>

                { errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> }
            </div>
            
            </Container>
        
        </>
    );
}

export default Login_Funcionario;