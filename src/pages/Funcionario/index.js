import React , { useState, useCallback , useEffect } from 'react';
// import { Container } from 'react-bootstrap';
import { FiCircle,  FiDelete } from "react-icons/fi";
import {IoMdAddCircle} from 'react-icons/io';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Footer from '../../components/Footer';
// import Header from '../../components/Topo/Header';

import { ContainerMain, Form , Tasks } from './styles';
const Funcionario = () => {

    const [ mostrarCliente, setMostrarCliente ] = useState([]);
    const [ mostrarFuncionario, setMostrarFuncionario ] = useState([]);
    const [ nomeFuncionario, setNomeFuncionario ] = useState('');
    const [ cpfFuncionario, setCpfFuncionario ] = useState('');
    const [ erroMensagem,  setErroMensagem ] = useState('');
    const [nome, setNome] = useState('');
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    
//carregar a pagina . fazer
       const mostrarClientes = useCallback(
           async () => {
               try {
                   const response = await api.get(`/cliente`);
                   setMostrarCliente(response.data);

                   console.log("Clientes", response.data);

               }catch (error){
                console.log("Erro Cliente", error);
                setErroMensagem(error);
               }
           },[]
       );
          const mostrarClientesID = useCallback(
            async (idCliente) => {
                try {
                    const response = await api.get(`/cliente/${idCliente}`);
                    setMostrarCliente(response.data);

                    console.log("Clientes", response.data);

                }catch (error){
                console.log("Erro Cliente", error);
                setErroMensagem(error);
                }
            },[]
        );

        const atualizarCliente = async (idCliente) => {
          const parametros = {
            nome: nome,
            usuario: nomeUsuario,
            cpf: cpf,
            email: email,
            dataNascimento: "1992-02-01T00:00:00Z",
            endereco: {
              rua: "Rua dos Bobos",
              numero: "152",
              complemento: "perdido no espaço",
              bairro: "Castanheira",
              cidade: "Metropolis",
              estado: "SP",
              cep: "23451234"
              
            }
          }
          try {
              await api.put(`cliente/${idCliente}`, parametros)
              console.log(parametros)
          } catch (error) {
              setErroMensagem(error);
          }finally{
            mostrarClientes();
          }
          
        }
       const removerCliente = async (cliente) => {
            try {
                await api.delete(`/cliente/${cliente.id}`);
                console.log("Cliente deletado com sucesso")
            } catch (error) {
                setErroMensagem(error);
            }
            mostrarClientes();
        }
  
          useEffect(() => {
          mostrarClientes();
          mostrarTodosFuncionarios();
          listaProdutos();
         },[mostrarClientes])
        
       const mostrarTodosFuncionarios =
         async () => {
                try {
                    const resposta = await api.get(`funcionario`);
                    console.log("Funcionario encontrado com sucesso");
                    setMostrarFuncionario(resposta.data);                      
                } catch (error) {
                    console.log("Erro ao encontrar Funcionario");
                    setErroMensagem(error);
                }
          };

       const atualizarFuncionario = 
       async (funcionario) => {
        const parametros = {
          nome: nomeFuncionario,
          cpf: cpfFuncionario
        }
        try {
          const resposta = await api.put(`funcionario/${funcionario}`, parametros);
          localStorage.setItem("@ECOMMERCE:funcionario-cadastro",resposta);
          console.log("tamos tentando familia",parametros);
      } catch (error) {
          setErroMensagem(error);
      }finally{
        mostrarTodosFuncionarios();
      }
      }
       const removerFuncionario = async (funcinario) => {
        try {
            await api.delete(`funcionario/${funcinario.id}`);
            console.log("funcionario deletado com sucesso")
        } catch (error) {
            setErroMensagem(error);
        }
        mostrarTodosFuncionarios();
        }
        //aqui vai entrar a lista de produtos
        const [produto,setProduto] = useState([]);
        const [produtoNome,setProdutoNome] = useState('');
        const [produtoDescricao,setProdutoDescricao] = useState('');
        const [produtoEstoque,setProdutoEstoque] = useState(Number);
        const [produtoValor,setProdutovalor] = useState(Number);
        const [produtoImg,setProdutoImg] = useState('');
        const [numeroCategoria,setNumeroCategoria] = useState(Number);

          const listaProdutos = 
            async () => {
                try {
                    const resposta = await api.get(`produto`);
                    console.log("produto encontrado com sucesso");
                    setProduto(resposta.data);
                } catch (error) {
                    console.log("Erro ao encontrar Funcionario");
                    setErroMensagem(error);
                }
          }

          const adcionarProduto = useCallback(
            async () => {
             

                const parametros = {
                  "nome": produtoNome,
                  "descricao": produtoDescricao,
                  "qtdEstoque": produtoEstoque,
                  "valor": produtoValor,
                  "idCategoria":2,
                  "idFuncionario": 1,
                  "dataFabricacao": "2012-12-15T00:00:00Z",
                  "fotoLink": "http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/produto/7/foto"
                }
              //  console.log(parametros);
               try {
                   const response = await api.post(`produto`,parametros);
                   console.log("Adcionado com sucesso", response.data);
               } catch (error) {
                   setErroMensagem('Erro Funcionario ',error);
               } finally {
                 listaProdutos();
               }
            }
        )
       const atualizarProduto = async (produto) => {
        const parametros =     {
          "nome": produtoNome,
          "descricao": produtoDescricao,
          "qtdEstoque": produtoEstoque,
          "valor": produtoValor,
          "idCategoria": 2,
          "idFuncionario": 1,
          "dataFabricacao": "2012-12-15T00:00:00Z",
          "fotoLink": "http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/produto/7/foto"
        }
        console.log(parametros);
        try {
          const response = await api.put(`produto/${produto}`, parametros);
          console.log("Produto atualizado", response);
      } catch (error) {
          setErroMensagem(error);
      } 
    }

     
       const removerProduto = async (produto) => {
        try {
            await api.delete(`produto/${produto.id}`);
            console.log("produto deletado com sucesso")
        } catch (error) {
            setErroMensagem(error);
        }finally {
          listaProdutos();
        }
  
      }
       const [resetar, setResete] = useState(null);
       const [resetarF, setReseteF] = useState(null);
       const [resetarP, setReseteP] = useState(null);
       
      return (
        
        <ContainerMain>
        <header title="Lista de Tarefas">
            <h2>LOGO</h2>
            <Link className="logo" to="/" onClick={() => {localStorage.removeItem('@ECOMMERCE:funcionario'); window.location.reload()}}>
              Logout
            </Link>
            </header>
            <Tasks>
            <ul class="nav nav-tabs">
              <li class="nav-item teste">
                <a class="nav-link active" data-toggle="tab" href="#home">Clientes</a>
              </li>
              <li class="nav-item teste1">
                <a class="nav-link" data-toggle="tab" href="#menu1">Funcionario</a>
              </li>
              <li class="nav-item teste2">
                <a class="nav-link" data-toggle="tab" href="#menu2">Produtos</a>
              </li>
            </ul>
            <div class="tab-content">
              <form class="tab-pane container active" id="home">
              { mostrarCliente.map((cliente) => (
                <div className="formulario" key={cliente.id}>
                  <strong>Nome<br/>
                    {cliente.nome}
                  </strong>
                  <strong>Usuario<br/>
                    {cliente.usuario}
                  </strong>  
                  <strong>CPF<br/>
                    {cliente.cpf}
                  </strong>                 
                  <strong>Email<br/>
                    {cliente.email}
                  </strong>
                  <span>
                    { cliente.nome ? (
                      <>
                        <button size={22} onClick={() => removerCliente(cliente)} style={{marginRight: 10}} >
                          Excluir
                          </button>
                
                        <button onClick={() => setResete(cliente.id)} type="button" data-toggle="modal" data-target="#cliente">
                        Atualizar
                        </button>
                      </>
                      
                    ) : (
                      <FiCircle size={22} onClick={() => alert('helllo world')} />
                    )}
                  </span>
                </div>
              )
            ) }
              </form>
              <form class="tab-pane container fade " id="menu1">
              {mostrarFuncionario.map( (funcinario) =>{
              return (
                <div className="formulario" key={funcinario.id}>
                <strong>Nome<br/>
                  {funcinario.nome}
                </strong>
                <strong>CPF<br/>
                  {funcinario.cpf}
                </strong>                 
                <strong>Cadastrar Produto<br/>
                  
                </strong>                 
                <span>
                  { funcinario.nome ? (
                    <>
                      
                      <IoMdAddCircle onClick={() => setReseteF(funcinario.id)} type="button" data-toggle="modal" href="#adcionar-Produto">
                      </IoMdAddCircle>

                      <button size={22} onClick={() => removerFuncionario(funcinario)} style={{marginRight: 10}}>
                        Deletar
                        </button>

                      <button onClick={() => setReseteF(funcinario.id)} type="button" data-toggle="modal" href="#funcionario">
                        Atualizar
                      </button>
                    </>
                  ) : (
                    <FiCircle size={22} onClick={() => alert('helllo world')} />
                  )}
                </span>
              </div>
              )
            })}
              </form>
              <form class="tab-pane container fade" id="menu2"> 
              {produto.map((produto) => {
              return (
                <div className="formulario1" key={produto.id}>
                <strong>Nome<br/>
                  {produto.nome}
                </strong> 
                <strong>descição<br/>
                  {produto.descricao}
                </strong> 
                <strong>categoria<br/>
                  {produto.nomeCategoria}
                </strong> 
                <strong>valor<br/>
                  {produto.valor}
                </strong> 
                <strong>estoque<br/>
                  {produto.qtdEstoque}
                </strong> 
                <span>
                  { produto.nome ? (
                    <>
                    <button onClick={() => setReseteP(produto.id)} type="button" data-toggle="modal" href="#atualizar-Produto">
                        Atualizar
                      </button>
                      <FiDelete size={22} onClick={() => removerProduto(produto)} style={{marginRight: 10}} />

                    </>
                    
                  ) : (
                    <FiCircle size={22} onClick={() => alert('helllo world')} />
                  )}
                </span>
              </div>
              )
            })}
              </form>
            </div>
            </Tasks>
            <div class="modal fade" id="cliente" tabindex="-1" role="dialog" aria-labelledby="TituloModalLongoExemplo" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title">Atualizando Cliente </h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div class="modal-body">
                    <form>
                      
                      <input 
                          aria-describedby="inputGroup-sizing-default"
                          value={nome} 
                          onChange={e => setNome(e.target.value)}
                          type="text"
                          placeholder="Nome" 
                        />
                
                        <input 
                          value={nomeUsuario} 
                          onChange={e => setNomeUsuario(e.target.value)}
                          type="text"
                          placeholder="Usuario" 
                        />
               
                        <input 
                          value={cpf} 
                          onChange={e => setCpf(e.target.value)}
                          type="text"
                          placeholder="CPF" 
                        />
            
                        <input 
                          value={email} 
                          onChange={e => setEmail(e.target.value)}
                          type="email"
                          placeholder="E-mail" 
                        />
                      <button type="button" onClick={() => atualizarCliente(resetar)}> 
                            atualizar
                      </button>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
                  </div>
                </div>
            </div>
            <div class="modal fade" id="funcionario">
                <div class="modal-dialog">
                <div class="modal-content">

                  <div class="modal-header">
                    <h4 class="modal-title">Funcionario</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>

                  </div>
                  <div class="modal-body">
                    <form>

                    <input 
                        value={nomeFuncionario} 
                        onChange={e => setNomeFuncionario(e.target.value)}
                        type="text"
                        placeholder="Nome" 
                      />
                      <input 
                        value={cpfFuncionario} 
                        onChange={e => setCpfFuncionario(e.target.value)}
                        type="text"
                        placeholder="CPF" 
                      />
                     <button type="button" onClick={() => atualizarFuncionario(resetarF)}> 
                          atualizar
                     </button>
                    </form>
                  </div>


                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>

                </div>
              </div>
            </div>
            <div class="modal fade" id="adcionar-Produto">
                <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title">Produto</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div class="modal-body">
                    <form>
                    <input 
                        value={produtoNome} 
                        onChange={e => setProdutoNome(e.target.value)}
                        type="text"
                        placeholder="Nome Produto" 
                      />
                    <input 
                        value={produtoDescricao} 
                        onChange={e => setProdutoDescricao(e.target.value)}
                        type="text"
                        placeholder="Descricão do produto" 
                      />
                      <strong>Valor do Produto
                      </strong> 
                    <input 
                        value={produtoValor} 
                        onChange={e => setProdutovalor(e.target.value)}
                        type="number"
                        placeholder="Valor Produto" 
                      />
                      <strong>Produto Estoque
                      </strong> 
                    <input 
                        value={produtoEstoque} 
                        onChange={e => setProdutoEstoque(e.target.value)}
                        type="number"
                        placeholder="produto estoque" 
                      />
                      <strong>Numero da categoria(1 a 13)
                      </strong> 
                    <input 
                        value={numeroCategoria} 
                        onChange={e => setNumeroCategoria(e.target.value)}
                        type="number"
                        placeholder="numero da categoria(1 a 13)" 
                      />
                    <input
                        value={produtoImg} 
                        onChange={e => {setProdutoImg(e.target.value)}}
                        type="url"
                        placeholder="Coloque aqui a URL da imagem" 
                      />
                     <button type="button" onClick={(e) => adcionarProduto()}> 
                          Adcionar Produto
                     </button> 
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="atualizar-Produto">
                <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title">Produto</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div class="modal-body">
                    <form>
                    <input 
                        value={produtoNome} 
                        onChange={e => setProdutoNome(e.target.value)}
                        type="text"
                        placeholder="Nome Produto" 
                      />
                    <input 
                        value={produtoDescricao} 
                        onChange={e => setProdutoDescricao(e.target.value)}
                        type="text"
                        placeholder="Descricão do produto" 
                      />
                      <strong>Valor do Produto
                      </strong> 
                    <input 
                        value={produtoValor} 
                        onChange={e => setProdutovalor(e.target.value)}
                        type="number"
                        placeholder="Valor Produto" 
                      />
                      <strong>Produto Estoque
                      </strong> 
                    <input 
                        value={produtoEstoque} 
                        onChange={e => setProdutoEstoque(e.target.value)}
                        type="number"
                        placeholder="produto estoque" 
                      />
                    
                     <button type="button" onClick={() => atualizarProduto(resetarP)}> 
                          Adcionar Produto
                     </button> 
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

         <Footer id="footer"/>     
        </ContainerMain>
      
      )
}

export default Funcionario;