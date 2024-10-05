import styled from 'styled-components'
import { Link } from 'react-router-dom'
import varColors from '../../styles/varColors'

export const ButtonAdd = styled(Link)`
  height: 66px;
  width: 200px;
  background-color: ${varColors.title};
  color: #ffff;
  position: fixed;
  bottom: 20px;
  right: 100px;
  font-family: Roboto;
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  z-index: 1;

  @media (max-width: 480px) {
    height: 50px;
    width: 160px;
    font-size: 16px;
    right:40px;
  }
`
