import { nanoid } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://65493a3ddd8ebcd4ab245da7.mockapi.io/api/' }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({ query: () => 'contacts', providesTags: ['Contacts'] }),
    deleteContactById: builder.mutation({
      query: id => ({ url: `contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts']
    }),
    addNewUser: builder.mutation({
      query: ({ name, number }) => ({
        url: 'contacts',
        method: 'POST',
        body: { name, number, id: nanoid() }
      }),
      invalidatesTags: ['Contacts']
    })
  })
})

export const { useGetContactsQuery, useDeleteContactByIdMutation, useAddNewUserMutation } = contactsApi
