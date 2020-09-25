import React , { useState, useCallback , useEffect } from 'react';
import { FiCircle, FiCheckCircle, FiDelete } from "react-icons/fi";

import api from '../../services/api';
import { Link } from 'react-router-dom';

import { Tasks } from './styles';
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

       useEffect(() => {
        mostrarClientes()
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
           
       const altualizarCliente = useCallback(
           async (idCliente) => {
               const parametros = {
                   ...mostrarCliente,
                   cpf: cpfCliente,
                   email: emailCliente,
                   nome: nomeCliente,
                   usuario: usuarioCliente 
               }
               try {
                   await api.put(`/cliente/${idCliente}`, parametros)
               } catch (error) {
                   setErroMensagem(error);
               }
               mostrarCliente();
           }, []
       );

       const removerCliente = useCallback(
           async (idCliente) => {
               try {
                   await api.delete(`/funcionario/${idCliente}`);
               } catch (error) {
                   setErroMensagem(error);
               }
               
           },[]
       );

       return (
        <>
          {/* <Header title="Lista de Tarefas" />
    
          <Form onSubmit={handleAddTask}>
            <Input 
              value={newTask} 
              onChange={e => setNewTask(e.target.value)}
              type="text"
              placeholder="Digite a nova tarefa aqui..." 
            />
    
            <button type="submit">Criar</button>
          </Form> */}
    
          {/* { errorMessage && 
            <ErrorMessage>{errorMessage}</ErrorMessage>
          } */}
    
          <Tasks>
            { mostrarTodosFuncionarios.map((funcionario) => (
                <div key={funcionario.id}>
                  <strong>{funcionario.nome}</strong>
                  <span>
                    { funcionario.nome ? (
                      <>
                        <FiDelete size={22} onClick={() => removerCliente(funcionario)} style={{marginRight: 10}} />
                      <b>remover</b>
                        <FiCheckCircle size={22} onClick={() => altualizarCliente(funcionario)} />
                      <b>atualizar</b>  
                      </>
                    ) : (
                      <FiCircle size={22} onClick={() => altualizarCliente(funcionario)} />
                    )}
                  </span>
                </div>
              )
            ) }
          </Tasks>
        </>
      )
}

export default Funcionario;