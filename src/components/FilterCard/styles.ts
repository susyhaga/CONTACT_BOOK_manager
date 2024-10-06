import styled from 'styled-components';
import varColors from '../../styles/varColors';

type Props = {
  active: boolean;
};

export const Card = styled.div<Props>`
  border: 1px solid ${(props) => (props.active ? varColors.title : '#a1a1a1')};
  background-color: ${(props) => (props.active ? '#ffff' : '#fcfcfc')};
  color: ${(props) => (props.active ? varColors.title : '#5E5E5E')};
  border-radius: 8px;
  width: 100%;
  height: 63px;
  padding: 10px;
  margin-bottom: 20px ;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;

  @media (max-width: 480px) {
    height: 40px;
    padding: 6px;
    margin-top: 2px;
    margin-bottom: 0px ;
  }
`

export const Label = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  line-height: 16.41px;
  text-align: left;
  margin-right: 40px;
  margin-left: 3px;

  @media (max-width: 480px) {
    font-size: 12px;
    font-weight: bold;
    line-height: 10px;
    text-align: left;
    margin-right: 2px;
    margin-left: 3px;
    margin-bottom: 2px;
  }
`;
export const Counter = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
  margin: 3px;

  @media (max-width: 480px) {
    font-size: 10px;
    margin-right: 1px;

  }
`


