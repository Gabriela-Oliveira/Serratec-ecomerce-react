import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom';
import api from '../../services/api';

import '../../assets/Logo.png';

import {
    Tituto,
    Produto,
    ErroMensagem,
    Header
} from './styles';

const Produto = () => {
    const [produtos, serProdutos] = useState([]);
    const [errorMensagem, setErroMensagem] = useState("");

    const mostraProdutos = useCallback(
        async () => {
            try {
                const resposta = await api.get(`produtos`);
                setProdutos(resposta.data);

                console.log("resposta", resposta);

            } catch (error) {
                console.log("Erros devs nao preparados para usar a api", erro);
                setErroMensagem(error);
            }    
        },[],
    );

    useEffect(() => {
        mostraProdutos();
      }, [mostraProdutos]);

    const mostraProdutosID = useCallback(
        async (idProduto) => {
            try {
                const resposta = await api.get(`/produtos/${idProduto}`);
                setTarefas(resposta.data);

                console.log("resposta", resposta);
                
            } catch (error) {
                console.log("Erros devs nao preparados para usar a api", erro);
                setErroMensagem(error);
            }    
        },[],
    ); 

    return (
        <>
          <Header>
            <img src={logoImg} alt="Lista de Produtos" />
    
            <ul>
              <li>
                <Link to="/produtos">
                  Produtos
                </Link>
              </li>
            </ul>
          </Header>
    
          <Title>E-comerce Jonsons</Title>
       
          {errorMessage &&
            <ErrorMessage>{errorMessage}</ErrorMessage>
          }
    
          <Tasks>
            { produtos.map(produtos => (
              <div key={produtos.id}>
                <strong>{produtos.descricao}</strong>
              </div>
            ))}
            
          </Tasks>
        </>
      )
}
       
export default Produtos;


