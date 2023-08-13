import { Carros, Lista, BotaoCarro } from "./styleCarro";
import CarroImagem from "./CarroImagem.png"

export function Carro(props) {
  return (
    <Carros>
      <h2>Meu carro</h2>
      <img src={CarroImagem}/>
      
      <Lista>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <BotaoCarro onClick={props.mensagemAprentacao}>Adicionar</BotaoCarro>
      </Lista>
    </Carros>
  );
}
