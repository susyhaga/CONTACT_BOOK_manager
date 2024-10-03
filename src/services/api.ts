import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ContactModel } from '../components/Contact'

const baseUrl = 'http://localhost:4000/'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getContacts: builder.query<ContactModel[], void>({
      query: () => '/contacts'
    }),
    addContact: builder.mutation<ContactModel, Partial<ContactModel>>({
      query: (newContact) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          ...newContact,
          category: newContact.category || 'others'
        }
      })
    }),
    deleteContact: builder.mutation<void, number>({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE'
      })
    }),
    updateContact: builder.mutation<
      ContactModel,
      { id: number; updatedContact: Partial<ContactModel> }
    >({
      query: ({ id, updatedContact }) => ({
        url: `/contacts/${id}`,
        method: 'PUT',
        body: updatedContact
      })
    })
  })
})

export const {
  useGetContactsQuery,
  useAddContactMutation, // Use este nome
  useDeleteContactMutation,
  useUpdateContactMutation
} = contactsApi
