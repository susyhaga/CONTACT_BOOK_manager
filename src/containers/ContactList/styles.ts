import styled from 'styled-components'

export const ContainerList = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 8px;
    overflow-y: scroll;
  }
`

export const MainContainerForm = styled.main`
  display: block;
  padding: 0 40px;
  gap: 16px;
  background-image: url('/icons/form.jpg');
  background-size: cover;
  background-position: center;
  overflow: auto;
  width: 100vw;
  min-height: 100vh;

  @media (max-width: 480px) {
    padding: 0 20px;
    min-height: auto;
  }
`

export const Alphabet = styled.div`
  position: sticky;
  top: 192px;
  height: calc(80vh - 80px);
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/icons/form.jpg');
  padding: 20px;
  z-index: 10;
  margin-right: 0;
  margin-left: -60px;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    margin-left: 0;
    top: 0;
    padding: 10px;
  }
`

export const AlphabetItem = styled.div`
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  color: black;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  &:hover {
    color: #007bff;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    font-size: 8px;
    margin-bottom: 5px;
  }
`

export const ContactList = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-height: 800px;
  overflow-y: scroll;

  @media (max-width: 768px) {
    margin-top: 12px;
    padding: 0 12px;
  }

  @media (max-width: 480px) {
    gap: 6px;
    padding: 0 8px;
    margin-top: 8px;
    max-height: 800px;
    overflow-y: scroll;
  }
`
