import { FaPhone, FaEnvelope, FaUser } from 'react-icons/fa'
import { useState, ChangeEvent, useCallback, useEffect } from 'react'
import * as S from './styles'
import { Button, SaveButton } from '../../styles'
import * as enums from '../../enums/Contacts/enumsContacts'
import { Category as EnumCategory } from '../../enums/Contacts/enumsContacts'

export type ContactModel = {
  id: string
  name: string
  email?: string
  ddi?: string
  ddd: string
  phone: string
  category: enums.Category
}
export type Category = 'family' | 'friends' | 'work' | 'other';

const categories = Object.values(EnumCategory)

type Props = ContactModel & {
  onEdit: (updatedContact: ContactModel) => void
  onDelete: (id: string) => void
}

const Contact = ({
  name,
  email,
  ddi,
  ddd,
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
    ddi,
    ddd,
    phone,
    category
  })

  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (isEditing) {
      setEditFields({ name, email, phone, ddi, ddd, category })
      setErrorMessage('')
    }
  }, [isEditing, name, email, ddi, ddd, phone, category])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setEditFields((prev) => ({ ...prev, [name]: value }))
    setErrorMessage('')
  }

  const cancelEdit = useCallback(() => {
    setIsEditing(false)
    setEditFields({ name, email, phone, ddi, ddd, category })
  }, [name, email, phone, ddi, ddd, category])

  const handleFormSubmit = useCallback(() => {
    if (!editFields.name || !editFields.email || !editFields.phone) {
      setErrorMessage('Please fill in all required fields')
      return
    }

    onEdit({ ...editFields, id })
    setIsEditing(false)
  }, [editFields, id, onEdit])

  const handleDelete = useCallback(() => {
    onDelete(id)
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
              placeholder="Name"
              aria-label="Contact name"
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
              aria-label="Contact Email"
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
              placeholder="Phone"
              aria-label="Phone"
              required
            />
          </S.EditField>
          <S.EditField>
            <label>category: </label>
            <select
              name="category"
              value={editFields.category}
              onChange={handleChange}
              aria-label="category contact"
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
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <S.CancelRemoveButton onClick={handleDelete}>
            Remove
          </S.CancelRemoveButton>
        </>
      )}
      {isEditing && (
        <>
          <SaveButton onClick={handleFormSubmit}>Save</SaveButton>
          <S.CancelRemoveButton onClick={cancelEdit}>
            Cancel
          </S.CancelRemoveButton>
        </>
      )}
    </S.Card>
  )
}

export default Contact
