import React, { useState, useCallback, useMemo, useEffect } from 'react';
import moment from 'moment';

// import Item from '../../components/Item';

const Carrinho = () => {
    const [usuario, setUsuario] = useState({'id': 1, 'nome': 'Guilherme'});
    const [items, setItems] = useState([]);
    const [itemsPedidoFormato, setItemsPedidoFormato] = useState(localStorage.getItem('@ECOMMERCE:alteracoes') ? JSON.parse(localStorage.getItem('@ECOMMERCE:alteracoes')) : JSON.parse(localStorage.getItem('@ECOMMERCE:listaPedido')));
    const [pedido, setPedido] = useState({});
    const [subTotal, setSubTotal] = useState(1);
    const [qntItens, setQntItens] = useState(1);
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

    const obterProdutos = useCallback(
        () => {
            let listaItems = localStorage.getItem('@ECOMMERCE:produto').split(',');
            setItems(JSON.parse(listaItems));

            
    }, []
    );

    const criarModeloProduto =
        () => {
            let listaProdutos = [];
            
            for(let produto of items){

                const { id, nome, valor } = produto;

                let quantidade = qntItens;

                let produtoModelo = {
                idProduto: id,
                nomeProduto: nome,
                qtdItens: quantidade,
                valor: valor,
                subTotal
                }

                listaProdutos.push(produtoModelo);
            }
            console.log(listaProdutos);
            localStorage.setItem('@ECOMMERCE:listaPedido', JSON.stringify(listaProdutos));
            console.log(itemsPedidoFormato);
        }

    const criarPedido =
    () => { 
        let listinha = [...itemsPedidoFormato];
        let lista2 = [...items];
        let pedido11 = {
            dataPedido: moment().format(),
            pedidoStatus: "ENTREGUE",
            idCliente: 1,
            nomeCliente: "Jose das Coves",
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

    function remover_da_lista(id) {
        let itemASerRemovido = itemsPedidoFormato.find(item => item.idProduto === id);
        itemsPedidoFormato.splice(itemsPedidoFormato.indexOf(itemASerRemovido), 1);
        localStorage.setItem('@ECOMMERCE:alteracoes', JSON.stringify(itemsPedidoFormato));
        setItems( JSON.parse(localStorage.getItem('@ECOMMERCE:alteracoes').split(',')));
        console.log(itemsPedidoFormato);
    }

    useEffect(
        () => {
            localStorage.setItem('@ECOMMERCE:produto', JSON.stringify(lista));

            obterProdutos();
            
        }, [obterProdutos]
    )

    useEffect(
        () => {
           criarModeloProduto();
        }, [items]
    )

    return(
        <>
        <h1>Teste</h1>


        {
            
            itemsPedidoFormato.map(item => {
                return(
                    <>
                    <h1>{item.nomeProduto}</h1>
                    <h2>{item.valor}</h2>
                    <h3>{item.subTotal}</h3>
                    <h3>{item.qtdItens}</h3>
                    <button onClick={() =>{
                        let itemAchado = items.find(itemzada => itemzada.id === item.idProduto);
                        if(item.qtdItens === itemAchado.qtdEstoque) return;
                        item.qtdItens++;
                        setSubTotal(item.valor * item.qtdItens);
                        console.log(item.nomeProduto + ' ' + item.qtdItens);
                        item.subTotal = item.valor * item.qtdItens;
                        localStorage.setItem('@ECOMMERCE:alteracoes', JSON.stringify(itemsPedidoFormato));
                    }
                    }>Somar</button>

                    <button onClick={() => {
                        if(item.qtdItens === 1) return; 
                        item.qtdItens--;
                        setSubTotal(item.valor * item.qtdItens);
                        console.log(item.nomeProduto + ' ' + item.qtdItens);
                        item.subTotal = item.valor * item.qtdItens;
                        localStorage.setItem('@ECOMMERCE:alteracoes', JSON.stringify(itemsPedidoFormato));

                    }}
                    >Subtrair</button>

                    <button onClick={() => remover_da_lista(item.idProduto)}>Apagar</button>
                    </>
                )

            })
        }

        <button onClick={() => criarPedido()}>pedido</button>
        </>
    )
}

export default Carrinho;