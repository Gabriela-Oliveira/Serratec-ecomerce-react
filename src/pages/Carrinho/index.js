import React, { useState, useCallback, useMemo, useEffect } from 'react';
// import moment from 'moment';

import api from '../../services/api'

import { Item, Carrinho as Container } from './styles';
import Header from '../../components/Topo/Header';

const Carrinho = () => {
    const [usuario, setUsuario] = useState({id: 1});
    const [pedidos, setPedidos] = useState([]);
    const [items, setItems] = useState([]);
    const [itemsPedidoFormato, setItemsPedidoFormato] = useState([]);
    const [subTotal, setSubTotal] = useState(1);
    let lista = [{
        "id": 1,
        "nome": "Cadeira bx9",
        "descricao": "adeira ergonomica confortavel",
        "qtdEstoque": 5,
        "valor": 849.9,
        "idCategoria": 2,
        "nomeCategoria": "ESCRITORIO",
        "idFuncionario": 3,
        "nomeFuncionario": "Joaquim Manoel",
        "dataFabricacao": "2019-10-01T00:00:00Z",
        "fotoLink": "http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/produto/1/foto"
      },
      {
        "id": 2,
        "nome": "Escrivaniha 1000",
        "descricao": "escrivainha para computador",
        "qtdEstoque": 4,
        "valor": 1850.0,
        "idCategoria": 2,
        "nomeCategoria": "ESCRITORIO",
        "idFuncionario": 3,
        "nomeFuncionario": "Joaquim Manoel",
        "dataFabricacao": "2019-08-11T00:00:00Z",
        "fotoLink": "http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/produto/2/foto"
      },
      {
        "id": 3,
        "nome": "Do Inferno",
        "descricao": "Quadrinho do Alan More",
        "qtdEstoque": 2,
        "valor": 150.0,
        "idCategoria": 3,
        "nomeCategoria": "LIVRARIA",
        "idFuncionario": 2,
        "nomeFuncionario": "Maria Jos��",
        "dataFabricacao": "2017-12-21T00:00:00Z",
        "fotoLink": "http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/produto/3/foto"
      }];

      const buscarPedidos = useCallback(
        async () => {
          try {
            const resposta = await api.get('pedido');
            
            resposta.data.map(item => {
                if(item.idCliente === usuario.id) setPedidos(item);
            })
            
            

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

        }, [itemsPedidoFormato]
    )

    const criarPedido =
    () => { 
        let listinha = [...itemsPedidoFormato];
        let lista2 = [...items];

        let pedido11 = {
            dataPedido: "2020-08-30T20:10:10Z",
            pedidoStatus: "ENTREGUE",
            idCliente: usuario.id,
            nomeCliente: usuario.nome,
            itens: itemsPedidoFormato
        };
        listinha.forEach(item => {
            let produtoAtualizado = lista2.find(produto => item.idProduto === produto.id);
            if(!produtoAtualizado) return;
            const { qtdEstoque, ...rest } = produtoAtualizado;

            produtoAtualizado = {
                rest,
                qtdEstoque: qtdEstoque - item.qtdItens
            }
            console.log(produtoAtualizado);
        })
        console.log(pedido11);
    }

    const remover_da_lista = (id) => {
        if(itemsPedidoFormato.length === 1) {
            alert('Se deixa excluir todos os items do pedido, por favor cancele o mesmo!');
            return;
        }

        let itemASerRemovido = itemsPedidoFormato.find(item => item.idProduto === id);
        itemsPedidoFormato.splice(itemsPedidoFormato.indexOf(itemASerRemovido), 1);
        localStorage.setItem('@ECOMMERCE:alteracoes', JSON.stringify(itemsPedidoFormato));
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
        items.splice(0, items.length);
        itemsPedidoFormato.splice(0, itemsPedidoFormato.length);
        localStorage.removeItem('@ECOMMERCE:produto');
        localStorage.removeItem('@ECOMMERCE:listaPedido');
        localStorage.removeItem('@ECOMMERCE:alteracoes');
        localStorage.setItem('@ECOMMERCE:produto', JSON.stringify([]));
        
        obterProdutos();
    }

    const adicionarProduto = () => {
        let produtos = localStorage.getItem('@ECOMMERCE:produto') ? JSON.parse(localStorage.getItem('@ECOMMERCE:produto')) : [];
        let prod = {
            "id": 1,
            "nome": "Cadeira bx9",
            "descricao": "adeira ergonomica confortavel",
            "qtdEstoque": 5,
            "valor": 849.9,
            "idCategoria": 2,
            "nomeCategoria": "ESCRITORIO",
            "idFuncionario": 3,
            "nomeFuncionario": "Joaquim Manoel",
            "dataFabricacao": "2019-10-01T00:00:00Z",
            "fotoLink": "http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/produto/1/foto"
          }

          produtos.push(prod);
          localStorage.setItem('@ECOMMERCE:produto', JSON.stringify(produtos));
    }
    useEffect(
        () => {
            localStorage.setItem('@ECOMMERCE:produto', JSON.stringify(lista));
            if(!localStorage.getItem('@ECOMMERCE:produto')) return;

            obterProdutos();
            
        }, [obterProdutos]
    )

    useEffect(
        () => {
            setItemsPedidoFormato(JSON.parse(localStorage.getItem('@ECOMMERCE:listaPedido')));

           criarModeloProduto();

        }, [items]
    )

    return(
        <>
        <Header nome='Página de pedidos'/>
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
        {
            !localStorage.getItem('@ECOMMERCE:listaPedido') ? <h1> Nada por aqui </h1> :
            itemsPedidoFormato.map(item => {
                return(
                    <Item>
                    <strong>{item.nomeProduto}</strong>
                    <strong>{item.valor}</strong>
                    <strong>{item.subTotal}</strong>
                    <div>
                    <button onClick={ () => {
                        subtrair(item);
                    }}
                    >-</button>
                        <strong>{item.qtdItens}</strong>
                    <button onClick={() => {
                        somar(item);

                    }}
                    >+</button>
                    </div>

                    <button className="excluir" onClick={() => {
                        
                        remover_da_lista(item.idProduto)
                        }}>Excluir</button>
                    </Item>
                )

            })
        }
        </Container>

            </div>
            <div className="tab-pane container fade" id="pedido">Pedido</div>
            </div>

    <button onClick={cancelarPedido}>Cancelar Pedido</button>
<button onClick={() => criarPedido()}>pedido</button>

<button onClick={adicionarProduto}>Adicionar</button>
        </>
    )
}

export default Carrinho;