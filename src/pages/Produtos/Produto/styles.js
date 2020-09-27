import styled from 'styled-components';

export const Header = styled.div`
    overflow-x: auto;
    display: flex;
    justify-content: space-between;
    background: #8DD7CF;
    border: 1px solid #1AAE9F;

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
    }

    .direita{
        margin-top: 30px;
        margin-right: 30px;
    }    
`;

export const Container = styled.div`
    overflow-x: auto;
    div.carousel-item{
        margin-left: 6%;
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
        /* margin-top: 50px; */
        margin-bottom: 50px;
        text-align: center;
    }

    .block{
        margin-top: 30px;
    }

    .block:hover{
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.2);
    }

    strong{
        margin: 30px
    }

        
`;

   

     

    

export const ErroMensagem = styled.div`
    display: flex;`

export const Form = styled.div`
    display: flex;`    

   