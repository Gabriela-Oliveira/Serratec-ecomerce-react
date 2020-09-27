import React from 'react';

import api from '../../services/api'

import { Container } from './styles';
const Pedido = (props) => {

    const atualizarStatus = async () => {
        props.pedido.pedidoStatus = "PAGO";

        try {
            const resposta = await api.put(`pedido/${props.pedido.id}`, props.pedido);
            console.log(resposta);
        } catch (error) {
            console.log(error)
        }
        
    }

    const apagarPedido = async () => {
        try {
           const resposta = await api.delete(`pedido/${props.pedido.id}`);
           console.log(resposta);
        } catch (error) {
            console.log(error.message);
        }
    }


       return(
        <Container>
            <strong>id: {props.pedido.id}</strong>
            <strong>Data: {props.pedido.dataPedido}</strong>
            <strong>Status: {props.pedido.pedidoStatus}</strong>
            <div>
            <button onClick={apagarPedido}>Excluir</button>
            </div>
        </Container>
       )
}

export default Pedido;