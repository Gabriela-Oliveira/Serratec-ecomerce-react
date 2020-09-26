import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100%;

    div {
        display: grid;
        justify-content: center;
        align-items: center;
        margin: 5rem auto;
        padding: 40px;


        input {
            width: 30rem;
            padding: 5px;
            border: 0;
            background: none;

            &:hover{
                border-bottom: 2px solid #4285F4;
            }

            &:focus {
                border-bottom: 2px solid #4285F4;
            }

        }

        span {
            padding: 6px;

            
            
        }

        input + span {
            margin-top: 12px;
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid #4285F4;
            border-radius: 8px;
            outline: none;
            margin-top: 20px;
            transition: .4s;
            font-weight: bold;

            &:hover {
                background: blue;
                color: white;
            }
        }
    }
`;

export const ErrorMessage = styled.div`
    justify-content: center;
    align-items: center;
    background: red;
    color: black;
    font-weight: bold;
    width: 30rem;
    border-radius: 12px;
    margin: 0;
`;