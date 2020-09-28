import React , { useState, useCallback , useEffect } from 'react';
import { FiCircle,  FiDelete } from "react-icons/fi";
import {GrDocumentUpdate} from "react-icons/gr";
import {IoMdAddCircle} from 'react-icons/io';
import { Link } from 'react-router-dom';
import api from '../../services/api';
// import Header from '../../components/Topo/Header';

import { Form , Tasks } from './styles';
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
              numero: "0",
              complemento: "",
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
          }
       const adcionarFuncionario = useCallback(
           async (e) => {
               e.preventDefault();

               const parametros = {
                nome: nomeFuncionario,
                cpf: cpfFuncionario
              } 

              if(!nomeFuncionario && !cpfFuncionario){
                setErroMensagem("Nome ou CPF vazios !")
                return;
              }
              setErroMensagem('');

              try {
                  await api.post(`/funcionario`, parametros);
                  mostrarFuncionario();

              } catch (error) {
                  erroMensagem('Erro Funcionario ')
              }
           }
       )
       const atualizarFuncionario = async (funcionario) => {
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
        const [produtoEstoque,setProdutoEstoque] = useState(0);
        const [produtoValor,setProdutovalor] = useState(0);
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
                    erroMensagem(error);
                }
          }
       const adcionarProduto = useCallback(
           async (id) => {
               id.preventDefault();

               const parametros =  {
                nome: produtoNome,
                descricao: produtoDescricao,
                qtdEstoque: produtoEstoque,
                valor: produtoValor,
                idCategoria: 2,
                idFuncionario: 3,
                dataFabricacao: "2020-09-17T00:00:00Z",
                fotoLink: produtoImg
              }
              try {
                  const response = await api.post(`produto`, parametros);
                  console.log("Adcionado com sucesso",response.data)
              } catch (error) {
                  setErroMensagem('Erro Funcionario ',error)
              }
           }
       )
       const atualizarProduto = async (produto) => {
        const parametros = {
          
        }
        try {
          await api.put(`produto/${produto}`, parametros)
          console.log("tamos tentando familia",parametros)
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
       
      return (
        <>
        <Header title="Lista de Tarefas">
            <h2>LOGO</h2>
            <Link className="logo" to="/" onClick={() => {localStorage.removeItem('@ECOMMERCE:funcionario'); window.location.reload()}}>
              Logout
            </Link>
            </Header>
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
                        <FiDelete size={22} onClick={() => removerCliente(cliente)} style={{marginRight: 10}} />
                
                        <GrDocumentUpdate onClick={() => setResete(cliente.id)} type="button" data-toggle="modal" data-target="#cliente">
                        Atualizar
                        </GrDocumentUpdate>
                      </>
                      
                    ) : (
                      <FiCircle size={22} onClick={() => alert('helllo world')} />
                    )}
                  </span>
                </div>
              )
            ) }
              </form>
              <form class="tab-pane container fade" id="menu1">
              {mostrarFuncionario.map( funcinario =>{
              return (
                <div className="formulario" key={funcinario.id}>
                <strong>Nome<br/>
                  {funcinario.nome}
                </strong>
                <strong>CPF<br/>
                  {funcinario.cpf}
                </strong>                 
                <span>
                  { funcinario.nome ? (
                    <>
                      <IoMdAddCircle onClick={() => setReseteF(funcinario.id)} type="button" data-toggle="modal" href="#adcionar-Produto">
                        Adcionar Produto
                      </IoMdAddCircle>

                      <FiDelete size={22} onClick={() => removerFuncionario(funcinario)} style={{marginRight: 10}} />

                      <GrDocumentUpdate onClick={() => setReseteF(funcinario.id)} type="button" data-toggle="modal" href="#funcionario">
                        Atualizar
                      </GrDocumentUpdate>
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
              {produto.map( produto =>{
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
            <div class="modal" id="cliente">

            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Cliente</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <input 
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
                          type="text"
                          placeholder="Email" 
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
                        placeholder="Nome Descricao" 
                      />
                    <input 
                        value={produtoValor} 
                        onChange={e => setProdutovalor(e.target.value)}
                        type="number"
                        placeholder="Valor Produto" 
                      />
                    <input 
                        value={produtoEstoque} 
                        onChange={e => setProdutoEstoque(e.target.value)}
                        type="number"
                        placeholder="produto estoque" 
                      />
                    <input 
                        value={numeroCategoria} 
                        onChange={e => setNumeroCategoria(e.target.value)}
                        type="number"
                        placeholder="numero da categoria(1 a 13)" 
                      />
                    <input
                        id="img" 
                        value={produtoImg} 
                        onChange={e => {setProdutoImg(e.target.value)}}
                        type="file"
                        placeholder="Coloque aqui a URL da imagem" 
                      />
                     <button type="button" onClick={e => adcionarProduto(e)}> 
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
        </>
      )
}

export default Funcionario;