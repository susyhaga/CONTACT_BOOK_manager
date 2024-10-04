import styled from 'styled-components';

export const ContainerList = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 16px;
  padding-top: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 8px;
    height: 80vh;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    padding: 0px;
    height: 80vh;
  }
`;

export const MainContainerForm = styled.main`
  display: block;
  padding: 0 40px;
  gap: 16px;
  background-image: url('/icons/form.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  width: 100vw;
  max-height: 100vh;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 0 30px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
    min-height: auto;
    max-height: 100vh;
    overflow-y: scroll;
  }
`;

export const ContactBook = styled.div`
  position: sticky;
  top: 0;
  background-image: url('/icons/form.jpg');
  z-index: 1;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  h1 {
    font-size: 30px;
    font-weight: bold;
    color: black;
    margin-left: 8px;
  }

  img {
    width: 60px;
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    height: 40px;
    padding: 5px;
    display: block;

    h1 {
      font-size: 16px;
      margin-left: 5px;
    }

    img {
      width: 45px;
    }
  }


  @media (max-width: 480px) {
    height: 30px;
    padding: 5px 10px;
    justify-content: space-between;
    display: block;

    h1 {
      font-size: 12px;
      margin-left: 3px;
      white-space: nowrap;
    }

    img {
      width: 40px;
      margin-right: 3px;
    }
  }
`

export const Alphabet = styled.div`
  position: sticky;
  top: 50px;
  height: calc(196vh - 80px);
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/icons/form.jpg');
  padding: 20px;
  z-index: 10;
  margin-right: 0;
  margin-left: -60px;
  font-size: 18px;

  ul {
    li {
      margin-bottom: 12px;
    }
  }

  @media (max-width: 768px) {
    top: 60px;
    height: calc(150vh - 80px);
    margin-left: -20px;
  }

  @media (max-width: 480px) {
    top: 60px;
    width: 48px;
    height: calc(90vh - 40px);
    margin-left: 0;
    top: 0;
    padding: 10px;
    overflow-y: hidden;
    font-size: 14px;

    ul {
      li {
        margin-bottom: 4px;
      }
    }
  }
`;

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

  @media (max-width: 768px) {
    font-size: 8px;
  }

  @media (max-width: 480px) {
    font-size: 3px;
    margin-bottom: 5px;
    overflow-y: hidden;
  }
`;

export const ContactList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  max-height: calc(160vh - 50px);
  overflow-y: auto;

  @media (max-width: 768px) {
    gap: 6px;
    padding: 0 16px;
    margin-top: 8px;
    max-height: calc(90vh - 40px);
  }

  @media (max-width: 480px) {
    gap: 6px;
    padding: 0 8px;
    margin-top: 0;
    max-height: calc(140vh - 50px);
    overflow-y: auto;
  }
`;
