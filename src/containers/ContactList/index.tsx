import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetContactsQuery, useAddContactMutation } from '../../services/api'
import Contact from '../../components/Contact'
import { MainContainer, Title } from '../../styles'
import { RootReducer } from '../../store'
import { ContactModel } from '../../components/Contact'
import { saveContactsToLocalStorage } from '../../helpers/localStorage'
import * as enums from '../../enums/Contacts/enumsContacts'

const ContactList = () => {
  const { data: items = [], isLoading, isError } = useGetContactsQuery()
  const { term, criterion } = useSelector((state: RootReducer) => state.filter)
  const [addContact] = useAddContactMutation()

  const categories = Object.values(enums.Category)

  const [newContact, setNewContact] = useState<ContactModel>({
    id: 0, // Defina o id conforme necessário
    name: '',
    email: '',
    phone: '',
    category: categories[0] // Defina uma categoria padrão aqui
  })

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

  const handleAddContact = async () => {
    try {
      await addContact(newContact).unwrap()
      // Limpar o formulário ou redefinir o estado conforme necessário
      setNewContact({
        id: 0,
        name: '',
        email: '',
        phone: '',
        category: categories[0]
      }) // Resetando o novo contato
    } catch (error) {
      console.error('Erro ao adicionar contato:', error)
    }
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Erro ao carregar os contatos</div>

  return (
    <MainContainer>
      <Title as={'p'}>{mensagem}</Title>
      <input
        type="text"
        placeholder="Nome"
        value={newContact.name}
        onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newContact.email}
        onChange={(e) =>
          setNewContact({ ...newContact, email: e.target.value })
        }
      />
      <input
        type="tel"
        placeholder="Telefone"
        value={newContact.phone}
        onChange={(e) =>
          setNewContact({ ...newContact, phone: e.target.value })
        }
      />
      <select
        value={newContact.category}
        onChange={(e) =>
          setNewContact({
            ...newContact,
            category: e.target.value as enums.Category
          })
        }
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={handleAddContact}>Adicionar Contato</button>
      <ul>
        {contatosFiltrados.map((t: ContactModel) => (
          <li key={t.id}>
            <Contact
              id={t.id}
              name={t.name}
              email={t.email}
              phone={t.phone}
              category={t.category}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ContactList
