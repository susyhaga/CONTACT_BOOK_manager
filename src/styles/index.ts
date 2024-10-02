import styled, { createGlobalStyle } from 'styled-components'
import varColors from './varColors'

//1 estilo global //exportar em App.tsx
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif; //exportar font em index.html
    list-style: none;
    overflow: hidden;
  }
`
//2) criando estilo dos containers //exportar em App.tsx
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px, auto;
  display: flex;
  gap: 16px;
  padding: 16px;
`
//3)export para :  pages/Cadastro + containers/ListaDeTarefas
export const MainContainer = styled.main`
  padding: 0 40px;
  flex-grow: 1; /* Faz com que o conteúdo principal ocupe o espaço restante */
  gap: 16px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  height: 100vh; //altura atingida gera um scroll
  overflow-y: scroll;
`
//3 export para: pages/Cadastro + containers/ListaDeTarefas
export const Title = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

// 4) Estilo dos INPUTs" usar nos containers em BarraLateral e Formulario
export const Field = styled.input`
  padding: 8px;
  background-color: #ffff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  width: 100%; /* Preenche 100% da largura disponível */
  border: 1px solid #666666;
`
//5) botoes
export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  line-height: 14.06px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const SaveButton = styled(Button)`
  // Botao = estilo do Botao de Tarefas
  background-color: ${varColors.green};
`
export default GlobalStyle //App.tsx
