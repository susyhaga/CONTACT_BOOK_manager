import styled from 'styled-components'
import { Link } from 'react-router-dom'
import varColors from '../../styles/varColors'

export const ButtonAdd = styled(Link)`
  height: 66px;
  width: 200px;
  background-color: ${varColors.title};
  color: #ffff;
  position: fixed;
  bottom: 10px;
  right: 92px;
  font-family: Roboto;
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  z-index: 20;
`
