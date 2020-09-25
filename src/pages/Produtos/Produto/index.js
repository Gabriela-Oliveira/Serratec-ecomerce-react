import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom';
import "~slick-carousel/slick/slick.css"; 
// import Slider from "react-slick";
// import Slider from '@bit/akiran.react-slick.slider';
import api from '../../../services/api';
import logoImg from '../../../assets/Logo.png';



import {
    // Produtos,
    ErroMensagem,
    Header,
    Main
} from './styles';

const Produto_ = () => {
    const [produtos, setProdutos] = useState([]);
    const [erroMensagem, setErroMensagem] = useState("");
    const [produtoId, setProdutoId] = useState({});
    const [produtoNome, setNome] = useState({});

    const configuracao = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 600,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2500,
    };

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

    function procurarPorNome(nome){
      let items = [];

      for (let produto of produtos){
        if(produto.nome.indexOf(nome) != -1){
          items.push(produto);
        }
      }
      console.log(items);
    }
    

    return (
        <>
          <Header>
              <img src={logoImg} alt="Lista de Produtos" />
                            
              <input 
                value={produtoId}
                onChange={e => setProdutoId(e.target.value)}
                type="text" 
                placeholder="Digite uma busca..." 
              />
              <button type="submit">Buscar</button>
            
                        
          </Header>
      
       
       
          <ErroMensagem></ErroMensagem>

          {/* <Main> */}

{/*          
				<div>
        <h2> Single Item</h2>
        <Slider {...configuracao}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div> */}
              

            <h1>{produtoId.nome}</h1>
            { produtos.map(produto => (
              <div key={produto.id}>
                <img src={produto.fotoLink}/> 
                <strong>{produto.nome}</strong>
                <strong>{produto.descricao}</strong>
              </div>
            ))}

          {/* </Main> */}
           
        
           
          </>
        
      )
}
       
export default Produto_;


