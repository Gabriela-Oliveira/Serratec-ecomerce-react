import React , { useState, useCallback , useEffect } from 'react';

import api from '../../services/api';
// import { Link } from 'react-router-dom';

import './styles';

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
                   setErroMensagem(error)
               }
           }, []
       );

       const removerCliente = useCallback(
           async (idCliente) => {
               try {
                   await api.delete(`/funcionario/${idCliente}`);
               } catch (error) {
                   setErroMensagem(error);
               }
           }
       );

       return (
           <>
            <h1>hello word menozada</h1>
            <div className="lista-cliente">
                {mostrarCliente.map(cliente =>(
                    <article key={cliente._id}>

                    <strong>{cliente.nome}</strong>
                    
                    </article>
                ))}
            </div>
            
           </>
       )
}

export default Funcionario;