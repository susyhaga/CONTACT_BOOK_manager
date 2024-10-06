import styled from 'styled-components';

export const ContainerList = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 6px;
  padding-top: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 2px;
    height: 80vh;
    padding-top: 6px;
    padding-left: 0px;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    padding-bottom: 2px;
    padding-top: 6px;
    height: 80vh;
  }
`

export const ContactBook = styled.div`
  position: sticky;
  top: 0;
  background-image: url('/icons/form.jpg');
  z-index: 1;
  margin: 0;
  padding: 36px;
  padding-bottom: 34px;
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
  }

    @media (max-width: 480px) {
      padding-right: 106px;
      height: 42px;
    }

  h1 {
    font-size: 62px;
    font-weight: bold;
    color: black;
    text-align: left;
    margin-left: 20px;

    @media (max-width: 480px) {
      font-size: 36px;
      padding: 6px;
      padding-bottom: 4px;
      margin-left: 0px;
    }
  }

  img {
    width: 80px;

    @media (max-width: 768px) {
      width: 50px;
    }

    @media (max-width: 480px) {
      width: 50px;
    }
  }
`


export const Alphabet = styled.div`
  position: sticky;
  top: 54px;
  height: calc(126vh - 20px);
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/icons/form.jpg');
  padding: 20px;
  z-index: 10;
  margin-right: 0;
  margin-left: -48px;
  font-size: 18px;
  overflow-y: hidden;

  ul {
    li {
      margin-bottom: 12px;
    }
  }

  @media (max-width: 768px) {
    top: 64px;
    width: 28px;
    height: calc(100vh - 34px);
    margin-right: 9px;
    top: 0;
    padding: 10px;
    font-size: 9px;
    margin-right: 0;
    ul {
      li {
        margin-bottom: 5px;
      }
    }
  }

  @media (max-width: 480px) {
    top: 64px;
    width: 28px;
    height: calc(100vh - 34px);
    margin-right: 9px;
    top: 4;
    padding: 10px;
    font-size: 11px;
    margin-right: 0;

    ul {
      li {
        margin-bottom: 4.5px;
      }
    }
  }
`

export const ContactList = styled.div`
  display: flex;
  margin-bottom: 0;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  height: 100vh;
  overflow-y:auto;

  @media (max-width: 768px) {
    margin-top: 0;
    padding-top: 0;
    max-height: calc(140vh - 76px);
    overflow-y: auto;

    ul {
      li {
        margin-top: 0;
        padding-top: 0;
      }
    }
  }

  @media (max-width: 480px) {
    margin-top: 0;
    padding-top: 0;
    max-height: calc(140vh - 76px);
    overflow-y: auto;

    ul {
      li {
        margin-top: 0;
        padding-top: 0;
      }
    }
  }
`
