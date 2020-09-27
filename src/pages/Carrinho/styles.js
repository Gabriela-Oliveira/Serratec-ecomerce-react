import styled from 'styled-components';

export const Item = styled.div`

    width: 70vw;
    display: flex;
    justify-content: space-between;
   
    align-items: center;
    background-color: #fff;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100px;
        height: 100%;
        border-radius: 5px;

        button{
            background-color: green;
            width: 30px;
            height: 41px;
            border: 0;
            outline: none;

            &:nth-child(1){
                border-radius: 5px 0 0 5px;
                color: blue;
                background-color: transparent;
                border: 1px solid blue;

                &:hover{
                    background-color: blue;
                    border: 1px solid white;
                    color: white;
                }
                
            }

          &:nth-last-child(1){
            border-radius: 0 5px 5px 0;
            color: white;
            background-color: blue;

            &:hover{
                    background-color: white;
                    border: 1px solid blue;
                    color: blue
                }
            
          }

            
        }
    }
    
    & + div{
        margin-top: 20px;
    }

    .excluir{
        height: 40px;
        width: 50px;
        background-color: #FF6347;
        color: white;
        border: 0;
        border-radius: 5px;
    }

`;

export const Carrinho = styled.div`

    display: grid;
    justify-content: center;

`;