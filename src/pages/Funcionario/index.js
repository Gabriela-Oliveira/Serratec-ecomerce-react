import React , { useState, useCallback , useEffect } from 'react';
import { FiCircle, FiCheckCircle, FiDelete } from "react-icons/fi";
import { Link } from 'react-router-dom';

import api from '../../services/api';
// import { Link } from 'react-router-dom';
import { Form, Header , Tasks } from './styles';
const Funcionario = () => {

    const [ mostrarCliente, setMostrarCliente ] = useState([]);
    const [ mostrarClienteID, setMostrarClienteID ] = useState({});
    const [ mostrarFuncionario, setMostrarFuncionario ] = useState({});
    const [ nomeFuncionario, setNomeFuncionario ] = useState('');
    const [ cpfFuncionario, setCpfFuncionario ] = useState('');
    const [ cpfCliente, setCpfCliente ] = useState('');
    const [ emailCliente, setEmailCliente ] = useState('');
    const [ nomeCliente , setNomeCliente ] = useState('');
    const [ usuarioCliente, setUsuarioCliente ] = useState('');
    const [ erroMensagem,  setErroMensagem ] = useState('');
    

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
            const [nome, setNome] = useState('');
            const [nomeUsuario, setNomeUsuario] = useState('');
            const [cpf, setCpf] = useState('');
            const [email, setEmail] = useState('');

      //   const altualizarCliente = useCallback(
      //     async (idCliente) => {

      //       const parametros = {
      //         nome: nome,
      //         usuario: nomeUsuario,
      //         cpf: cpf,
      //         email: email,
      //         dataNascimento: "1992-02-01T00:00:00Z",
      //         endereco: { 
      //         rua: "Rua Jonsons", 
      //         numero: "0", 
      //         complemento: "Casa", 
      //         bairro: "Parque do Ingá", 
      //         cidade: "Teresopolis", 
      //         estado: "RJ", 
      //         cep: "25961225"
      //       }};
      //         try {
      //             await api.put(`/cliente/${idCliente}`, parametros)
                  
      //         } catch (error) {
      //             setErroMensagem(error);
      //         }
      //         mostrarCliente();
      //     }, []
      // );
            
        const altualizarCliente = useCallback(
          async (idCliente) => {
            
            
            const parametros = {
              ...mostrarCliente,
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
                  await api.put(`/cliente/${idCliente}`, parametros)
              } catch (error) {
                  setErroMensagem(error);
              }
              mostrarCliente();
          }, []
      );


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
     },[mostrarClientes])


       const mostrarTodosFuncionarios = useCallback(

            async () => {
                try {
                    const resposta = await api.get(`/funcionario`);
                    console.log("Funcionario encontrado com sucesso");
                } catch (error) {
                    console.log("Erro ao encontrar Funcionario");
                    erroMensagem(error);
                }
            },[]

       )

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
           
      const criarModal = () => {
        return (
          <>
          
          </>
         ) 
      }
       return (
        <>
          <header title="Lista de Tarefas">
            <h2>LOGO</h2>
            <Link to="/">
              Logout
            </Link>
            </header> 
    
          {/* <form onSubmit={mostrarCliente}>
            <input 
             
              onChange={e => setMostrarCliente(e.nome)}
              type="text"
              placeholder="Digite sua pesquisa..." 
            />
    
            <button type="submit">Criar</button>
          </form> */}
    
          {/* { errorMessage && 
            <ErrorMessage>{errorMessage}</ErrorMessage>
          } */}
    
          <Tasks>
            { mostrarCliente.map((cliente) => (
                <div key={cliente.id}>
                  <strong>{cliente.nome}</strong>
                  <span>
                    { cliente.nome ? (
                      <>
                        <FiDelete size={22} onClick={() => removerCliente(cliente)} style={{marginRight: 10}} />
                   
                        {/* <FiCheckCircle size={22} onClick={() => criarModal()} /> */}
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                          
                        </button>
                        
                      </>
                    ) : (
                      <FiCircle size={22} onClick={() => alert('helllo world')} />
                      
                    )}
                  </span>
                </div>
              )
            ) }
                
                </Tasks>
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                <div class="modal-content">


                  <div class="modal-header">
                    <h4 class="modal-title">Cliente</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>


                  <div class="modal-body">

                    <form onSubmit={}>
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
                      <button onClick={altualizarCliente}>Atualizar</button>

                    </form>
                  </div>


                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>

                </div>
              </div>
            </div>
        </>
      )
}

export default Funcionario;