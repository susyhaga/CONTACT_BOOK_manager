import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContactModel } from '../../components/Contact'
import { getContactsFromLocalStorage, saveContactsToLocalStorage } from '../../helpers/localStorage'
import * as enums from '../../enums/Contacts/enumsContacts'

const generateContacts = (num: number): ContactModel[] => {
  const contacts: ContactModel[] = []
  const ddds = ['11', '21', '31', '41', '51', '61', '71', '81', '91']
  const categories = Object.values(enums.Category).filter(category => category !== enums.Category.ALL) as enums.Category[]

  for (let i = 1; i <= num; i++) {
    contacts.push({
      id: i.toString(),
      name: `Contact Name ${i}`,
      email: `example${i}@example.com`,
      phone: `12345678${i.toString().padStart(2, '0')}`,
      ddd: ddds[i % ddds.length],
      category: categories[Math.floor(Math.random() * categories.length)]
    })
  }
  return contacts
}

type ContactsState = {
  selectedCategory: string | null
  items: ContactModel[]
  loading: boolean
  error: string | null
  searchQuery: string
}

const initialState: ContactsState = {
  selectedCategory: null,
  items: getContactsFromLocalStorage() || generateContacts(400),
  loading: false,
  error: null,
  searchQuery: ''
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<string | null>) {
      state.selectedCategory = action.payload
    },
    remove(state, action: PayloadAction<string>) {
      state.items = state.items.filter(contact => contact.id !== action.payload)
      saveContactsToLocalStorage(state.items)
    },
    edit(state, action: PayloadAction<ContactModel>) {
      const indexOfContact = state.items.findIndex(contact => contact.id === action.payload.id)
      if (indexOfContact !== -1) {
        state.items[indexOfContact] = { ...state.items[indexOfContact], ...action.payload }
        saveContactsToLocalStorage(state.items)
      }
    },
    register(state, action: PayloadAction<Omit<ContactModel, 'id'>>) {
      const { name, email, phone, category } = action.payload
      const contactExists = state.items.some(contact =>
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
        id: state.items.length > 0 ? (Math.max(...state.items.map(c => Number(c.id))) + 1).toString() : '1',
        ddd: '11',
        category: category || undefined
      }

      state.items.push(newContact)
      saveContactsToLocalStorage(state.items)
    },
    search(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload
    }
  }
})

export const { setSelectedCategory, search, edit, remove, register } = contactsSlice.actions
export default contactsSlice.reducer
