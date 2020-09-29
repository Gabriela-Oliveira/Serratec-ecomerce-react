import React  from 'react';

import { Item as Container } from './styles';



const Item = ({ item, somar, subtrair, remover_da_lista }) => {
    
    return(
        <Container>
                    <strong>Nome: {item.nomeProduto}</strong>
                    <strong>Valor: {item.valor}</strong>
                    <strong>Subtotal: {item.subTotal}</strong>
                    <div>
                    <button onClick={ () => {
                        subtrair(item);
                    }}
                    >-</button>
                        <strong>{item.qtdItens}</strong>
                    <button onClick={() => {
                        somar(item);
                    }}
                    >+</button>
                    </div>

                    <button className="excluir" onClick={() => {
                        
                        remover_da_lista(item.idProduto)
                        }}>Excluir</button>
                    </Container>
    )
}

export default Item;