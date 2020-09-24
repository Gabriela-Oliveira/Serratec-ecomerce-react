import React from 'react';

const Cadastro_Cliente = () => {
    return(
        <>
            <h2>Cadastro de cliente</h2>
        
            <div>
                <h3>Complete seu dados</h3>
                <a>Criar uma conta de vendedor (arrow react-icon)</a>
            </div>

            <form>
                <input placeholder="Nome"></input>
                <input placeholder="Nome de Usuario"></input>
                <input placeholder="CPF"></input>
                <input placeholder="Data de nascimento"></input>
                <input placeholder="Email"></input>
                <input placeholder="Senha"></input>
                <button>Continuar</button>
            </form>
        </>
    )
}

export default Cadastro_Cliente;