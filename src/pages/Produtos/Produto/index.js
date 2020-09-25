import React, { useState, useEffect, useCallback } from 'react'
// import Carousel from 'react-bootstrap/Carousel'

// import Select from 'react-select';
import api from '../../../services/api';
import logoImg from '../../../assets/Logo.png';



import {
    // Produtos,
    // ErroMensagem,
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

       
      // const handleSelect = (selectedIndex, e) => {
      //   setIndex(selectedIndex);
      // };

      useEffect(() => {
        mostraProdutos();
        mostraCategoria();
        // mostraProdutosID(3);
        // handleSelect();
      }, [mostraProdutos,  mostraCategoria, mostraProdutosID]);  

    return (
        <>

          <Header>

            <img src={logoImg} alt="Lista de Produtos" />

            <form onSubmit={ e => procurarPorNome(e)}>           
              <input 
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
              }
                
              )}
                        
            </select>
            </form>
          
          </Header>
          <Main>       

      {/* <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
  

     */}

          
           { produtoFiltro.map(produto => (
              <div key={produto.id}>
                <img src={produto.fotoLink}/> 
                <strong>{produto.nome}</strong>
                <strong>{produto.descricao}</strong>
              </div>
            ))}

            <h1>{produtoId.nome}</h1>
            { produtos.map(produto => (
              <div key={produto.id}>
                <img src={produto.fotoLink}/> 
                <strong>{produto.nome}</strong>
                <strong>{produto.descricao}</strong>
              </div>
            ))}
          
          </Main>
          
          </>
      )
}
       
export default Produto_;
