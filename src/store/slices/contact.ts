import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { ContactModel } from '../../components/Contact'
import { saveContactsToLocalStorage } from '../../helpers/localStorage'

type ContactsState = {
  selectedCategory: null
  items: ContactModel[]
  loading: boolean
  error: string | null // Avaliar se realmente é necessário
  searchQuery: string
}

const initialState: ContactsState = {
  selectedCategory: null,
  items: [],
  loading: false,
  error: null, // Avaliar uso
  searchQuery: ''
}

// Função assíncrona para buscar contatos da API
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:4000/contacts')
      if (!response.ok) {
        throw new Error('Erro ao carregar contatos.')
      }
      return await response.json()
    } catch (error) {
      // Melhorar o manuseio de erros
      return rejectWithValue(
        error instanceof Error ? error.message : 'Erro desconhecido.'
      )
    }
  }
)

// Validação de e-mail e telefone
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePhone = (phone: string) => {
  const phoneRegex = /^\d{10,11}$/
  return phoneRegex.test(phone)
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<null>) {
      state.selectedCategory = action.payload
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
      saveContactsToLocalStorage(state.items)
    },
    edit: (state, action: PayloadAction<ContactModel>) => {
      const indexOfContact = state.items.findIndex(
        (contact) => contact.id === action.payload.id
      )
      if (indexOfContact >= 0) {
        state.items[indexOfContact] = {
          ...state.items[indexOfContact],
          ...action.payload
        }
        saveContactsToLocalStorage(state.items)
      }
    },
    register: (state, action: PayloadAction<Omit<ContactModel, 'id'>>) => {
      const { name, email, phone } = action.payload

      // Verifica se o contato já existe
      const contactExists = state.items.some(
        (contact) =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.email.toLowerCase() === email.toLowerCase() ||
          contact.phone === phone
      )

      if (contactExists) {
        console.error('Contato já existe:', name)
        // Retornar um erro pode ser uma opção aqui, dependendo de como você deseja lidar com isso
        return // Saia da função se o contato já existir
      }

      // Validação de e-mail e telefone
      if (!validateEmail(email)) {
        console.error('E-mail inválido:', email)
        return // Saia da função se o e-mail for inválido
      }

      if (!validatePhone(phone)) {
        console.error('Telefone inválido:', phone)
        return // Saia da função se o telefone for inválido
      }

      // Gera um novo ID único
      const newId =
        state.items.length > 0
          ? Math.max(...state.items.map((c) => c.id)) + 1
          : 1

      // Cria o novo contato
      const newContact: ContactModel = {
        ...action.payload,
        id: newId
      }
      // Adiciona o novo contato ao estado
      state.items.push(newContact)
      saveContactsToLocalStorage(state.items) // Salva no localStorage
    },
    search: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true
        state.error = null // Reseta o erro ao iniciar a busca
      })
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<ContactModel[]>) => {
          state.loading = false
          state.items = action.payload
        }
      )
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string // Mensagem de erro da API
      })
  }
})

export const { setSelectedCategory, search, edit, remove, register } =
  contactsSlice.actions
export default contactsSlice.reducer
