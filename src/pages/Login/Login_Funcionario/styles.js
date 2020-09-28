import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    div#infos {
        background: rgba(255, 255, 255, .98);
        height: 60vh;
        width: 70vw;
        display: grid;
        padding: 150px;
        

        h4 {
            margin-top: -115px;
        }
        
        input {
            margin-top: -40px;
            border: 0;
            background: transparent;
            border-bottom: 2px solid #5267fb;
            
            & + input {
                margin-top: 20px;
                padding: 5px;
                margin-bottom: 20px;
            }
        }

        button, a {
            display: flex;
            justify-content: center;
            margin: auto;
            width: 350px;
            background: blue;
            margin-top: 12px;
            border: 0;
            outline: none;
            color: whitesmoke;
            height: 30px;
            border-radius: 12px;
            transition: .3s;
            
            &:hover {
                text-decoration: none;
                background: #5267fb;
            }
        }
    }
`;

export const ErrorMessage = styled.span`
    color: red;
    margin-top: 12px;
    text-align: center;
`;

export const Body = styled.div`
    display: grid;
    grid-template-rows: 40vh 60vh;
    grid-template-areas: "MC"
                         "MB";
    
`;

export const Main_Cima = styled.div`
    grid-area: MC;
    background: #0158BF;

    img {
        width: 200px;
        height: 140px;
    }

`;

export const Main_Baixo = styled.div`
    grid-area: MB;
    background: #DDD8D2;
`;  