import React, { useState, useCallback, useMemo, useEffect } from 'react';
// import moment from 'moment';
import swal from 'sweetalert';

import api from '../../services/api'

import { /*Item*/ Carrinho as Container } from './styles';
import Header from '../../components/Topo/Header';
import Pedido from '../../components/Pedido';
import Footer from '../../components/Footer';
import Item from '../../components/Item';

const Carrinho = () => {
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem('@ECOMMERCE:cliente')));
    const [items, setItems] = useState([]);
    const [itemsPedidoFormato, setItemsPedidoFormato] = useState([]);
    const [subTotal, setSubTotal] = useState(1);

      const buscarPedidos = useCallback(
        async () => {
          try {
            let listaPedidos = []
            const resposta = await api.get('pedido');
    
            resposta.data.map(item => {

                if(item.idCliente === usuario.id) listaPedidos.push(item);
            })

            localStorage.setItem('@ECOMMERCE:pedidosCliente', JSON.stringify(listaPedidos));
            
          } catch (error) {
              console.log(error);
          }
        }, []
      );

    const obterProdutos = useCallback(
        () => {
            let listaItems = localStorage.getItem('@ECOMMERCE:produto') ? localStorage.getItem('@ECOMMERCE:produto').split(',') : [];
            setItems(JSON.parse(listaItems));
            
    }, []
    );

    const criarModeloProduto = useCallback (
        () => {
            if(!localStorage.getItem('@ECOMMERCE:produto')) return;
            let listaProdutos = [];
            
            for(let produto of items){

                const { id, nome, valor } = produto;
                

                let produtoModelo = {
                idProduto: id,
                nomeProduto: nome,
                qtdItens: 1,
                valor: valor,
                subTotal: valor
                }
                

                listaProdutos.push(produtoModelo);
            }
            console.log(listaProdutos);
            localStorage.setItem('@ECOMMERCE:listaPedido', JSON.stringify(listaProdutos));
            setItemsPedidoFormato(localStorage.getItem('@ECOMMERCE:alteracoes') ? JSON.parse(localStorage.getItem('@ECOMMERCE:alteracoes')) : listaProdutos);
            console.log(localStorage.getItem('@ECOMMERCE:alteracoes'));

        }, [items]
    )


    const criarPedido =
    async () => { 
        if(!localStorage.getItem('@ECOMMERCE:cliente')) {window.location.href = '/'; return}
        if(!localStorage.getItem('@ECOMMERCE:listaPedido')){alert('Um pedido não pode ser feito sem items'); return}
        let listinha = [...itemsPedidoFormato];
        let lista2 = [...items];
        let total = 0;

        listinha.map(item => {
            total += item.subTotal;
        })

        let pedido = {
    
            dataPedido: "2020-09-10T12:13:12Z",
            idCliente: usuario.id,
            itens: itemsPedidoFormato,
            nomeCliente: usuario.nome,
            pedidoStatus: "PAGO",
            total: total
        };


        try {
            await api.post(`pedido`, pedido)

            for(let item of listinha){
                let produtoAtualizado = lista2.find(produto => item.idProduto === produto.id);
                if(!produtoAtualizado) return;
    
                produtoAtualizado.qtdEstoque -= item.qtdItens;
                console.log(pedido);

                const resposta = await api.put(`produto/${produtoAtualizado.id}`, produtoAtualizado);

                console.log(resposta);
            }
                } catch (error) {
                    console.log(error.message);
                } 
                finally{
                    swal('Pedido feito!', 'Parabéns seu pedido foi feito!', 'success');
                    cancelarPedido();
                }
            }

    

    const remover_da_lista = (id) => {
        if(itemsPedidoFormato.length === 1) {
            alert('Se deixa excluir todos os items do pedido, por favor cancele o mesmo!');
            return;
        }

        let itemASerRemovido = itemsPedidoFormato.find(item => item.idProduto === id);
        itemsPedidoFormato.splice(itemsPedidoFormato.indexOf(itemASerRemovido), 1);
        items.splice(items.indexOf(itemASerRemovido), 1);
        localStorage.setItem('@ECOMMERCE:alteracoes', JSON.stringify(itemsPedidoFormato));
        localStorage.setItem('@ECOMMERCE:listaPedido', JSON.stringify(itemsPedidoFormato));
        localStorage.setItem('@ECOMMERCE:produto', JSON.stringify(items));
    
        obterProdutos();

    }

    const somar = (item) => {
        let itemAchado = items.find(itemProcurado => itemProcurado.id === item.idProduto);
        if(item.qtdItens === itemAchado.qtdEstoque) return;
        item.qtdItens++;
        item.subTotal = item.valor * item.qtdItens;
        setSubTotal(item.valor * item.qtdItens);
        console.log(item.nomeProduto + ' ' + item.qtdItens);
        localStorage.setItem('@ECOMMERCE:alteracoes', JSON.stringify(itemsPedidoFormato));

    }

    const subtrair = (item) => {
        if(item.qtdItens === 1) return; 
        item.qtdItens--;
        item.subTotal = item.valor * item.qtdItens;
        setSubTotal(item.valor * item.qtdItens);
        console.log(item.nomeProduto + ' ' + item.qtdItens);
        localStorage.setItem('@ECOMMERCE:alteracoes', JSON.stringify(itemsPedidoFormato));

    }

    const cancelarPedido = () => {
        if(!itemsPedidoFormato) {alert('Não se pode cancelar algo que não existe'); return}
        items.splice(0, items.length);
        itemsPedidoFormato.splice(0, itemsPedidoFormato.length);
        localStorage.removeItem('@ECOMMERCE:produto');
        localStorage.removeItem('@ECOMMERCE:listaPedido');
        localStorage.removeItem('@ECOMMERCE:alteracoes');
        localStorage.setItem('@ECOMMERCE:produto', JSON.stringify([]));
        
        obterProdutos();
    }

    useEffect(
        () => {
            if(!localStorage.getItem('@ECOMMERCE:produto')) return;

            obterProdutos();
            
        }, [obterProdutos]
    )

    useEffect(
        () => {
            // setItemsPedidoFormato(JSON.parse(localStorage.getItem('@ECOMMERCE:listaPedido')));

           criarModeloProduto();

        }, [items]
    )

    useEffect(
        () => {
            buscarPedidos()
        }, [buscarPedidos]
    )

    useEffect(

        () => {
            if(!localStorage.getItem('@ECOMMERCE:alteracoes')) return;
            
            let listaAlteracoes = JSON.parse(localStorage.getItem('@ECOMMERCE:alteracoes'));
            let listaPedido = JSON.parse(localStorage.getItem('@ECOMMERCE:listaPedido'));

            let listaRecebidos = [];
            let listaTotal = [];

            if(listaAlteracoes.length === listaPedido.length) return;
            for(let count = listaAlteracoes.length; count < listaPedido.length; count++){
                            console.log(count);
                            listaRecebidos.push(listaPedido[count]);                
                }
                console.log(listaRecebidos);

                listaTotal = [...listaAlteracoes, ...listaRecebidos];

                console.log(listaTotal);

                localStorage.setItem('@ECOMMERCE:alteracoes', JSON.stringify(listaTotal));

            setItemsPedidoFormato(JSON.parse(localStorage.getItem('@ECOMMERCE:alteracoes')));

                
        }, [items]
    )

    return(
        <>
        <Header nome='Página de pedidos' />
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#carrinho">Carrinho</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#pedido" onClick={buscarPedidos}>Pedidos</a>
            </li>
        </ul>

            
            <div className="tab-content">
            <div className="tab-pane container active" id="carrinho">

            <Container>
                <a className="voltar" href="/produto">Voltar as compras</a>
        {
            !localStorage.getItem('@ECOMMERCE:listaPedido') ? <h1> Nada por aqui </h1> :
            itemsPedidoFormato.map(item => {
                return(

                    <Item item={item} somar={somar} subtrair={subtrair} remover_da_lista={remover_da_lista} />
                )

            })
        }
        <div className="buttons">
            <button onClick={cancelarPedido}>Limpar carrinho</button>
            <button onClick={criarPedido}>Concluir compras</button>
        </div>

        </Container>

            </div>
            <div className="tab-pane container fade" id="pedido">
                {
                    localStorage.getItem('@ECOMMERCE:pedidosCliente') ? JSON.parse(localStorage.getItem('@ECOMMERCE:pedidosCliente').split(',')).map(pedido => {
                        return(
                        <div>
                            <Pedido pedido={pedido}/>
                        </div>
                        )
                    }) : <h1>Nada por aqui</h1>
                }
            </div>
            </div>

        <Footer/>        
        </>
    )
}

export default Carrinho;