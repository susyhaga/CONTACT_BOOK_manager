import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Field } from '../../styles'
import { SaveButton, MainContainer, Title } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../enums/Contacts/enumsContacts'
import { register } from '../../store/slices/contact'

const Form_Contact = () => {
  // Dispatch para atualizar a store
  const dispatch = useDispatch()

  // States e modificadores de nome, email e telefone
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // State e modificadores para salvar os valores de enums.Category
  const [category, setCategory] = useState(enums.Category.ALL)

  // Função para ADICIONAR um novo contato
  const cadastrarTarefa = (e: FormEvent) => {
    // Impede o comportamento padrão do formulário
    e.preventDefault()

    // Usar o dispatch para passar a action creator (cadastrar do slices / contatos)
    dispatch(
      register({
        name,
        email,
        phone,
        category
      })
    )

    // Limpar os campos após adicionar o contato
    setName('')
    setEmail('')
    setPhone('')
    setCategory(enums.Category.ALL) // Redefinindo para a categoria padrão
  }

  return (
    <MainContainer>
      <Title>New Contact</Title>
      <Form onSubmit={cadastrarTarefa}>
        <Field
          value={name} // Campo = componente estilizado no estilo global
          onChange={(e) => setName(e.target.value)} // Modificador do estado nome
          type="text"
          placeholder="Name"
        />

        <Field
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Modificador do estado email
          type="email"
          placeholder="Email"
        />

        <Field
          value={phone}
          onChange={(e) => setPhone(e.target.value)} // Modificador do estado telefone
          type="tel"
          placeholder="Phone"
        />

        <Opcoes>
          <p>Category</p>
          {Object.values(enums.Category).map((category) => (
            <Opcao key={category}>
              <input
                value={category}
                name="prioridade"
                type="radio"
                onChange={(e) => setCategory(e.target.value as enums.Category)} // Evento modificador
                id={category}
                defaultChecked={category === enums.Category.ALL}
              />
              <label htmlFor={category}>{category}</label>
            </Opcao>
          ))}
        </Opcoes>
        <SaveButton type="submit">Register</SaveButton>
      </Form>
    </MainContainer>
  )
}

export default Form_Contact
