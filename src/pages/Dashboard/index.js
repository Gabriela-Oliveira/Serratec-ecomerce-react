import React from "react";

import { Link } from "react-router-dom";

import { Body, Container } from "./styles";

import logo from '../../assets/Logo1.png';

import Footer from '../../components/Footer';

const Dashboard = () => {
  return (
    <>
      <Body>
        <Container>
            <header>
              <img src={logo}></img>
            </header>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#menu1" role="tab" aria-controls="nav-home" aria-selected="true">
                Cliente
              </a>
            </li>
            <li class="nav-item">
            <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#menu2" role="tab" aria-controls="nav-home" aria-selected="true">
            Funcionario
              </a>

            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane container active" id="menu1">
              <div class="container">
                <h3>Área do cliente</h3>
                <Link to="/Ccliente">Cadastro</Link>
                <Link to="/Lcliente">Log in</Link>
              </div>
            </div>
            <div class="tab-pane container fade" id="menu2">
              <div class="container">
                <h3>Área do funcionario</h3>
                <Link to="/Cfuncionario">Cadastro</Link>
                <Link to="/Lfuncionario">Log in</Link>
              </div>
            </div>
          </div>
        </Container>
      </Body>
    <Footer/>
    </>
  );
};


export default Dashboard;