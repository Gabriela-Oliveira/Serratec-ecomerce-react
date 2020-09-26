import React, { useState, useEffect, useCallback } from 'react'
import { BiUserCircle, BiCart } from "react-icons/bi";

import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import api from '../../../services/api';
import logoImg from '../../../assets/Logo.png';

import {
    // Produtos,
    // ErroMensagem,
    Container,
    Header,
    Main
} from './styles';

const Produto_ = () => {
    const [produtos, setProdutos] = useState([]);
    const [erroMensagem, setErroMensagem] = useState("");
    const [produtoId, setProdutoId] = useState({});
    const [produtoNome, setProdutoNome] = useState("");
    const [produtoFiltro, setProdutoFiltro] = useState([]);
    const [categoria, setCategoria] = useState([]);
    // const [index, setIndex] = useState(0);

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

    const mostraCategoria = useCallback(
      async () => {
          try {
              const resposta = await api.get(`/categoria`);
              setCategoria(resposta.data);

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
  
    function procurarPorNome(e){
      e.preventDefault();
      setProdutoNome(e.target.value);
      let items = [];

      for (let produto of produtos){
        if(produto.nome.toLowerCase().indexOf(produtoNome) != -1){
          items.push(produto);
        }
      }
      setProdutoFiltro(items);
    }

      useEffect(() => {
        mostraProdutos();
        mostraCategoria();
        // mostraProdutosID(3);
      }, [mostraProdutos,  mostraCategoria, mostraProdutosID]);  

    return (
        <>

          <Header>
            
              <img src={logoImg} alt="Lista de Produtos" />

              <div class="meio">
                <form onSubmit={ e => procurarPorNome(e)}>           
                  <input 
                    class="filtro"
                    value={produtoNome}
                    onChange={e => procurarPorNome(e)}
                    type="text" 
                    placeholder="Digite uma busca..." 
                  />
                  <button type="submit">Buscar</button>
                </form>

                <form>
                <select value={categoria}>
                  {categoria.map((categoria)=> {
                    return(
                    <option>{categoria.nome}</option>
                    )
                  })}
                 </select>
              </form>
            </div> 

            <div class="direita">      
              <form>
               <p> <BiUserCircle size={22} />Usuário</p>
               <p> <BiCart size={22} />Carrinho</p>
              </form>
            </div>
          </Header>
          
          <Main>       

          <Container class="carrocel" id="container">
            <div id="demo" class="carousel slide" data-ride="carousel">
              <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={img1}></img>
                </div>

                <div class="carousel-item">
                  <img src={img2}></img>
                </div>

                <div class="carousel-item">
                  <img src={img3}></img>
                </div>
              </div>

              <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
          </Container>
           { produtoFiltro.map(produto => (
              <div class="produtosId" key={produto.id}>
                <img src={produto.fotoLink}/> 
                <strong>{produto.nome}</strong>
                <strong>{produto.descricao}</strong>
              </div>
            ))}

            <h1>{produtoId.nome}</h1>
            { produtos.map(produto => (
              <div key={produto.id}>
                <img class="produtos" src={produto.fotoLink}/> 
                <strong>{produto.nome}</strong>
                <strong>{produto.descricao}</strong>
                <strong>{produto.valor}</strong>
              </div>
            ))}
          
          </Main>
          
          </>
      )
}
       
export default Produto_;
