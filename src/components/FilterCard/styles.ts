import styled from 'styled-components'
import varColors from '../../styles/varColors'

// Tipagem da prop ATIVO
type Props = {
  active: boolean
}

// 1) Div principal do Card
export const Card = styled.div<Props>`
  border: 1px solid ${(props) => (props.active ? varColors.title : '#a1a1a1')};
  background-color: ${(props) => (props.active ? '#ffff' : '#fcfcfc')};
  color: ${(props) => (props.active ? varColors.title : '#5E5E5E')};
  border-radius: 8px;
  width: 100%;

  height: 63px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
`

// 2) Estilo para o contador (número de contatos)
export const Counter = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
  margin: 3px;
`

// 3) Estilo para o label (texto do estado do contato)
export const Label = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  line-height: 16.41px;
  text-align: left;
  margin-right: 40px;
  margin-left: 3px;
  margin-bottom: 6px;
`
