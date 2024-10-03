import styled from 'styled-components'

export const ContainerList = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
`

export const MainContainer = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  overflow-y: auto;
  position: relative;
  margin-right: 60px;
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
`
