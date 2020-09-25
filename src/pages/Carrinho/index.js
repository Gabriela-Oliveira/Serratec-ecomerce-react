import React, { useState, useCallback, useMemo, useEffect } from 'react';
// import moment from 'moment';

// import Item from '../../components/Item';

const Carrinho = () => {
    const [usuario, setUsuario] = useState({'id': 1, 'nome': 'Guilherme'});
    const [items, setItems] = useState([]);
    const [itemsPedidoFormato, setItemsPedidoFormato] = useState(JSON.parse(localStorage.getItem('@ECOMMERCE:listaPedido')));
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

    const criarModeloProduto = useCallback(
     (listaProdutos1) => {
        let listaProdutos = [];
        for(let produto of listaProdutos1){
            listaProdutos.push(produto);
        }
        console.log(listaProdutos);
        console.log(itemsPedidoFormato)
        }, []
    );

    const criarPedido = useCallback(
    () => { 
        // let listaItems = [...items];
        // let listaItemsFormatoPedido = [];
        // let produtoVenda = {};

        // for(let item of listaItems){
        //     const { id, nome, valor, qntEstoque} = item;

        //     produtoVenda = {

        //     }

        //     listaItemsFormatoPedido.push(produtoVenda);
            
        // }
        // setItemsPedidoFormato(listaItemsFormatoPedido);
        
    
    }, [items]
    );



    function remover_da_lista(id) {
        let listaItems = JSON.parse(localStorage.getItem('@ECOMMERCE:produto').split(','));
        let itemASerRemovido = listaItems.find(item => item.id === id);
        listaItems.splice(listaItems.indexOf(itemASerRemovido), 1);

        localStorage.setItem('@ECOMMERCE:produto', JSON.stringify(listaItems));
        setItems( JSON.parse(localStorage.getItem('@ECOMMERCE:produto').split(',')));
        console.log(listaItems);
    }

    useEffect(
        () => {
            localStorage.setItem('@ECOMMERCE:produto', JSON.stringify(lista));

            obterProdutos();
            
        }, [obterProdutos]
    )

    useEffect(
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
                subTotal: valor
                }

                listaProdutos.push(produtoModelo);
            }
            console.log(listaProdutos);
            localStorage.setItem('@ECOMMERCE:listaPedido', JSON.stringify(listaProdutos));
            console.log(itemsPedidoFormato);
        }, [items]
    )
    let listinha = localStorage.getItem('@ECOMMERCE:alteracoes') ? JSON.parse(localStorage.getItem('@ECOMMERCE:alteracoes')) : JSON.parse(localStorage.getItem('@ECOMMERCE:listaPedido'))

    return(
        <>
        <h1>Teste</h1>

        {
            
            listinha.map(item => {
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
                        console.log(item.subTotal = item.valor * item.qtdItens);
                        localStorage.setItem('@ECOMMERCE:alteracoes', JSON.stringify(itemsPedidoFormato));
                    }
                    }>Somar</button>

                    <button onClick={() => {
                        if(item.qtdItens === 1) return; 
                        item.qtdItens--;
                        setSubTotal(item.valor * item.qtdItens);
                        console.log(item.nomeProduto + ' ' + item.qtdItens);
                        console.log(item.subTotal = item.valor * item.qtdItens);
                        localStorage.setItem('@ECOMMERCE:alteracoes', JSON.stringify(itemsPedidoFormato));

                    }}
                    >Subtrair</button>
                    </>
                )

            })
        }

        </>
    )
}

export default Carrinho;