import { FormEvent, useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Field, SaveButton } from '../../styles' // Adicione ReturnButton aqui
import {
  MainContainerForm,
  ContainerForm,
  Form,
  Options,
  ReturnButton,
  Option,
  TitleForm,
  TextInputs,
  ParentContainer,
  Asterisk,
  IconContainer,
  Icon,
  PhoneDiv,
  InputContainer,
  InputContainerPhone
} from './styles'
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
    ddi: '',
    ddd: '',
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

  const validatePhone = (ddd: string, phone: string): boolean => {
    const dddRegex = /^\d{2}$/ // DDD deve ter 2 dígitos
    const phoneRegex = /^\d{8,9}$/ // Telefone deve ter 8 ou 9 dígitos
    return dddRegex.test(ddd) && phoneRegex.test(phone)
  }

  const resetForm = () => {
    setContactData({
      name: '',
      email: '',
      ddi: '',
      ddd: '',
      phone: '',
      category: enums.Category.ALL
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setErrorMessage(null)
    setSuccessMessage(null)

    if (validatePhone(contactData.ddd, contactData.phone)) {
      try {
        const sanitizedContactData = {
          name: contactData.name ?? '',
          email: contactData.email ?? '',
          ddi: contactData.ddi ?? '',
          ddd: contactData.ddd ?? '',
          phone: contactData.phone ?? '',
          category: contactData.category ?? enums.Category.ALL
        }
        await addContact(sanitizedContactData).unwrap()
        dispatch(register(sanitizedContactData))

        resetForm()
        setSuccessMessage('Contact registered successfully!')

        // Redireciona para a lista de contatos após o registro
        navigate('/')
      } catch (err) {
        const error = err as FetchBaseQueryError
        setErrorMessage('Failed to add contact.')
        console.error('Error details:', error)
      }
    } else {
      setErrorMessage('Invalid phone number.')
    }
  }

  const handleReturn = () => {
    navigate('/') // Redireciona para a página inicial
  }

  return (
    <MainContainerForm>
      <ParentContainer>
        <ReturnButton type="button" onClick={handleReturn}>
          <img src="/icons/back.png" alt="return icon" />
          Return
        </ReturnButton>
        <ContainerForm>
          <IconContainer>
            <Icon src="/icons/add_black.png" alt="Add contact icon" />
          </IconContainer>
          <TitleForm>Create New Contact</TitleForm>
          <Form onSubmit={handleSubmit}>
            <TextInputs>
              <label>
                Name<Asterisk>*</Asterisk>
              </label>
            </TextInputs>
            <Field
              name="name"
              value={contactData.name}
              onChange={handleChange}
              type="text"
              placeholder="contact Name"
              required
            />
            <TextInputs>Email</TextInputs>
            <Field
              name="email"
              value={contactData.email}
              onChange={handleChange}
              type="email"
              placeholder="example@example.com"
            />

            <PhoneDiv>
              <TextInputs>
                <label>
                  Phone<Asterisk>*</Asterisk>
                </label>
              </TextInputs>
              <InputContainer>
                <label htmlFor="ddi">country</label>
                <input
                  name="ddi"
                  id="ddi"
                  value={contactData.ddi}
                  onChange={handleChange}
                  type="phone"
                  placeholder="optional"
                  required
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="ddd">area</label>
                <input
                  name="ddd"
                  id="ddd"
                  value={contactData.ddd}
                  onChange={handleChange}
                  type="tel"
                  placeholder="00"
                  required
                />
              </InputContainer>
              <InputContainerPhone>
                <label htmlFor="phone">phone</label>
                <input
                  name="phone"
                  id="phone"
                  value={contactData.phone}
                  onChange={handleChange}
                  type="phone"
                  placeholder="00000-0000"
                  required
                />
              </InputContainerPhone>
            </PhoneDiv>

            <Options>
              <p>Category: </p>
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
        </ContainerForm>
      </ParentContainer>
    </MainContainerForm>
  )
}

export default ContactForm
