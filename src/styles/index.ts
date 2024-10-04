import styled, { createGlobalStyle } from 'styled-components'
import varColors from './varColors'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    overflow: hidden;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 8px;
  }
`

export const Alphabet = styled.div`
  position: sticky;
  top: 10px;
  height: 100vh;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  padding: 28px;
  z-index: 10;

  @media (max-width: 480px) {
    width: 30px;
    padding: 16px;
  }
`

export const MainContainer = styled.main`
  flex-grow: 1;
  background-color: #fff;
  border-radius: 8px;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 480px) {
    height: auto;
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

export const ContactBook = styled.div`
  position: sticky;
  top: 0;
  background-image: url('/icons/form.jpg');
  z-index: 1;
  margin: 0;
  padding: 60px;
  width: calc(110% - 10px);
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 62px;
    font-weight: bold;
    color: black;
    text-align: left;
    margin-left: 20px;

    @media (max-width: 480px) {
      font-size: 36px;
    }
  }

  img {
    width: 80px;

    @media (max-width: 480px) {
      width: 60px;
    }
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
`

export default GlobalStyle
