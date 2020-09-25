import styled from 'styled-components';

export const Body = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "ac af" ;
    

    a {
        display: flex;
        height: 60px;
        width: 200px;
        border-radius: 5px;
        color: black;
        font-weight: bold;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
        margin-top: 40px;
        transition: .5s;        
    }
`;

export const Area_Cliente = styled.div`
    grid-area: ac;
    height: 100vh;
    background: #0158BF;
    

    h1{
        margin-top: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #131314;
    }

    a:hover {
        background: #0237C1;
        outline: none;
        text-decoration: none;
        border: 1px solid blue;
    }

`;

export const Area_Funcionario = styled.div`
    grid-area: af;
    background: #0237C1;
    

    h1{
        margin-top: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #131314;
        
    }

    a:hover {
        background: #0158BF;
        outline: none;
        text-decoration: none;
        border: 1px solid blue;
    }

`;
