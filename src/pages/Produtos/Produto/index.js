import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom';
import api from '../../../services/api';

// import logoImg from '../../../assets';

import {
    Titulo,
    Produtos,
    ErroMensagem,
    Header
} from './styles';

const Produto_ = () => {
    const [produtos, setProdutos] = useState([]);
    const [erroMensagem, setErroMensagem] = useState("");

    const mostraProdutos = useCallback(
        async () => {
            try {
                const resposta = await api.get(`/produtos`);
                setProdutos(resposta.data);

                console.log("resposta", resposta);

            } catch (error) {
                console.log("Erros devs nao preparados para usar a api", error);
                setErroMensagem(error);
            }    
        },[]
    );

    useEffect(() => {
        mostraProdutos();
      }, [mostraProdutos]);

    const mostraProdutosID = useCallback(
        async (idProduto) => {
            try {
                const resposta = await api.get(`/produtos/${idProduto}`);
                setProdutos(resposta.data);

                console.log("resposta", resposta);
                
            } catch (error) {
                console.log("Erros devs nao preparados para usar a api", error);
                setErroMensagem("ERRO teste");
            }    
        },[]
    ); 

    return (
        <>
          <Header>
            {/* <img src={logoImg} alt="Lista de Produtos" /> */}
    
            <ul>
              <li>
                <Link to="/produtos">
                  Produtos
                </Link>
              </li>
            </ul>
          </Header>
    
          <Titulo>E-comerce Jonsons</Titulo>
       
          {/* {ErroMensagem &&
            <ErroMensagem>{erroMensagem}</ErroMensagem>
          } */}
    
          <>
            { produtos.map(produtos => (
              <div key={produtos.id}>
                <strong>{produtos.nome}</strong>
                <strong>{produtos.descricao}</strong>
              </div>
            ))}
            
          </>
        </>
      )
}
       
export default Produtos;


