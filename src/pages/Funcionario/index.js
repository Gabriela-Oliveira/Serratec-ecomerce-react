import React , { useState, useCallback , useEffect } from 'react-router-dom';

import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles';

const Funcionario = () => {

    const [ mostrarCliente, setMostrarCliente ] = useState([]);
    const [ mostrarClienteID, setMostrarClienteID ] = useState({});
    const [ mostrarFuncionario, setMostrarFuncionario ] = useState({});
    const [ nomeFuncionario, setNomeFuncionario ] = useState('');
    const [ cpfFuncionario, setCpfFuncionario ] = useState('');
    const [ erroMensagem,  setErroMensagem ] = useState('');
    

       const mostrarClientes = useCallback(
           async () => {
               try {
                   const response = await api.get(`/funcionario`);
                   setMostrarCliente(response.data);

                   console.log("Clientes", response.data);

               }catch (error){
                console.log("Erro Cliente", error);
                setErroMensagem(error);
               }
           },[]
       );

       const mostrarClienteId = useCallback (

        async (idCliente) => {
            try {
                const resposta = await api.get(`/funcionario/${idCliente}`);
                setMostrarClienteID(resposta.data);
                console.log("Cliente Achado por Id ", resposta.data);

            } catch (error) {
                console.log("Error ao tentar achar cliente pelo ID ");
                setErroMensagem(error);
            }
        },[]
       );

       useEffect(() => {
        mostrarClientes()
       },[mostrarClientes])

       const mostrarTodosFuncionarios = useCallback(

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
                  
              }
           },[]

       )
}