import { FaPhone, FaEnvelope, FaUser } from 'react-icons/fa'
import { useState, ChangeEvent, useCallback, useEffect } from 'react'
import * as S from './styles'
import { Button, SaveButton } from '../../styles'
import * as enums from '../../enums/Contacts/enumsContacts'
import { Category as EnumCategory } from '../../enums/Contacts/enumsContacts'

export type ContactModel = {
  id: number
  name: string
  email: string
  phone: string
  category: enums.Category
}

const categories = Object.values(EnumCategory)

type Props = ContactModel & {
  onEdit: (updatedContact: ContactModel) => void
  onDelete: (id: number) => void
}

const Contact = ({
  name,
  email,
  phone,
  id,
  category,
  onEdit,
  onDelete
}: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editFields, setEditFields] = useState({
    name,
    email,
    phone,
    category
  })
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (isEditing) {
      setEditFields({ name, email, phone, category })
      setErrorMessage('')
    }
  }, [isEditing, name, email, phone, category])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setEditFields((prev) => ({ ...prev, [name]: value }))
    setErrorMessage('')
  }

  const cancelEdit = useCallback(() => {
    setIsEditing(false)
    setEditFields({ name, email, phone, category })
  }, [name, email, phone, category])

  const handleFormSubmit = useCallback(() => {
    if (!editFields.name || !editFields.email || !editFields.phone) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    onEdit({ ...editFields, id })
    setIsEditing(false)
  }, [editFields, id, onEdit])

  const handleDelete = useCallback(() => {
    onDelete(id) // Chamar a função de deletar passando o id do contato
  }, [id, onDelete])

  return (
    <S.Card>
      {isEditing ? (
        <>
          <S.EditField>
            <label>
              <FaUser aria-hidden="true" />
            </label>
            <input
              type="text"
              name="name"
              value={editFields.name}
              onChange={handleChange}
              placeholder="Nome"
              aria-label="Nome do contato"
              required
            />
          </S.EditField>
          <S.EditField>
            <label>
              <FaEnvelope aria-hidden="true" />
            </label>
            <input
              type="email"
              name="email"
              value={editFields.email}
              onChange={handleChange}
              placeholder="Email"
              aria-label="Email do contato"
              required
            />
          </S.EditField>
          <S.EditField>
            <label>
              <FaPhone aria-hidden="true" />
            </label>
            <input
              type="tel"
              name="phone"
              value={editFields.phone}
              onChange={handleChange}
              placeholder="Telefone"
              aria-label="Telefone do contato"
              required
            />
          </S.EditField>
          <S.EditField>
            <label>Categoria:</label>
            <select
              name="category"
              value={editFields.category}
              onChange={handleChange}
              aria-label="Categoria do contato"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </S.EditField>
          {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        </>
      ) : (
        <>
          <S.Title>
            {name}
            <S.Tag category={category} parameters="category">
              {category}
            </S.Tag>
          </S.Title>

          <S.Name>
            <S.Icon>
              <FaUser />
              {' : '}
            </S.Icon>
            {name}
          </S.Name>
          <S.Email>
            <S.Icon>
              <FaEnvelope />
              {' : '}
            </S.Icon>
            {email}
          </S.Email>
          <S.Phone>
            <S.Icon>
              <FaPhone />
              {' : '}
            </S.Icon>
            {phone}
          </S.Phone>
          <Button onClick={() => setIsEditing(true)}>Editar</Button>
          <S.CancelRemoveButton onClick={handleDelete}>
            Remover
          </S.CancelRemoveButton>
        </>
      )}
      {isEditing && (
        <>
          <SaveButton onClick={handleFormSubmit}>Salvar</SaveButton>
          <S.CancelRemoveButton onClick={cancelEdit}>
            Cancelar
          </S.CancelRemoveButton>
        </>
      )}
    </S.Card>
  )
}

export default Contact
