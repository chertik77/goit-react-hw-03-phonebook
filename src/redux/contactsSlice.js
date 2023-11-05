import { createSlice, nanoid } from '@reduxjs/toolkit'
import users from '~/Users/users.json'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: users,
  reducers: {
    newUser: {
      reducer: (state, { payload }) => [payload, ...state],
      prepare: (name, number) => ({ payload: { name, number, id: nanoid() } })
    },
    deleteUser: (state, { payload }) => state.filter(contact => contact.id !== payload)
  }
})

export const contactReducer = contactsSlice.reducer
export const { newUser, deleteUser, filterContacts } = contactsSlice.actions
