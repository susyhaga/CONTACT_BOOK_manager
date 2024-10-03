import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  useGetContactsQuery,
  useUpdateContactMutation,
  useDeleteContactMutation
} from '../../services/api'
import Contact from '../../components/Contact'
import { MainContainer, ContactBook } from '../../styles'
import { RootState } from '../../store'
import { ContactModel } from '../../components/Contact'
import { saveContactsToLocalStorage } from '../../helpers/localStorage'
import { Alphabet, ContainerList } from './styles'

const ContactList = () => {
  const {
    data: items = [],
    isLoading,
    isError,
    refetch
  } = useGetContactsQuery()

  const [updateContact] = useUpdateContactMutation()
  const [deleteContact] = useDeleteContactMutation()

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
    if (!isLoading && !isError) {
      saveContactsToLocalStorage(items)
    }
  }, [isLoading, isError, items])

  useEffect(() => {
    refetch()
  }, [items, refetch])

  const handleEdit = async (updatedContact: ContactModel) => {
    await updateContact({
      id: updatedContact.id.toString(),
      updatedContact
    }).unwrap()
    refetch()
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteContact(id).unwrap()
      refetch()
    } catch (error) {
      console.error('Erro ao deletar o contato', error)
    }
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading contacts</div>

  return (
    <ContainerList>
      <MainContainer>
        <ContactBook>
          <img src="./icons/add_black.png" />
          <h1>Contacts Book</h1>
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
