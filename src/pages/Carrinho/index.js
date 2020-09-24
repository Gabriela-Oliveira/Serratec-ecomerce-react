import React, { useState, useCallback, useMemo } from 'react';


const Carrinho = () => {
    const [items, setItems] = useState([]);
    const [pedido, setPedido] = useState({});

    const adicionarItems = (item) => {
        setItems([...items, item]);
    }

    adicionarItems('pedido');
    adicionarItems('pedido2');
    adicionarItems('pedido3');
    adicionarItems('pedido4');
    adicionarItems('pedido5');


    return(
        <>
        <h1>Teste</h1>
        {
            items.map(item => (<h1>{item}</h1>))
        }
        </>
    )
}

export default Carrinho;