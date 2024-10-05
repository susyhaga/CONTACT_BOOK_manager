import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filters';
import contactsReducer from './slices/contact';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
    // Removi a parte da API, pois você não está usando mais
    // [contactsApi.reducerPath]: contactsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware() // Não é necessário adicionar middleware da API
    // .concat(contactsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
