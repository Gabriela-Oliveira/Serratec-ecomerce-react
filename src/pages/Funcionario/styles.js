import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.form`
    display: flex;
    justify-content: center;
      h2 {
        margin: auto;
        margin-top: 2rem;
      }
      a {
        text-decoration: none;
      }
    .logo {
      margin: auto;
      margin-top: 2rem;
    }
  
`
export const Form = styled.form`
  margin-top: 25px;
  max-width: 700px;
  display: flex;

  input{
    flex: 1;
    height: 50px;
    padding: 0 25px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 120px;
    height: 50px;
    background: #04d361;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover{
      background: ${shade(0.2, '#04d361')}
    }
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  color: #c53030;
  margin-top: 10px;
`;

export const Tasks = styled.div`
  margin-top: 40px;
  width: auto;

  .teste {
    margin-left: 20rem;
    margin-bottom: 1rem;
    width: 7rem;
    border: none;
    transition: background-color 0.2s;
    background: rgba(1,88,191,0.6);
    border-radius: 3px;
    color: #ffff;
    text-decoration:none;
    outline: none;
    border-bottom: none;
    
  }
  .teste:hover {
    background: rgba(1,88,191,0.3);
    color: #3d3d4d;
  }
  .teste1 {
    margin-left: 2rem;
    margin-bottom: 1rem;
    width: 7rem;
    border: none;
    transition: background-color 0.2s;
    background: rgba(1,88,191,0.6);
    border-radius: 3px;
    color: #ffff;
    text-decoration:none;
    outline: none;
  }
  .teste1:hover {
    background: rgba(1,88,191,0.3);
    color: #3d3d4d;
  }

  .teste2 {
    margin-left: 2rem;
    margin-bottom: 1rem;
    width: 7rem;
    border: none;
    transition: background-color 0.2s;
    background: rgba(1,88,191,0.6);
    color: #ffff;
    border-radius: 3px;
    text-decoration: none;
    outline: none;
  }
  .teste2:hover {
    background: rgba(1,88,191,0.3);
    color: #3d3d4d;
  }


  div.formulario {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 25px;
    text-decoration: none;
    display: flex;
    align-items: center;
    
    margin-bottom: 20px;
    & + div.formulario{
      margin-bottom: 20px;
      transition: border-color 0.3s linear 0.1s ,transform 0.3s;
    }

    &:hover{
      border-bottom: 2px solid #0158BF;
    }

    strong {
        font-size: 20px;
        color: #3d3d4d;
        margin-right: 25px;
        margin-left: 4rem;
      }

    span {
      display: flex;
      justify-content:center;
      margin-left: auto;
      flex-wrap:wrap;
    }
    p {
        display: flex;
        flex-wrap:wrap;
        margin: auto;
      }

    svg {
      color: #cbcbd6;
      cursor: pointer;
    }
    
  }
  .tab-content {
    width:100%;
  }
`;