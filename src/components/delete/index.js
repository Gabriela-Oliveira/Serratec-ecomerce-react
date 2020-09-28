import React, {
    useCallback,
    useState,
    useEffect
} from 'react';

import api from '../../services/api';


import { Container } from './styles';

const Pedido_Unico = () => {
    const [upProdutos, setUpProdutos] = useState([]);
    const [cliente, setCliente] = useState(JSON.parse(localStorage.getItem('@ECOMMERCE:cliente')));
    const [erroMensagem, setErroMensagem] = useState("");

    // const [subTotal, setSubTotal] = useState(1);


    const mostrarProdutos = useCallback(
        async () => {
            try {
                const resposta = await api.get(`/produto`);
                setUpProdutos(resposta.data);

                console.log("resposta: produtos:", resposta.data);

            } catch (error) {
                console.log("Erro devs não preparados para usar a api", error);
                setErroMensagem(error);
            }

        }, []
    );




    const criarPedidoUnico = (produtosUp) => {

        let lista = [];
        lista.push(produtosUp);
        let todosProdutos = { upProdutos }
        let pedido = {
            dataPedido: "2020-09-27T20:10:10Z",
            pedidoStatus: "EM_ANDAMENTO",
            idCliente: cliente.id,
            nomeCliente: cliente.nome,
            itens: todosProdutos

        };

        console.log(pedido);

    }

    useEffect(() => {
        mostrarProdutos();
    }, [mostrarProdutos])


    return (
        <>
            <Container>
                <button onClick={() => criarPedidoUnico()}>Comprar agora</button>


            </Container>
        </>
    );
}



export default Pedido_Unico;
