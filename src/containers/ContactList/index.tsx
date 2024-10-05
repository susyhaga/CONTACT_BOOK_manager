import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Contact from '../../components/Contact'
import { MainContainer } from '../../styles'
import { RootState } from '../../store'
import { ContactModel } from '../../components/Contact'
import { saveContactsToLocalStorage } from '../../helpers/localStorage'
import { Alphabet, ContainerList, ContactBook } from './styles'
import addContactIcon from '../../icons/contact.png'
import { edit, remove } from '../../store/slices/contact'

const ContactList = () => {
  const dispatch = useDispatch()

  // Selecionar os contatos do estado Redux
  const items = useSelector((state: RootState) => state.contacts.items)
  const { term, criterion } = useSelector((state: RootState) => state.filter)

  const filtrarContatos = () => {
    return items.filter((item: ContactModel) => {
      const termoMatch = term
        ? item.name.toLowerCase().startsWith(term.toLowerCase())
        : true

      const criterioMatch = criterion === 'all' || item.category === criterion

      return termoMatch && criterioMatch
    })
  }

  const contatosFiltrados = filtrarContatos()

  useEffect(() => {
    saveContactsToLocalStorage(items)
  }, [items]) // Salvar no localStorage sempre que os itens mudarem

  const handleEdit = (updatedContact: ContactModel) => {
    dispatch(edit(updatedContact)) // Usar a action edit do slice
  }

  const handleDelete = (id: string) => {
    dispatch(remove(id)) // Usar a action remove do slice
  }

  if (!items.length) return <div>Loading...</div> // Alterar a mensagem para quando não houver contatos

  return (
    <ContainerList>
      <MainContainer>
        <ContactBook>
          <img src={addContactIcon} alt="Add Contact" />
          <h1>Phone Book</h1>
        </ContactBook>
        <ul>
          {contatosFiltrados.map((t: ContactModel) => (
            <li key={t.id}>
              <Contact
                id={t.id}
                name={t.name}
                email={t.email}
                phone={t.phone}
                ddd={t.ddd}
                category={t.category}
                onEdit={handleEdit}
                onDelete={() => handleDelete(t.id.toString())}
              />
            </li>
          ))}
        </ul>
      </MainContainer>
      <Alphabet>
        <ul>
          {Array.from(Array(26)).map((_, index) => (
            <li key={index}>{String.fromCharCode(65 + index)}</li> // A-Z
          ))}
        </ul>
      </Alphabet>
    </ContainerList>
  )
}

export default ContactList
