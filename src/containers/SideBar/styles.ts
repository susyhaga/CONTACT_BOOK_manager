import styled from 'styled-components'
import varColors from '../../styles/varColors'

type SideBarProps = {
  show: boolean
}


export const SideBar = styled.aside<SideBarProps>`
  padding: 16px;
  background-image: url('/icons/form.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  border-radius: 8px;
  width: 524px;
  display: ${(props) => (props.show ? 'block' : 'none')};

  @media (max-width: 768px) {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-bottom: 0;
    width: 100%;
    height: auto;
    overflow-y: hidden;
  }

  @media (max-width: 480px) {
    margin-top: 8px;
    padding-top: 0px;
    padding-bottom: 0px;
    width: 100%;
    height: 33vh;
    margin-bottom: 0px;
    border-radius: 4px;
    overflow-y: hidden;
  }
`
export const Title = styled.h2`
  font-size: 28px;
  margin-top: 40px;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 0px;
    padding-bottom: 0;
    font-size: 30px;
  }

  @media (max-width: 480px) {
    display:none

  }
`

export const SearchIcon = styled.img`
  position: absolute;
  left: 80px;
  top: 9%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  margin-right: 12px;

  @media (max-width: 768px) {
    left: 50px;
    top: 8%;
    width: 18px;
    height: 18px;
  }

  @media (max-width: 480px) {
    left: 50px;
    top: 8%;
    width: 32px;
    height: 32px;
  }
`
export const Actions = styled.div`
  margin-top: 16px;

    @media (max-width: 768px) {

      height: 46px;
      margin-top: 0px;
      margin-bottom: 0px;
    }

    @media (max-width: 480px) {
      height: 46px;
      margin-top: 10px;
      margin-bottom: 0px;
    }

  input {
    width: 26vw;
    height: 40px;
    margin-bottom: 0px;

    @media (max-width: 768px) {
      width: 100%;
      height: 36px;
      margin-top: 0px;
    }

    @media (max-width: 480px) {
      width: 100%;
      height: 36px;
      margin-top: 0px;
    }
  }
`
export const FilterSection = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 10px;

  label {
    display: flex;
    flex-direction: row;
    font-size: 18px;
    font-weight: bold;
    padding-right: 10px;
  }

  select{
    margin-top: 3px;
    width: 60px;
    height: 18px;
    font-weight: bold;
    color: ${varColors.title};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    font-size: 18px;
    font-weight: bold;
    padding-right: 0px;
    margin-bottom: 0px;


  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    font-size: 18px;
    font-weight: bold;
    padding-right: 0px;
    margin-bottom: 10px;
  }
}
`
export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;

`

export const SearchIcon2 = styled.img`
  display:none;

  @media (max-width: 768px) {
    display: flex;
    width: 30px;
    position: absolute;
    top: 6px;
    padding-left: 10px;
  }

  @media (max-width: 480px) {
    display: flex;
    width: 30px;
    position: absolute;
    top: 10px;
    padding-left: 10px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding:10px;
  padding-left: 4px;
  border: 1px solid #ccc;


  &:focus {
    border-color: #1e90ff;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 36px;
    margin-top: 10px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding-left: 36px;
    padding-right: 0;
    margin-top: 10px;
    height: 36px;
  }

`
export const FilterCategories = styled.div`
display: flex;
flex-direction: row;
margin-top: 60px;
margin-bottom: 0px;


  label {
    margin-top: 0;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    font-weight: bold;
    padding-right: 10px;
  }

  select{
    margin-top: 3px;
    width: 60px;
    height: 18px;
    font-weight: bold;
    color: ${varColors.title};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 40px;

  label {
    display: flex;
    flex-direction: row;
    font-size: 18px;
    font-weight: bold;
    padding-right: 10px;
  }

  select{
    margin-top: 3px;
    width: 60px;
    height: 18px;
    font-weight: bold;
    color: ${varColors.title};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
}
`
//cards
export const Filters = styled.div`
  margin-top: 10px;
  display: flex; /* Certifique-se de que o flex esteja inicialmente configurado */
  flex-direction: column;
  border: 2px dotted ${varColors.grey};
  gap: 20px;
  width: 100%;
  padding: 30px;

    h2 {
      padding-bottom:0;
      display: flex;
      flex-direction: row;
      font-size: 20px;
      gap: 170px;
    }


    @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    margin-top: 20px;
    padding-bottom: 20px;

    h2 {
      display: none;
    }

    .all {
      grid-column: span 2;
    }
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 10px;
    margin-top: 10px;
    gap: 6px;

    h2 {
      display: none;
    }

      option{

      .all {
        grid-column: 2;
      }

      .family {
        grid-column: 2;
      }

      .friend {
        grid-column: 2;
        grid-row: 8;
      }

      .business {
        grid-column: 1;
        grid-row: 2;
      }

      .others {
        grid-column: 1;
        grid-row: 3;
      }
    }
  }
`

