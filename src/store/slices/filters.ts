import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category as EnumCategory } from '../../enums/Contacts/enumsContacts'
import { ContactModel } from '../../components/Contact'

// Supondo que você tenha uma referência ao estado inicial dos contatos
type FilterState = {
  term: string
  criterion: string
  selectedCategory: EnumCategory | null
}

const initialState: FilterState = {
  term: '',
  criterion: 'all',
  selectedCategory: null
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter(
      state,
      action: PayloadAction<{ criterion: string; term: string }>
    ) {
      const { criterion, term } = action.payload
      state.criterion = criterion
      state.term = term
    },
    selectCategory(state, action: PayloadAction<EnumCategory | null>) {
      state.selectedCategory = action.payload
    },
    resetFilter(state) {
      state.term = ''
      state.criterion = 'all'
      state.selectedCategory = null
    }
  }
})

export const { changeFilter, selectCategory, resetFilter } = filterSlice.actions

// Use um parâmetro do estado que referencia os contatos
export const selectFilteredContacts = (
  state: { contacts: { items: ContactModel[] }; filter: FilterState }
) => {
  const { term, criterion, selectedCategory } = state.filter
  const contacts = state.contacts.items // Acesse a lista de contatos a partir do estado

  return contacts.filter(contact => {
    const termMatch = term ? contact.name.toLowerCase().startsWith(term.toLowerCase()) : true
    const criterionMatch = criterion === 'all' || contact.category === criterion
    const categoryMatch = selectedCategory ? contact.category === selectedCategory : true // Adiciona verificação para categoria selecionada
    return termMatch && criterionMatch && categoryMatch
  })
}

export default filterSlice.reducer
