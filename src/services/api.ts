import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ContactModel } from '../components/Contact'

const baseUrl = 'http://192.168.0.57:3001/contacts'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getContacts: builder.query<ContactModel[], void>({
      query: () => '/contacts',
      transformResponse: (response: ContactModel[]) =>
        response.map(({ photo, ...rest }) => rest) // Remove a propriedade photo
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
    deleteContact: builder.mutation<void, string>({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE'
      })
    }),

    updateContact: builder.mutation<
      ContactModel,
      { id: string; updatedContact: Partial<ContactModel> }
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
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation
} = contactsApi
