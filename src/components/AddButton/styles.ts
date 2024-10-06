import styled from 'styled-components'
import { Link } from 'react-router-dom'
import varColors from '../../styles/varColors'

export const ButtonAdd = styled(Link)`
  height: 66px;
  width: 200px;
  background-color: ${varColors.title};
  color: #ffff;
  position: fixed;
  bottom: 40px;
  right: 100px;
  font-family: Roboto;
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  z-index: 1;

  @media (max-width: 768px) {
    position:absolute;
    top: 180px;
    height: 48px;
    width: 90px;
    border-radius: 10%;
    font-size: 12px;
    font-weight: bold;
    right:36px;
  }
  @media (max-width: 480px) {
    position:absolute;
    top: 145px;
    height: 38px;
    width: 90px;
    border-radius: 10%;
    font-size: 12px;
    font-weight: bold;
    right:36px;
  }
`
