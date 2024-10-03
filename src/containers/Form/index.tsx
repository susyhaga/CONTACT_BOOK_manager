import { FormEvent, useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Field, SaveButton, MainContainer, Title } from '../../styles'
import { Form, Options, Option } from './styles'
import * as enums from '../../enums/Contacts/enumsContacts'
import { ContactModel } from '../../components/Contact'
import { useAddContactMutation } from '../../services/api'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { register } from '../../store/slices/contact'

const ContactForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [addContact, { isLoading, isError }] = useAddContactMutation()
  const [contactData, setContactData] = useState<Omit<ContactModel, 'id'>>({
    name: '',
    email: '',
    phone: '',
    category: enums.Category.ALL
  })

  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setContactData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setErrorMessage(null)
    setSuccessMessage(null)

    // Validação de e-mail e telefone
    if (validateEmail(contactData.email) && validatePhone(contactData.phone)) {
      try {
        await addContact(contactData).unwrap()
        dispatch(register(contactData))

        resetForm()
        setSuccessMessage('Contact registered successfully!')

        // Redireciona para a lista de contatos após o registro
        navigate('/')
      } catch (err) {
        const error = err as FetchBaseQueryError
        setErrorMessage('Failed to add contact.')
        console.error('Error details:', error) // Para debugar
      }
    } else {
      setErrorMessage('Invalid contact data.')
    }
  }

  const resetForm = () => {
    setContactData({
      name: '',
      email: '',
      phone: '',
      category: enums.Category.ALL
    })
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{10,11}$/
    return phoneRegex.test(phone)
  }

  return (
    <MainContainer>
      <Title>New Contact</Title>
      <Form onSubmit={handleSubmit}>
        <Field
          name="name"
          value={contactData.name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
          required
        />
        <Field
          name="email"
          value={contactData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          required
        />
        <Field
          name="phone"
          value={contactData.phone}
          onChange={handleChange}
          type="tel"
          placeholder="Phone"
          required
        />
        <Options>
          <p>Category</p>
          {Object.values(enums.Category)
            .filter((categoryValue) => categoryValue !== enums.Category.ALL) // Excluir 'ALL'
            .map((categoryValue) => (
              <Option key={categoryValue}>
                <input
                  value={categoryValue}
                  name="category"
                  type="radio"
                  onChange={handleChange}
                  id={categoryValue}
                  checked={contactData.category === categoryValue}
                />
                <label htmlFor={categoryValue}>{categoryValue}</label>
              </Option>
            ))}
        </Options>
        <SaveButton type="submit" disabled={isLoading}>
          Register
        </SaveButton>
      </Form>
      {isLoading && <p>Loading...</p>}
      {isError && <p style={{ color: 'red' }}>An error occurred.</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </MainContainer>
  )
}

export default ContactForm
