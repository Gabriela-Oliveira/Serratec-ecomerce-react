import React, { useState, useCallback, useMemo, useEffect } from 'react';
// import moment from 'moment';

// import Item from '../../components/Item';

const Carrinho = () => {
    const [usuario, setUsuario] = useState({'id': 1, 'nome': 'Guilherme'});
    const [items, setItems] = useState([]);
    const [pedido, setPedido] = useState({});
    const [qntItens, setQntItens] = useState(0);
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

    const criarPedido =
        () => {
            let listaItems = JSON.parse(localStorage.getItem('@ECOMMERCE:produto'.split(',')));
            let listaAuxiliar = [];
            let produtoVenda = {};

            for(let item of listaItems){
                const { id, nome, valor, qntEstoque} = item;

                produtoVenda = {
                    idProduto: id,
                    nomeProduto: nome,
                    qtdItens: 1,
                    valor: valor,
                    subTotal: valor * qntItens
                }
                
                listaAuxiliar.push(produtoVenda);
            }

            console.log(listaAuxiliar);
        }


    return(
        <>
        <h1>Teste</h1>
        {
            items.map(item => {
                return(
                    <>
                    <h1>{item.nome}</h1>
                    <img src={item.fotoLink} alt="" />
                    </>
                )

            })
        }
        <button onClick={criarPedido}></button>
        </>
    )
}


export default Carrinho;