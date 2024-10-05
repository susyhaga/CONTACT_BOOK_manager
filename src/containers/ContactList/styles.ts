import styled from 'styled-components';

export const ContainerList = styled.div`
  display: flex;
  width: 100vw;
  height: calc(120vh - 60px);
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

export const ContactBook = styled.div`
  position: sticky;
  top: 0;
  background-image: url('/icons/form.jpg');
  z-index: 1;
  margin: 0;
  padding: 36px;
  padding-bottom: 20px;
  width: calc(110% - 10px);
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 62px;
    font-weight: bold;
    color: black;
    text-align: left;
    margin-left: 20px;

    @media (max-width: 480px) {
      font-size: 36px;
    }
  }

  img {
    width: 80px;

    @media (max-width: 768px) {
      width: 40px
    }

    @media (max-width: 480px) {
      width: 40px;
    }
  }
`


export const Alphabet = styled.div`
  position: sticky;
  top: 64px;
  height: calc(126vh - 20px);
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/icons/form.jpg');
  padding: 20px;
  z-index: 10;
  margin-right: 0;
  margin-left: -60px;
  font-size: 17px;
  overflow-y: hidden;

  ul {
    li {
      margin-bottom: 12.6px;
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
    height: calc(100vh - 28px);
    margin-left: 0;
    top: 0;
    padding: 10px;
    overflow-y: hidden;
    font-size: 12px;

    ul {
      li {
        margin-bottom: 6.2px;
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
  display: flex;
  margin-bottom: 0;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  max-height: calc(120vh - 100px);
  overflow-y: auto;

  @media (max-width: 768px) {
    gap: 6px;
    padding: 0 16px;
    margin-top: 8px;
    max-height: calc(90vh - 40px);
  }

  @media (max-width: 480px) {
    gap: 6px;
    padding: 0 6px;
    margin-top: 0;
    max-height: calc(140vh - 76px);
    overflow-y: auto;
  }
`;
