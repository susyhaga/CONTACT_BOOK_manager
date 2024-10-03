import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  useGetContactsQuery,
  useUpdateContactMutation,
  useDeleteContactMutation // Importar a mutação de deletar contato
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

  const [updateContact] = useUpdateContactMutation()
  const [deleteContact] = useDeleteContactMutation() // Adicionar a mutação de deletar

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
  const mensagem = `${contatosFiltrados.length} contact(s) found`

  useEffect(() => {
    if (!isLoading && !isError) {
      saveContactsToLocalStorage(items)
    }
  }, [isLoading, isError, items])

  useEffect(() => {
    refetch()
  }, [items, refetch])

  const handleEdit = async (updatedContact: ContactModel) => {
    await updateContact({ id: updatedContact.id, updatedContact }).unwrap()
    refetch()
  }

  const handleDelete = async (id: number) => {
    try {
      await deleteContact(id).unwrap() // Chamar a mutação de deletar
      refetch() // Atualizar a lista após deletar
    } catch (error) {
      console.error('Erro ao deletar o contato', error)
    }
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading contacts</div>

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
              onEdit={handleEdit}
              onDelete={() => handleDelete(t.id)} // Passa o id para o handleDelete
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ContactList
