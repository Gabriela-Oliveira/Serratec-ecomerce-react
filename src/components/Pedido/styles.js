import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin-top: 10px;
    height: 30px;


    div{
        display: flex;
        width: 300px;
        height: 100%;
        justify-content: space-between;


        button{

            background-color: transparent;
            border-radius: 5px;
            border: 0;

            &:nth-child(1){
                background-color: blue;
                color: white;
            }

            &:nth-last-child(1){
                background-color: red;
                color: white;

            }
        }

    }


    & + div{
        margin-top: 20px;
    }

`;