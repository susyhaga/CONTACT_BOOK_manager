import { configureStore } from '@reduxjs/toolkit'
import { contactsApi } from '../services/api'
import filterReducer from './slices/filters'
import contactsReducer from './slices/contact' // Verifique se o reducer está implementado

const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer, // Adicionando o reducer de contatos aqui
    [contactsApi.reducerPath]: contactsApi.reducer // Adicionando a API aqui
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware) // Adicionando o middleware
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
