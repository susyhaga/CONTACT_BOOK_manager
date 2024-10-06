import styled, { createGlobalStyle } from 'styled-components'
import varColors from './varColors'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`

export const Container = styled.div`
  display: flex;
  padding: 16px;
  height: 100vh;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 8px;
    gap: 2px;
    overflow-y:hidden;
  }
`


export const MainContainer = styled.main`
  flex-grow: 1;
  background-color: #fff;
  border-radius: 8px;
  height: auto;
  max-height: 100vh;
  overflow-y: auto;

  @media (max-width: 480px) {
    height: auto;
    max-height: 80vh; /* Aumenta a altura máxima para dispositivos menores */
  }
`

export const Field = styled.input`
  padding: 8px;
  margin-bottom: 24px;
  margin-top: 4px;
  background-color: #ffff;
  border-radius: 4px;
  font-weight: bold;
  color: #666666;
  width: 100%;
  border: 1px solid #666666;

  @media (max-width: 480px) {
    padding: 6px;
  }
`

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

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 6px 10px;
  }
`

export const SaveButton = styled(Button)`
  background-color: ${varColors.green};
  color: white;

  &:hover {
    color: black;
  }
`

export default GlobalStyle
