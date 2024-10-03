import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filters'
import contactsReducer from './slices/contact'
import { contactsApi } from '../services/api'

const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export default store
