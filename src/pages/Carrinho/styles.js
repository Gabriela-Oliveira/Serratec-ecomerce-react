import styled from 'styled-components';


export const Carrinho = styled.div`

    display: grid;
    justify-content: center;

    .voltar{
        justify-self: end;
        font-size: 20px;
    }

    .buttons{
        display: flex;
        justify-content: flex-end;
        margin-top: 100px;

        button{
            border: 0;
            width: 200px;
            height: 40px;

            &:nth-child(2){
                background-color: blue;
                border-radius: 5px;
                color: white;

                &:hover{
                    background-color: white;
                    color: blue;
                    border: 1px solid blue;

                }
            }

            &:nth-child(1){
                background-color: white;
                border: 1px solid blue;
                border-radius: 5px;
                color: blue;

                &:hover{
                    background-color: blue;
                    color: white;
                    border: 1px solid white;
               

            }

            & + button {
                margin-left: 80px;
            }
        }
    }
    }

`;

