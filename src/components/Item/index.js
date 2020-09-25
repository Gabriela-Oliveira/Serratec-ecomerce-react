import React  from 'react';


const Item = (props) => {
   
    
    
    return(
        <>
            <div key={props.produto.id}>
            <img src={props.produto.fotoLink} alt={props.produto.nome} />
            <h3>{props.produto.nome}</h3>
            <p>{props.produto.descricao}</p>
            <p>{props.produto.valor}</p>
            </div>
        </>
    )
}

export default Item;