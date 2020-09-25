import styled from 'styled-components'


export const Tasks = styled.div`
  margin-top: 40px;
  max-width: 700px;
  text-align: center;
 

  div {
    width: 600px;
    background: #fff;
    border-radius: 5px;
    padding: 25px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: border-color 0.3s linear 0.1s ,transform 0.3s;

    & + div{
      margin-top: 16px;
    }

    &:hover{
      transform: translateX(10px);
      border-bottom: 2px solid #04d361;
    }

    strong{
      font-size: 20px;
      color: #3d3d4d;
      margin-right: 25px;
    }

    span {
      margin-left: auto;
    }

    svg {
      color: #cbcbd6;
      cursor: pointer;
    }
    
  }
`;