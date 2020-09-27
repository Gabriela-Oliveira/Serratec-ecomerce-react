import styled from 'styled-components';

export const Body = styled.div`
    display: grid;
    
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "ac af" ;

    div.container {
        margin: 25% auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        background: whitesmoke;
        
    }

    a {
        width: 100%;
        padding: 12px;
        border: 0;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        transition: 1000ms;
        text-decoration: none;
        border-radius: 12px;
        color: #8897fc;
            
            & + a {
                margin-top: -20px;
            }
            
            &:hover {
                background: #8897fc;
                outline: none;
                text-decoration: none;
                color: white;
            }
    }

`;

export const Area_Cliente = styled.div`
    grid-area: ac;
    height: 100vh;
    background: #0158BF;
    color: #0158BF;


    div {
        width: 300px;
        height: 320px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
        padding: 20px;
        text-align: center;
        border-radius: 8px;
        transition: .5s; 
        justify-content: center;
        
            &:hover {
                width: 380px;
                height: 350px;
            }
    }

`;

export const Area_Funcionario = styled.div`
    grid-area: af;
    height: 100vh;
    color: #0158BF;
    background: #0237C1;
    

    
    div {
        width: 300px;
        height: 320px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
        padding: 20px;
        text-align: center;
        border-radius: 8px; 
        transition: .5s; 

        &:hover {
            width: 380px;
            height: 350px;
        }
    }

`;