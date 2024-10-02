import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category as EnumCategory } from '../../enums/Contacts/enumsContacts'

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
export default filterSlice.reducer
