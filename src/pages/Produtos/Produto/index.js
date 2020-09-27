import React, { useState, useEffect, useCallback } from 'react'
import { BiUserCircle, BiCart, BiSearchAlt2 } from "react-icons/bi";

import Modal from 'react-bootstrap/Modal'

import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import api from '../../../services/api';
import logoImg from '../../../assets/Logo1.png';

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
    const [categoriaFiltro, setCategoriaFiltro] = useState([]);
    const [categoriaNome, setCategoriaNome] = useState("");

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
      !e.target.value ? window.location.reload(): 
      console.log(produtoNome);
      let items = [];

      for (let produto of produtos){
        if(produto.nome.toLowerCase().indexOf(produtoNome) != -1){
          items.push(produto);
        }
      }
      setProdutoFiltro(items);
      console.log(produtoFiltro);
    }

    function procurarPorCategoria(e){
      e.preventDefault();
      setCategoriaFiltro(e.target.value);
      console.log(categoriaNome);
      let items = [];

      for (let categorias of categoria){
        if(categorias.nome.toLowerCase().indexOf(categoriaNome) != -1){
          items.push(categorias);
        }
      }
      setCategoriaFiltro(items);
      console.log(categoriaFiltro);
    }

      useEffect(() => {
        mostraProdutos();
        mostraCategoria();
        mostraProdutosID(3);
      }, [mostraProdutos,  mostraCategoria, mostraProdutosID]);  

      

    return (
        <>

          <Header>
            
              <img src={logoImg} alt="Lista de Produtos" />

              <div className="meio">
                <form onSubmit={ e => procurarPorNome(e)}>           
                  <input 
                    // className="filtro"
                    value={produtoNome}
                    onChange={e => procurarPorNome(e)}
                    type="text" 
                    placeholder="Digite uma busca..." 
                  />
                  {/* <button type="submit"><i class="BiUserCircle"></i></button> */}
                </form>

                {/* <form>
                <select onChange={e => console.log(e.target.value) }>
                  {categoria.map((categoria)=> {
                    return(
                    <option onSelect={e => console.log(e.target.value)} value={categoria.nome}>{categoria.nome}</option>
                    )
                  })}
                 </select>
              </form> */}

              <form>
                <select 
                  value={categoriaNome}
                  onChange={e => procurarPorCategoria}>
                  {categoria.map((categoria)=> {
                    return(
                    <option >{categoria.nome}</option>
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
          
          <Container class="carrossel " id="container">
            <div id="demo" class="carousel slide" data-ride="carousel">
              <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>

              <div class="carousel-inner ">
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

          <Main>  

            { categoriaFiltro.map(categoria => (
              <div class="block" data-toggle="modal" data-target="#myModal" key={categoria.id}>
                <img src={categoria.fotoLink}/> 
                <strong>{categoria.nome}</strong>
                <strong>{categoria.descricao}</strong>
              </div>
            ))}
            
            <container>  
           { produtoFiltro.map(produto => (
              <div class="block" data-toggle="modal" data-target="#myModal" key={produto.id}>
                <img class="imagemId" src={produto.fotoLink}/> 
                <p>{produto.nome}</p>
                <p>{produto.descricao}</p>
                <strong>Valor: R${produto.valor},00</strong>
              </div>
            ))}

            {/* <h1>{produtoId.nome}</h1> */}
           
            
              { produtos.map(produto => (
                <div onClick={() => mostraProdutosID(produto.id)} data-toggle="modal" data-target="#myModal"class="block" key={produto.id}>
                  <img class="produtos" src={produto.fotoLink}/> <br/>
                  <p>{produto.nome}</p>
                  <p>{produto.descricao}</p><br/>
                  <strong>Valor: R${produto.valor},00</strong>
                </div>
              ))}
            </container>
          
            <div class="modal" id="myModal">
                  <div class="modal-dialog">
                  <div class="modal-content">

            <div class="modal-header">
              <h4 class="modal-title">{produtoId.nome}</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>


            <div class="modal-body">

              <img class="produtos" src={produtoId.fotoLink}/> <br/><br/>
              <p className="descricao">{produtoId.descricao}</p>
              <strong>Valor: R${produtoId.valor},00</strong>   
                
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-danger" >Adicionar no Carrinho</button>
                <button type="button" class="btn btn-danger" >Comprar</button>
            </div>

              </div>
            </div>
          </div>
          </Main>   
          
          </>
      )

      

               
            
}
       
export default Produto_;
