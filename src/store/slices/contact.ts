import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { ContactModel } from '../../components/Contact'
import { saveContactsToLocalStorage } from '../../helpers/localStorage'

// Enum para categorias
export enum Category {
  BUSINESS = 'work',
  FRIEND = 'friends',
  FAMILY = 'family',
  OTHERS = 'others',
  ALL = 'all'
}

// Função para gerar contatos fictícios
const generateContacts = (num: number): ContactModel[] => {
  const contacts: ContactModel[] = []
  const categories = Object.values(Category)
  const ddds = ['11', '21', '31', '41', '51', '61', '71', '81', '91']

  for (let i = 1; i <= num; i++) {
    contacts.push({
      id: i.toString(),
      name: `Contato ${i}`,
      email: `contato${i}@example.com`,
      phone: `12345678${i.toString().padStart(2, '0')}`,
      ddd: ddds[i % ddds.length],
      category: categories[i % categories.length]
    })
  }
  return contacts
}

type ContactsState = {
  selectedCategory: string | null
  items: ContactModel[]
  additionalContacts: ContactModel[]
  loading: boolean
  error: string | null
  searchQuery: string
}

const initialState: ContactsState = {
  selectedCategory: null,
  items: generateContacts(400),
  additionalContacts: [],
  loading: false,
  error: null,
  searchQuery: ''
}

// Ação para buscar contatos do db.json
export const fetchContacts = createAsyncThunk<
  ContactModel[],
  void,
  { rejectValue: string }
>('contacts/fetchContacts', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('http://localhost:4000/contacts')
    if (!response.ok) {
      throw new Error('Failed to load contacts.')
    }
    return await response.json()
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'Unknown error.'
    )
  }
})

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<string | null>) {
      state.selectedCategory = action.payload
    },
    remove: (state, action: PayloadAction<string>) => {
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
      const contactExists = state.items.some(
        (contact) =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.email?.toLowerCase() === email?.toLowerCase() ||
          contact.phone === phone
      )

      if (contactExists) {
        console.error('Contact already exists:', name)
        return
      }

      const newContact: ContactModel = {
        ...action.payload,
        id: state.items.length > 0
          ? (Math.max(...state.items.map((c) => Number(c.id))) + 1).toString()
          : '1',
        ddd: '11',
        category: action.payload.category
      }

      state.items.push(newContact)
      saveContactsToLocalStorage(state.items)
    },
    loadContacts: (state, action: PayloadAction<ContactModel[]>) => {
      state.items = action.payload
    },
    search: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true
        state.error = null
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
        state.error = action.payload as string
        // Se a API falhar, mantém os contatos gerados automaticamente
        state.items = generateContacts(300) // Reverte para contatos gerados
      })
  }
})

export const {
  setSelectedCategory,
  search,
  edit,
  remove,
  register,
  loadContacts,
} = contactsSlice.actions

export default contactsSlice.reducer
