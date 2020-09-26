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
        background: red;


        button{
            background-color: transparent;
            width: 30px;
            height: 30px;
            border: 0;

            &:hover{
                border: 1px solid grey;
            }
        }
    }
    
    & + div{
        margin-top: 40px;
    }

    button{
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