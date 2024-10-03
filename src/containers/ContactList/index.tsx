import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  useGetContactsQuery,
  useDeleteContactMutation,
  useUpdateContactMutation
} from '../../services/api'
import Contact from '../../components/Contact'
import { MainContainer, Title } from '../../styles'
import { RootState } from '../../store'
import { ContactModel } from '../../components/Contact'
import { saveContactsToLocalStorage } from '../../helpers/localStorage'

const ContactList = () => {
  const {
    data: items = [],
    isLoading,
    isError,
    refetch
  } = useGetContactsQuery()

  const [deleteContact] = useDeleteContactMutation()
  const [updateContact] = useUpdateContactMutation()

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
  const mensagem = `${contatosFiltrados.length} contato(s) encontrado(s)`

  useEffect(() => {
    if (!isLoading && !isError) {
      saveContactsToLocalStorage(items)
    }
  }, [isLoading, isError, items])

  useEffect(() => {
    // Refetch a lista de contatos sempre que um novo contato for adicionado
    refetch()
  }, [items, refetch]) // Adicionando refetch como dependência

  const handleRemove = async (id: number) => {
    await deleteContact(id).unwrap()
    refetch()
  }

  const handleEdit = async (updatedContact: ContactModel) => {
    await updateContact({ id: updatedContact.id, updatedContact }).unwrap()
    refetch()
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Erro ao carregar os contatos</div>

  return (
    <MainContainer>
      <Title as={'p'}>{mensagem}</Title>
      <ul>
        {contatosFiltrados.map((t: ContactModel) => (
          <li key={t.id}>
            <Contact
              id={t.id}
              name={t.name}
              email={t.email}
              phone={t.phone}
              category={t.category}
              onRemove={() => handleRemove(t.id)}
              onEdit={handleEdit}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ContactList
