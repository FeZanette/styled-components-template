import styled from "styled-components";

export const Carros = styled.div`
  background-color: orange;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
  
  h2 {
    font-size: 28px;
  }

  img {
    width: 180px;
    padding-top: 15px;
  }
`;

export const Lista = styled.ul`
  display: grid;
  grid-template-rows: 35px 35px;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  align-items: center;
  column-gap: 50px;
  font-size: 16px;
`;

export const BotaoCarro = styled.li`
  background-color: white;
  border: none;
  padding: 4px 15px;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
    background-color: lightblue;
  }
`;
