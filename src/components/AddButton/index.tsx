// src/components/AddContactComponent.tsx
import React from 'react'
import { useAddContactMutation } from '../../services/api'
import { ContactModel } from '../../components/Contact'
import { AddButton } from './styles'
import * as enums from '../../enums/Contacts/enumsContacts'
const AddContactComponent = () => {
  const [addContact] = useAddContactMutation()

  const handleAddContact = async () => {
    const newContact: Partial<ContactModel> = {
      name: 'New Service Contact',
      category: enums.Category.OTHERS
    }

    try {
      const result = await addContact(newContact).unwrap() // Chama a mutação
      console.log('Contato adicionado com sucesso:', result)
      // Aqui você pode fazer algo após adicionar o contato, como mostrar uma mensagem de sucesso
    } catch (error) {
      console.error('Erro ao adicionar contato:', error)
    }
  }

  return (
    <AddButton to="/criar_tarefa" onClick={handleAddContact}>
      {' '}
      + New Contact
    </AddButton>
  )
}

export default AddContactComponent
