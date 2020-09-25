import styled from 'styled-components';

export const Body = styled.div`

    a#link-to-vendedor {
        text-decoration: none;
        border: 0;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    background: #8DD7CF;
    border: 1px solid #1AAE9F;

    h1 {
        margin-left: 30px;
        color: #293845;
    }

    h2 {
        margin-top: 40px;
        margin-bottom: -12px;
        margin-right: 50px;
        color: #293845;
    }
`;

export const Container = styled.div`
    display: flex;  
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
    margin-bottom: 28px;

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
        background: #6558F5;
        color: white;
        width: 150px;
        height: 30px;
        transition: 500ms;
        border-radius: 3px;
        text-decoration: none;

        &:hover {
            background: #7e00d5;
        }
    } 
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
`;

export const Infos = styled.div`
     max-width: 850px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px auto;
    background: #B2ACFA;

    input {
        height: 30px;
        width: 350px;
        margin: 30px;
        margin-top: 60px;
        outline: none;
        border: 0;
        text-align: center;

    
    }

    span {

        input {
            margin:20px 0;
            height: 15px;
            width: 20px;
        }
    }
`;