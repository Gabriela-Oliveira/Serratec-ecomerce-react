import styled from 'styled-components';

export const Header = styled.div`
    overflow-x: auto;
    display: flex;
    justify-content: space-between;
    background: #0158BF;
    border: 1px solid;

    img {
        width: 15%;
        margin-left: 30px;
    }

    .meio{
        margin-top: 30px; 
    }

    .filtro{
        width: 82%;
    }

    select {
        margin-top: 20px;
        width: 50%;
        border-radius: 6px;  
        border: none;
    }

    .direita{
        margin-top: 30px;
        margin-right: 30px;
        color:#ffffff;
    }    

    input{
        width: 82%;
        border-radius: 6px; 
        border: none;
    }
`;

export const Container = styled.div`
    overflow-x: auto;
    div.carousel-item{
        margin-left: 6%;
    }

    .carousel-inner{
        margin-top: 20px;
    }

    img{
        width: 90%;
    }`   

export const Main = styled.div`
    overflow-x: auto;
    display:flex;
    

    .produtos{
        width: 200px;
        
    }
    
    container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-left: 50px;
        margin-right: 50px;
        margin-bottom: 50px;
        text-align: center;
        /* border: 1px solid; */
        /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.2); */
    }

    .imagemId{
        width: 200px;
    }
        
    .block{
        margin-top: 30px;
        margin-left: 20px;
        padding: 10px 20px 10px 20px;
    }

    .block:hover{
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.2);
    }

    strong{
        margin: 30px
    }

    .modal-body {
        text-align: center; 
        width: 100%;
    }

    .modal-footer{
        text-align: center; 
        width: 100%;
    }

`;
 
export const ErroMensagem = styled.div`
    display: flex;`

export const Form = styled.div`
    display: flex;`    


   