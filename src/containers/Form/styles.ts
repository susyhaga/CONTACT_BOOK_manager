import styled from 'styled-components';
import varColors from '../../styles/varColors';
import { Button } from '../../styles';

export const MainContainerForm = styled.main`
  display: block;
  padding: 0 10px;
  gap: 16px;
  background-image: url('/icons/form.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding-top: 60px;
    overflow-y: scroll;
    width: 96vw;
    height: 98vh;
  }
`

export const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;

  @media (max-width: 480px) {
    height: auto;
    padding-top: 0px;
    margin-top: 10px;
  }
`

export const ContainerForm = styled.main`
  display: block;
  gap: 16px;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  width: 760px;
  height: 660px;
  overflow: hidden;
  border: 3px solid ${varColors.grey};

  @media (max-width: 480px) {
    margin-right:0px;
    width: 90vw;
    height: auto;
    padding-top: 40px;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${varColors.title};

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    margin-top: 14px;
  }
`

export const Icon = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
  filter: invert(100%) sepia(49%) saturate(300%) hue-rotate(179deg)
    brightness(95%) contrast(95%);

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`

export const TitleForm = styled.form`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  color: ${varColors.title};

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`

export const Field = styled.input`
  padding: 8px;
  margin-top: 0px;
  background-color: #ffff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  width: 100%;
  border: 1px solid #666666;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`


export const Asterisk = styled.span`
  color: ${varColors.red};
  margin-left: 4px;
`


export const PhoneDiv = styled.div`
  display: flex;
  align-items: center; // Alinha os campos verticalmente no centro
  justify-content: space-between; // Espaça os campos uniformemente
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: row; // Garante que os campos fiquem lado a lado
    gap: 8px; // Ajuste o espaçamento
  }
`

export const TextInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  width: 100%;
  color: ${varColors.title};
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 12%;
  margin-top: 4px;


  label {
    font-size: 12px;
    font-weight: bold;
    color: #555;
    margin-bottom: 1px;

    @media (max-width: 480px) {
      margin-bottom: 0px;
    }
  }

  input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #666666;
    font-size: 12px;
    font-weight: normal;
    height: 30px;
    box-sizing: border-box;
    color: #666666;
    margin-bottom: 16px;
    margin-top: 0px;
  }

  @media (max-width: 480px) {
    width: 40px;
  }
`

export const InputContainerPhone = styled(InputContainer)`
  flex: 1;
  max-width: 80%;
  `

export const Options = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 16px;
  margin-top: 20px;

  p {
    margin-bottom: 16px;
    width: 100%;
    margin-right: 8px;
    margin-bottom: 4px;
    color: ${varColors.title};
  }

  @media (max-width: 480px) {
    flex-direction: row;
    gap: 8px;
  }
`

export const Option = styled.div`
  margin-bottom: 12px;
  display: inline;



  @media (max-width: 480px) {
    font-size: 12px;
  }
`

export const ReturnButton = styled.button`
  background-color: ${varColors.title};
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 24px;
  position: absolute;
  top: 10px;
  left: 10px;

  @media (max-width: 480px) {
    margin-left: 0;
  }

  img {
    filter: brightness(0) invert(1);
    width: 22px;
    height: 22px;
    margin-left: 2px;
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    padding: 8px 12px;
    margin-right: 4px;
  }
`
export const RegButton = styled(Button)`
  background-color: ${varColors.green};
  color: white;
  font-size: 12px;
    padding: 14px 20px;
  &:hover {
    color: black;
  }
`
