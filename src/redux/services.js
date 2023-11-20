import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    signup: builder.mutation({ query: data => ({ url: 'users/signup', method: 'POST', body: data }) }),
    login: builder.mutation({ query: data => ({ url: 'users/login', method: 'POST', body: data }) }),
    currentUser: builder.query({ query: () => 'users/current' }),
    logout: builder.mutation({ query: () => ({ url: 'users/logout', method: 'POST' }) }),

    getContacts: builder.query({ query: () => 'contacts', providesTags: ['Contacts'] }),
    deleteContactById: builder.mutation({
      query: id => ({ url: `contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts']
    }),
    addNewContact: builder.mutation({
      query: data => ({ url: 'contacts', method: 'POST', body: data }),
      invalidatesTags: ['Contacts']
    })
  })
})

export const {
  useGetContactsQuery,
  useDeleteContactByIdMutation,
  useAddNewContactMutation,
  useSignupMutation,
  useLoginMutation,
  useCurrentUserQuery,
  useLogoutMutation
} = contactsApi
