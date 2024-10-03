import styled from 'styled-components'
import { Link } from 'react-router-dom' //botaoAdicionar
import variaveis from '../../styles/varColors'

export const ButtonAdd = styled(Link)`
  height: 50px;
  width: 150px;
  background: ${variaveis.green};
  color: #ffff;
  position: fixed;
  top: 40px;
  right: 40px;
  font-family: Roboto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  border: 4px solid '#009432';
`
