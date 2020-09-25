import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.form``
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
  max-width: 700px;

  div {
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