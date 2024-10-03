import styled from 'styled-components'
import varColors from '../../styles/varColors'
import * as enums from '../../enums/Contacts/enumsContacts'
import { Button } from '../../styles'

// Definindo a tipagem para as propriedades do Tag
type TagProps = {
  parameters: 'category'
  category: enums.Category // ou o tipo que você estiver usando
}

// Função que retorna a cor de fundo com base nos parâmetros
function returnColor(props: TagProps): string {
  if (props.parameters === 'category') {
    if (props.category === enums.Category.FAMILY) return varColors.family
    if (props.category === enums.Category.FRIEND) return varColors.friends
    if (props.category === enums.Category.OTHERS) return varColors.others
    if (props.category === enums.Category.BUSINESS) return varColors.work
  }
  return '#b33939' // Valor padrão
}

// Card principal
export const Card = styled.div`
  background-color: #fcfcfc;
  top: 10px;
  left: 264px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  border-radius: 16px;
  opacity: 0.9; // Ajuste de opacidade para tornar o cartão visível
  margin-bottom: 16px;
  margin-top: 16px; // Adicionado
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    margin-right: 8px;
  }
`

// Título do cartão
export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 16px;
  padding-top: 4px;
`

export const Name = styled.p`
  margin: 0;
  margin-top: 16px;
  margin-top: 8px;
  padding-top: 4px;
  color: black;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const Email = styled.p`
  margin: 0;
  margin-bottom: 8px;
  margin-top: 16px;
  padding-top: 4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const Phone = styled.p`
  margin: 0;
  margin-top: 16px;
  padding-top: 4px;
  color: black;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

// Componente Tag
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => returnColor(props)};
  border-radius: 8px;
  margin-right: 4px;
  margin-left: 16px;
  display: inline-block;
`

// Barra de ações
export const ActionsSideBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  margin-top: 8px;
`

// Botão de cancelar ou remover
export const CancelRemoveButton = styled(Button)`
  background-color: ${varColors.red};
  margin-top: 16px;
`

export const EditField = styled.div`
  margin: 10px 0;
  margin-top: 8px;

  label {
    font-weight: bold;
    margin-right: 6px;
    margin-top: 12px;
  }

  input,
  select {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`

export const Icon = styled.strong`
  margin-right: 8px;
  margin-top: 8px;
`
export const ErrorMessage = styled.p`
  color: red;
  margin: 10px 0;
`
