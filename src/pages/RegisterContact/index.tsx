import SideBar from '../../containers/SideBar'
import FormContact from '../../containers/Form'

// Se o componente não receber props, não há necessidade de tipagem
const Register = () => {
  return (
    <>
      <SideBar showFilters={false} />
      <FormContact />
    </>
  )
}

export default Register
