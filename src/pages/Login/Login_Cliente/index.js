import React, { useState } from "react";

import api from "../../../services/api";

import { Container, Body, Main_Cima, Main_Baixo } from "./styles";

import { useHistory, Link } from 'react-router-dom';

import logo from '../../../assets/Logo1.png';

import Footer from '../../../components/Footer';

import swal from 'sweetalert';

const Login_Cliente = () => {
  const history = useHistory();

  const [nomeUsuario, setNomeUsuario] = useState("");
  const [cpf, setCpf] = useState("");
  const [carregando, setCarregando] = useState(false);
  let listadeUsuarios = [];

  const logIn = async (e) => {
    e.preventDefault();
    setCarregando(true);

    if(nomeUsuario == "" || cpf == "") {
        swal("Atenção", "Preencha todos os campos antes de continuar", "warning");
        setCarregando(false);
        return;
    }

    try {

      const listaUsuarios = await api.get("cliente");
      console.log("Tudo certo!");
      listadeUsuarios = listaUsuarios;
      
    } catch (erro) {

      swal("Erro", "Erro no cadastro, suas informações nao foram preenchidas corretamente", "error");
      console.log("Nao peguei nada na api nao nego mals aew kkk");
    }

    listadeUsuarios.data.map((usuario) => {

        if(usuario.usuario == nomeUsuario && usuario.cpf == cpf) {
          setCarregando(false);
          setCpf("");
          setNomeUsuario("");
          localStorage.setItem("@ECOMMERCE:cliente", JSON.stringify(usuario));
          history.push("/produto")
          swal("Tudo certo","Login realizado com suceso!", "success");
          return;
          
        }
          swal("Atenção", "Usuario ou senha invalido!", "error");
          setCarregando(false);
          setCpf("");
          setNomeUsuario("");
          return;
           
    })
  };

  return (
    <>
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
          
        </div>
      </Container>
      <Main_Baixo />
    </Body>
    <Footer/>
    </>
  );
};


export default Login_Cliente;