import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { ContactModel } from '../../components/Contact'
import { saveContactsToLocalStorage } from '../../helpers/localStorage'
import { contactsApi } from '../../services/api'

type ContactsState = {
  selectedCategory: string | null
  items: ContactModel[]
  loading: boolean
  error: string | null
  searchQuery: string
}

const initialState: ContactsState = {
  selectedCategory: null,
  items: [],
  loading: false,
  error: null,
  searchQuery: ''
}

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

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const validatePhone = (phone: string) => /^\d{10,11}$/.test(phone)

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

      if (!email || !validateEmail(email)) {
        console.error('Invalid email:', email)
        return
      }

      if (!validatePhone(phone)) {
        console.error('Invalid phone:', phone)
        return
      }

      const newContact: ContactModel = {
        ...action.payload,
        id:
          state.items.length > 0
            ? (Math.max(...state.items.map((c) => Number(c.id))) + 1).toString()
            : '1'
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
      })
      .addMatcher(
        contactsApi.endpoints.addContact.matchFulfilled,
        (state, action) => {
          state.items.push(action.payload)
        }
      )
  }
})

export const {
  setSelectedCategory,
  search,
  edit,
  remove,
  register,
  loadContacts
} = contactsSlice.actions

export default contactsSlice.reducer
