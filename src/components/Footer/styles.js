import styled from 'styled-components';

export const Footer = styled.div`

    overflow-x: auto;
    display: flex;
    text-align: center;
    background: #0158BF;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;

    p:hover{
        transform:translateX(0.1px);
        transition: 0.4s;
    }

    p{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px 0px 20px;
        align-items: center;
    }    
       
    img{
        width: 7%;
    }

    a:visited{
        color: #ffffff; 
        text-decoration:none;
    } 
;`