import React , { useState, useCallback , useEffect } from 'react';
import { FiCircle,  FiDelete } from "react-icons/fi";
import {GrDocumentUpdate} from "react-icons/gr";
import { Link } from 'react-router-dom';

import api from '../../services/api';
// import { Link } from 'react-router-dom';
import { Form, Header , Tasks } from './styles';
const Funcionario = () => {

    const [ mostrarCliente, setMostrarCliente ] = useState([]);
    const [ mostrarClienteID, setMostrarClienteID ] = useState({});
    const [ mostrarFuncionario, setMostrarFuncionario ] = useState([]);
    const [ nomeFuncionario, setNomeFuncionario ] = useState('');
    const [ cpfFuncionario, setCpfFuncionario ] = useState('');
    const [ erroMensagem,  setErroMensagem ] = useState('');
    const [nome, setNome] = useState('');
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    

       const mostrarClientes = useCallback(
           async () => {
               try {
                   const response = await api.get(`/cliente`);
                   setMostrarCliente(response.data);

                   console.log("Clientes", response.data);

               }catch (error){
                console.log("Erro Cliente", error);
                setErroMensagem(error);
               }
           },[]
       );
          const mostrarClientesID = useCallback(
            async (idCliente) => {
                try {
                    const response = await api.get(`/cliente/${idCliente}`);
                    setMostrarCliente(response.data);

                    console.log("Clientes", response.data);

                }catch (error){
                console.log("Erro Cliente", error);
                setErroMensagem(error);
                }
            },[]
        );

        const teste = async (idCliente) => {
          const parametros = {
            nome: nome,
            usuario: nomeUsuario,
            cpf: cpf,
            email: email,
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
          }
          try {
              await api.put(`cliente/${idCliente}`, parametros)
              console.log(parametros)
          } catch (error) {
              setErroMensagem(error);
          }finally{
            mostrarClientes();
          }
          
        }



       const removerCliente = async (cliente) => {
            try {
                await api.delete(`/cliente/${cliente.id}`);
                console.log("Cliente deletado com sucesso")
            } catch (error) {
                setErroMensagem(error);
            }
            mostrarClientes();
        }
  

    useEffect(() => {
      mostrarClientes();
      mostrarTodosFuncionarios();
     },[mostrarClientes])


       const mostrarTodosFuncionarios = 

            async () => {
                try {
                    const resposta = await api.get(`funcionario`);
                    console.log("Funcionario encontrado com sucesso");
                    setMostrarFuncionario(resposta.data);
                } catch (error) {
                    console.log("Erro ao encontrar Funcionario");
                    erroMensagem(error);
                }
          }

       const mostrarTodosFuncionariosId = useCallback(

        async (idFuncionario) => {
            try {
                const resposta = await api.get(`/funcionario/${idFuncionario}`);
                console.log("Funcionario encontrado com sucesso");
            } catch (error) {
                console.log("Erro ao encontrar Funcionario");
                erroMensagem(error);
            }
        },[]

   )

       const adcionarFuncionario = useCallback(
           async (e) => {
               e.preventDefault();

               const parametros = {
                cpf: cpfFuncionario,
                nome: nomeFuncionario
              } 

              if(!nomeFuncionario && !cpfFuncionario){
                setErroMensagem("Nome ou CPF vazios !")
                return;
              }
              setErroMensagem('');

              try {
                  await api.post(`/funcionario`, parametros);
                  mostrarFuncionario();

              } catch (error) {
                  erroMensagem('Erro Funcionario ')
              }
           },[]

       )
           
       const [resetar, setResete] = useState(null);
           
       return (
        <>
          <Header title="Lista de Tarefas">
            <h2>LOGO</h2>
            <Link className="logo" to="/">
              Logout
            </Link>
            </Header> 
          <Tasks>
          <button className="teste" type="button" >Lista Cliente</button>
          <button className="teste1" type="button" >Lista Funcionario</button>
          <button className="teste2" type="button" >Lista Produtos</button>

            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
              </li>
            </ul>

            <div class="tab-content">
              <form class="tab-pane container active" id="home">
              { mostrarCliente.map((cliente) => (
                <div key={cliente.id}>
                  <p>nome:</p>
                  <strong>{cliente.nome}</strong>
                  <p>usuario:</p>
                  <strong>{cliente.usuario}</strong>
                  <p>cpf:</p>
                  <strong>{cliente.cpf}</strong>
                  <p>email:</p>
                  <strong>{cliente.email}</strong>
                  <span>
                    { cliente.nome ? (
                      <>
                        <FiDelete size={22} onClick={() => removerCliente(cliente)} style={{marginRight: 10}} />
                   
                        {/* <FiCheckCircle size={22} onClick={() => criarModal()} /> */}
                        <GrDocumentUpdate onClick={() => setResete(cliente.id)} type="button" data-toggle="modal" data-target="#myModal">
                          chamar
                        </GrDocumentUpdate>
                      </>
                      
                    ) : (
                      <FiCircle size={22} onClick={() => alert('helllo world')} />
                    )}
                  </span>
                </div>
              )
            ) }
              </form>
              <div class="tab-pane container fade" id="menu1">...</div>
              <div class="tab-pane container fade" id="menu2">...</div>
            </div>
            
                
            </Tasks>
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                <div class="modal-content">


                  <div class="modal-header">
                    <h4 class="modal-title">Cliente</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>


                  <div class="modal-body">

                    <form>
                    <input 
                        value={nome} 
                        onChange={e => setNome(e.target.value)}
                        type="text"
                        placeholder="Nome" 
                      />
                      <input 
                        value={nomeUsuario} 
                        onChange={e => setNomeUsuario(e.target.value)}
                        type="text"
                        placeholder="Usuario" 
                      />
                      <input 
                        value={cpf} 
                        onChange={e => setCpf(e.target.value)}
                        type="text"
                        placeholder="CPF" 
                      />
                      <input 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email" 
                      />
                     <button type="button" onClick={() => teste(resetar)}> 
                          atualizar
                     </button>
                    </form>
                  </div>


                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>

                </div>
              </div>
            </div>

            { 
            mostrarFuncionario.map( funcinario =>{
              return (
              <div key={funcinario.id}>
          
              <strong>{funcinario.nome}</strong>
        
              
              </div>
              )
            })}
        </>
      ) 
} 

export default Funcionario;