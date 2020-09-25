import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import logoImg from '../../../assets/Logo.png';

import {
    Titulo,
    // Produtos,
    ErroMensagem,
    Header,
    // Main
} from './styles';

const Produto_ = () => {
    const [produtos, setProdutos] = useState([]);
    const [erroMensagem, setErroMensagem] = useState("");
    const [produtoId, setProdutoId] = useState({});
    const [produtoNome, setNome] = useState({});

    const mostraProdutos = useCallback(
        async () => {
            try {
                const resposta = await api.get(`/produto`);
                setProdutos(resposta.data);

                console.log("resposta", resposta);

            } catch (error) {
                console.log("Erros devs nao preparados para usar a api", error);
                setErroMensagem(error);
            }    
        },[]
    );

    

    const mostraProdutosID = useCallback(
        async (idProduto) => {
            try {
                const resposta = await api.get(`/produto/${idProduto}`);
                setProdutoId(resposta.data);

                console.log("resposta", resposta);
                
            } catch (error) {
                console.log("Erros devs nao preparados para usar a api", error);
                setErroMensagem("ERRO teste");
            }    
        },[]
    ); 

    

    useEffect(() => {
      mostraProdutos();
      // mostraProdutosID(1);
    }, [mostraProdutos, mostraProdutosID]);

    return (
        <>
          <Header>
              <img src={logoImg} alt="Lista de Produtos" />
                            
              {/* <input 
                value={produtoId}
                onChange={e => setProdutoId(e.target.value)}
                type="text" 
                placeholder="Digite uma busca..." 
              />
              <button type="submit">Buscar</button> */}
            
                        
          </Header>
      
        {/* <Titulo>E-comerce Jonsons</Titulo> */}
       
          <ErroMensagem></ErroMensagem>

          {/* <Main> */}



            <h1>{produtoId.nome}</h1>
            { produtos.map(produto => (
              <div key={produto.id}>
                <img src={produto.fotoLink}/> 
                {/* <strong>{produto.fotoLink}</strong> */}
                <strong>{produto.nome}</strong>
                <strong>{produto.descricao}</strong>
              </div>
            ))}

          {/* </Main> */}
           
        
           
          </>
        
      )
}
       
export default Produto_;


