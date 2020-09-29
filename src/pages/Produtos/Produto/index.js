import React, { useState, useEffect, useCallback } from 'react'

import { BiUserCircle, BiCart } from "react-icons/bi";

import { Link } from 'react-router-dom';
import swal from 'sweetalert';


import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import api from '../../../services/api';
import logoImg from '../../../assets/Logo1.png';
import Footer from '../../../components/Footer';

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
    // const [categoriaNome, setCategoriaNome] = useState("");
    const [cliente, setCliente] = useState(JSON.parse(localStorage.getItem('@ECOMMERCE:cliente')))

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
      // !e.target.value ? window.location.reload(): 
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

    function procurarPorCategoria(nome){
    
      console.log(nome);
      let items = [];

      for (let produto of produtos){
        if(produto.nomeCategoria.toUpperCase() === nome.toUpperCase()){
          items.push(produto);
        }

      }
      setCategoriaFiltro(items);
      console.log(items);
    }

    
    const adicionarProduto = (produto) => {
      if(!localStorage.getItem('@ECOMMERCE:cliente')){ 
        window.location.href = '/';
        return;
      }
      console.log(JSON.parse(localStorage.getItem('@ECOMMERCE:cliente')));
      let listaProdutos = [];
      listaProdutos = localStorage.getItem('@ECOMMERCE:alteracoes') ? JSON.parse(localStorage.getItem('@ECOMMERCE:alteracoes')) : [];
      listaProdutos = localStorage.getItem('@ECOMMERCE:produto') ? JSON.parse(localStorage.getItem('@ECOMMERCE:produto')) : [];
          listaProdutos.push(produto);
          localStorage.setItem('@ECOMMERCE:produto', JSON.stringify(listaProdutos));
    }

    const criarPedidoUnico = async (produto) => {
      if(!localStorage.getItem('@ECOMMERCE:cliente')){ 
        window.location.href = '/';
        return;
      }

      const { id, nome, valor} = produto;
      let produtoModelo = {
        idProduto: id,
        nomeProduto: nome,
        qtdItens: 1,
        valor: valor,
        subTotal: valor
        }
      let lista = [produtoModelo];
      
      let pedido = {
          dataPedido: "2020-09-27T20:10:10Z",
          idCliente: cliente.id,
          itens: lista,
          nomeCliente: cliente.nome,
          pedidoStatus: "PAGO",
          total: produtoModelo.subTotal,
      };

    try{
      await api.post(`pedido`, pedido);
    } catch(error){
      console.log(error.message);
    } finally{
      swal('Pedido feito com sucesso', 'Compra realizada, parabéns!', 'success');
    }

  }

      useEffect(() => {
        mostraProdutos();
        mostraCategoria();
        mostraProdutosID();
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

                <form>
                <select onChange={e => procurarPorCategoria(e.target.value)}>
                  <option disabled selected>Categorias</option>
                      
                  {categoria.map((categoria)=> {
                    return(
                      <option  value={categoria.nome}>{categoria.nome}</option>
                    )
                  })}
                 </select>
              </form>
            </div> 

            <div className="direita">      
              <form>
                <Link onClick={() => localStorage.removeItem("@ECOMMERCE:cliente")} to="/"><p> <BiUserCircle size={22} />{cliente?cliente.nome:" Usuario"}</p></Link>
               <Link to="/carrinho"> <p> <BiCart size={22} />Carrinho</p></Link>
              </form>
            </div>
          </Header>
          
          <Container className="carrossel " id="container">
            <div id="demo" className="carousel slide" data-ride="carousel">
              <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>

              <div className="carousel-inner ">
                <div className="carousel-item active">
                  <img src={img1}></img>
                </div>

                <div className="carousel-item">
                  <img src={img2}></img>
                </div>

                <div className="carousel-item">
                  <img src={img3}></img>
                </div>
              </div>

              <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
          </Container>

          <Main>  

          <container>        
            { categoriaFiltro.map(categoria => (
              <div className="block" onClick={() => mostraProdutosID(categoria.id)} data-toggle="modal" data-target="#myModal" key={categoria.id}>
                <img className="produtos" className="imagemId" src={categoria.fotoLink}/>
                <p>{categoria.nome}</p> 
                <p>{categoria.descricao}</p>
                <strong>Valor: R${categoria.valor},00</strong>
              </div>
            ))}
            
          { produtoFiltro.map(produto => (
              <div className="block" onClick={() => mostraProdutosID(produto.id)} data-toggle="modal" data-target="#myModal" key={produto.id}>
                <img className="produtos"className="imagemId" src={produto.fotoLink}/> 
                <p>{produto.nome}</p> 
                <p>{produto.descricao}</p>
                <strong>Valor: R${produto.valor},00</strong>
              </div>
            ))}

          { produtos.map(produto => (
                <div onClick={() => mostraProdutosID(produto.id)} className="block" data-toggle="modal" data-target="#myModal"  key={produto.id}>
                  <img className="produtos" src={produto.fotoLink}/> <br/>
                  <p>{produto.nome}</p>
                  <p>{produto.descricao}</p><br/>
                  <strong>Valor: R${produto.valor},00</strong>
                </div>
              ))}

            </container>
          
            <div className="modal" id="myModal">
                  <div className="modal-dialog">
                  <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">{produtoId.nome}</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>


            <div className="modal-body">

              <img className="produtos" src={produtoId.fotoLink}/> <br/><br/>
              <p className="descricao">{produtoId.descricao}</p>
              <strong>Valor: R${produtoId.valor},00</strong>   
                
            </div>

            <div className="modal-footer">
                <button type="button" className="btn" data-dismiss="modal" onClick={() => adicionarProduto(produtoId)}>Adicionar no Carrinho</button>
                <button type="button" className="btn" data-dismiss="modal" onClick={() => criarPedidoUnico(produtoId)}>Comprar</button>
            </div>

              </div>
            </div>
          </div>
        </Main>  

        <Footer/>  
          </>
      )
}
       
export default Produto_;
