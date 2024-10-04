import styled from 'styled-components'

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
  width: 424px;
  display: ${(props) => (props.show ? 'block' : 'none')};

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    overflow-y: scroll;
  }
`

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`

export const SearchIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 40px;
  border-radius: 4px;
  border: 1px solid #ccc;

  &:focus {
    border-color: #1e90ff;
    outline: none;
  }

  @media (max-width: 768px) {
    height: 38px;
  }

  @media (max-width: 480px) {
    height: 36px;
    padding: 10px 30px;
  }
`

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

export const Actions = styled.div`
  margin-top: 16px;

  input {
    width: 26vw;
    height: 40px;
    margin-bottom: 0px;

    @media (max-width: 768px) {
      width: 90%;
    }

    @media (max-width: 480px) {
      width: 100%;
      height: 36px;
    }
  }
`

export const FilterSection = styled.div`
  margin-bottom: 32px;

  label {
    font-weight: bold;
    margin-top: 0px;
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`

export const ContactList = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    margin-top: 12px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`
