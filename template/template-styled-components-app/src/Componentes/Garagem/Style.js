import styled from "styled-components";

export const Botao = styled.button`
  background-color: orange;
  border: none;
  padding: 7px;
  border-radius: 5px;
 
  &:hover {
    cursor: pointer;
    background-color: lightblue;
  }
`;

export const GaragemContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 10vh;
        background-color: orange;
        color: white;
    }
`

export const Estacionamento = styled.section`
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 2rem;
    background-color: gray;
    padding: 30px;
    border-radius: 10px;

    li{
        list-style: none;
    }
`
