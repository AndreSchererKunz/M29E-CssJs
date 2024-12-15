import { VagasAnuncio, TituloAnuncioDaVaga, LinkAnuncio } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagasAnuncio>
    <TituloAnuncioDaVaga>{props.titulo}</TituloAnuncioDaVaga>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <LinkAnuncio href="#">Ver detalhes e candidatar-se</LinkAnuncio>
  </VagasAnuncio>
)

export default Vaga
