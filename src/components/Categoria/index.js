import React, {
    useCallback,
    useState,
    useEffect
} from 'react';

import { Container } from './styles';
import api from '../../services/api';
// import Pedido from '../../pages/Pedido';
const Categoria = () => {

    const [categorias, setCategoria] = useState([]);
    const [novoNome, setNovoNome] = useState('');
    const [novaDescricao, setNovaDescricao] = useState('');
    const [erroMensagem, setErroMensagem] = useState('');



    const mostrarCategorias = useCallback(
        async () => {
            try {
                const resposta = await api.get('categoria');
                setCategoria(resposta.data);

                // console.log("resposta", resposta.data);

            } catch (error) {
                console.log("Error devs nao preparados para usar a api", error);
                setErroMensagem(error);
            }

        }, [categorias]
    );

    useEffect(() => {
        mostrarCategorias();
    }, [mostrarCategorias])

    // const adicionarCategoria = useCallback(

    //     async (e) => {
    //         e.preventDefault();

    //         const parametros = {
    //             nome: novoNome,
    //             descricao: novaDescricao
    //         }

    //         if (!novoNome && !novaDescricao) {
    //             setErroMensagem('Nome ou Descrição vazios!');
    //             return;
    //         }
    //         setErroMensagem('');

    //         try {
    //             await api.post('categoria', parametros);
    //             mostrarCategorias();
    //             setNovaDescricao('');
    //             setNovoNome('');

    //             console.log("Tudo certo na criação na categoria");
    //         } catch (error) {
    //             setErroMensagem('Erro na criação da categoria');
    //         }
    //     }, [mostrarCategorias, novoNome, novaDescricao]

    // );

    // const atualizarCategoria = useCallback(
    //     async (id) => {
    //         const parametros = {
    //             ...categorias,
    //             nome: novoNome,
    //             descricao: novaDescricao
    //         }
    //         try {
    //             await api.put(`categoria/${id}`, parametros);
    //         } catch (error) {
    //             setErroMensagem(error)
    //         }
    //     }
    // );

    // const removerCategoria = useCallback(
    //     async (id) => {

    //         try {
    //             await api.delete(`categoria/${id}`);
    //             mostrarCategorias();
    //         } catch (error) {
    //             setErroMensagem(error);
    //         }


    //     }, [mostrarCategorias, categorias]
    // );

return (   
        <>
            <Container>
                
                    <select>
                    
                        { categorias.map(
                        (item) =>
                        <option>{item.nome}</option>
                        )}

                    </select>
            </Container>
        </>
       
);
}
export default Categoria;