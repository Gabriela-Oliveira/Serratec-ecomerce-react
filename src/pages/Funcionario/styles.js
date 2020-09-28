import styled from 'styled-components';
import { shade } from 'polished';
export const ContainerMain = styled.div `
a {
  color: #fff;
}
button, input, optgroup, select, textarea {
  margin: 0px;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    width: 100%;
    margin-bottom: 2rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #0158BF;
    border-radius: 5px;
    text-align: center;

    ::placeholder {
      color: rgba(0, 0, 0, .5);
    }
}
.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
    margin: auto;
}

.modal-header .close {
    padding: 1rem 1rem;
    margin: -1rem -1rem -1rem auto;
    display: contents;
}
.modal-body {
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem;

  button{
    border: none;
    border-radius: 5px;
    height: 2.4rem; 
    transition: 1s;
}
button:hover {
  background: #0158BF;
  color: #FFF;
}
}
.modal-footer {
  .btn {
    display: inline-block;
    font-weight: 400;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: rgba(1,88,191, .6);
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 5px;
    transition: 1s;
}
 .btn:hover {
  background: #0158BF;
  color: #FFF;
 }

}
/* esse aqui sao os botoes do formulario */
.gbxoBG div.formulario span {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-left: 43px;
    button{
      border: none;
      width: 100px;
      border-radius: 5px;
      height: 32px;
      transition: 1s;
      margin-bottom: 0rem;
      }
      button:hover {
        background: #0158BF;
        color: #FFF;
      }
      
}



`


export const Form = styled.form`
  margin-top: 25px;
  max-width: 700px;
  display: flex;

  input{
    flex: 1;

    padding: 0 25px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
   
    background: #04d361;
    border: 0;
    border-radius: 5px;
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

  div.formulario1 {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 25px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: 1s;
    button{
      border: none;
      width: 100px;
      border-radius: 5px;
      height: 32px;
      transition: 1s;
      margin-bottom: 0rem;
      margin-right: 17px;
      }
      button:hover {
        background: #0158BF;
        color: #FFF;
      }
    
    margin-bottom: 20px;
    & + div.formulario1{
      margin-bottom: 20px;
      transition: border-color 0.3s linear 0.1s ,transform 0.3s;
    }

    &:hover{
      border-bottom: 2px solid #0158BF;
    }

    strong {
        display: flex;
        font-size: 20px;
        color: #3d3d4d;
        margin-right: 2rem;
        margin-left: 2rem;
      }

    span {
      display: flex;
      justify-content:center;
      margin-left: auto;
      
    }
    p {
        display: flex;
        flex-wrap:wrap;
        margin: auto;
    }
    svg {
    cursor: pointer;
    margin-right: 6rem;
      }
    
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
    transition: 1s;
    button{
      border: none;
      width: 100px;
      border-radius: 5px;
      height: 32px;
      transition: 1s;
      margin-bottom: 0rem;
      }
      button:hover {
        background: #0158BF;
        color: #FFF;
      }
    & + div.formulario{
      margin-bottom: 20px;
      transition: border-color 0.3s linear 0.1s ,transform 0.3s;
    }

    &:hover{
      border-bottom: 2px solid #0158BF;
    }

    strong {
        display: flex;
        font-size: 20px;
        color: #3d3d4d;
        margin-right: 25px;
        margin-left: 2rem;
      }

    span {
      display: flex;
      justify-content:center;
      margin-left: auto;
      
    }
    p {
        display: flex;
        flex-wrap:wrap;
        margin: auto;
    }
    svg {
    cursor: pointer;
    margin-right: 6rem;
      }
    
  }
  .tab-content {
    width:100%;
  }

  #menu1 {
    strong {
      width:100%;
    }
  }

  .modal .modal-content {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 14rem;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
}
`;