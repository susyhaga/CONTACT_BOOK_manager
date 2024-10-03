import styled from 'styled-components'
import varColors from '../../styles/varColors'

export const MainContainerForm = styled.main`
  display: block;
  padding: 0 40px;
  gap: 16px;
  background-image: url('/icons/form.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
`
export const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
`

export const ContainerForm = styled.main`
  display: block;
  padding: 0 40px;
  gap: 16px;
  background-color: #fff;
  border-radius: 8px;
  width: 760px;
  height: 660px;
  overflow: hidden;
  border: 3px solid ${varColors.grey};
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
`
export const Icon = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain; /* Garante que a imagem não seja cortada */
  filter: invert(100%) sepia(49%) saturate(300%) hue-rotate(179deg)
    brightness(95%) contrast(95%);
`
export const TitleForm = styled.form`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  color: ${varColors.title};
`
export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #666666;

  textarea {
    resize: none; //evita comportamento de expansao do textarea
    margin: 16px 0;
  }
`

export const Field = styled.input`
  padding: 8px;
  background-color: #ffff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  width: 100%;
  border: 1px solid #666666;
`
// Componente para o asterisco
export const Asterisk = styled.span`
  color: ${varColors.red};
  margin-left: 4px;
`

export const PhoneDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;
`

export const TextInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${varColors.title};
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 14%; /* Largura menor para ddi e ddd */
  margin-top: 4px;

  label {
    font-size: 12px;
    font-weight: bold;
    color: #555;
    margin-bottom: 4px; /* Espaço entre o label e o input */
  }

  input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #666666;
    font-size: 12px;
    font-weight: normal;
    height: 50px; /* Ajuste a altura conforme necessário */
    box-sizing: border-box;
    color: #666666;
    margin-bottom: 16px;
  }
`
export const InputContainerPhone = styled(InputContainer)`
  width: 68%;
`

//estilo da DIV +  estilo  dos LABELS
export const Options = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 16px;
  margin-top: 20px;

  p {
    margin-bottom: 16px;
    margin-right: 8px;
    color: ${varColors.title};
  }
  label {
    text-transform: lowercase;
    font-size: 14px;
    margin-left: 2px;
    margin-right: 16px;
    width: 12px;
    top: 376px;
    left: 264px;
  }
`
export const Option = styled.div`
  margin-bottom: 16px;
  display: inline;
  text-transform: capitalize; //as 1.ª  letras começa como MAIÚSCULAS
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

  img {
    filter: brightness(0) invert(1);
    width: 22px;
    height: 22px;
    margin-right: 8px;
  }
`
