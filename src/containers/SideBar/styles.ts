import styled from 'styled-components'

// 1) Estilo para o ASIDE que será o container de filtros
interface SideBarProps {
  show: boolean
}

export const SideBar = styled.aside<SideBarProps>`
  padding: 16px;
  background-color: #eeee;
  height: 100vh; /* Altura total da viewport */
  border-radius: 8px;
  width: 224px; /* Largura fixa para o Sidebar */
  display: ${(props) =>
    props.show ? 'block' : 'none'}; /* Controle de visibilidade */
`

// 2) Estilo para o GRID dos filtros
export const Filters = styled.div`
  display: flex;
  flex-direction: column; /* Direção dos itens é vertical */
  gap: 8px; /* Espaçamento entre os cards */
  width: 100%; /* Largura total do contêiner */
  margin-top: 16px;
`

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`

export const Actions = styled.div`
  margin-top: 16px;
`

export const FilterSection = styled.div`
  margin-bottom: 16px;
`
export const ContactList = styled.div`
  /* Adicione aqui os estilos desejados para a lista de contatos */
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
