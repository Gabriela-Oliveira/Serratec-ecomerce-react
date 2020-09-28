import styled from 'styled-components';

export const Body = styled.div`

    a#link-to-vendedor {
        text-decoration: none;
        border: 0;
    }
`;

export const Container = styled.div`
    display: flex;  
    justify-content: space-between;
    align-items: center;
    margin-top: 27px;
    margin-bottom: 27px;

    h3 {
        color: #293845;
        margin-left: 80px;        
    }

    a {
        margin-right: 100px;
        color: #6558F5;
    }
`;

export const Form = styled.form`
    width: 100%;

    button#link-continuar {
        display: flex;
        outline: 0;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
        border: 0;
        background: blue;
        color: white;
        width: 150px;
        height: 25px;
        transition: 500ms;
        border-radius: 3px;
        text-decoration: none;

        &:hover {
            background: #7e00d5;
        }
    } 
`;

// export const Footer = styled.footer`
//     display: flex;
//     justify-content: center;
// `;

export const Infos = styled.div`
    max-width: 850px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px auto;
    background: rgb(255, 255, 255);
    border-radius: 12px;
    box-shadow: 2px 2px 11px #0158BF;

    input {
        height: 30px;
        width: 350px;
        margin: 30px;
        margin-top: 60px;
        outline: none;
        border: 0;
        text-align: center;
        border-radius: 3px;
        /* background: whitesmoke; */

        &:hover {
            border-bottom: 1px solid #7FA8DB;
        }

        &:focus {
            border-bottom: 1px solid #7FA8DB;
        }
       

        & + input + input {
            margin-top: 10px;
            
        }
    }

    span {

        input {
            margin:20px 0;
            height: 15px;
            width: 20px;
        }
    }

`;