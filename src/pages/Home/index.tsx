import SideBar from '../../containers/SideBar'
import ContactList from '../../containers/ContactList'
import AddButton from '../../components/AddButton'

const Home = () => (
  <>
    <SideBar showFilters />
    <ContactList />
    <AddButton />
  </>
)
export default Home //exportar para App.tsx
