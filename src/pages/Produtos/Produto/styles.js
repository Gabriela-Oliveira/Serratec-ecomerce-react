import styled from 'styled-components';

export const Header = styled.div`
    
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

export const Main = styled.div`

    .carousel-inner{
        width: 100%;
    }

    .produtos{
        width: 200px;

    }

      
`;








export const Carousel = styled.div`
display: flex;`

// export const Main = styled.div`
//     display: flex;`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap; 
    
    img {
        width:800px;

    }`  

export const ErroMensagem = styled.div`
    display: flex;`

export const Form = styled.div`
    display: flex;`    

   