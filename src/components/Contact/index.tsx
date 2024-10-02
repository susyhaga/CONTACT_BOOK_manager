import { FaPhone, FaEnvelope, FaUser } from 'react-icons/fa'
import { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remove, edit } from '../../store/slices/contact'
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

type Props = ContactModel

const Contact = ({ name, email, phone, id, category }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editFields, setEditFields] = useState({
    name,
    email,
    phone,
    category
  })

  const cancelEdit = () => {
    setIsEditing(false)
    setEditFields({ name, email, phone, category })
  }

  const handleSave = () => {
    // Validação simples antes de salvar
    if (!editFields.name || !editFields.email || !editFields.phone) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    dispatch(edit({ id, ...editFields }))
    setIsEditing(false)
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setEditFields((prev) => ({ ...prev, [name]: value }))
  }

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
          <S.CancelRemoveButton onClick={() => dispatch(remove(id))}>
            Deletar
          </S.CancelRemoveButton>
          <Button onClick={() => setIsEditing(true)}>Editar</Button>
        </>
      )}
      {isEditing && <SaveButton onClick={handleSave}>Salvar</SaveButton>}
      {isEditing && (
        <S.CancelRemoveButton onClick={cancelEdit}>
          Cancelar
        </S.CancelRemoveButton>
      )}
    </S.Card>
  )
}

export default Contact
