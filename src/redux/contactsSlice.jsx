import { createSlice } from '@reduxjs/toolkit'
import users from '../Users/users.json'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: users,
  reducers: {
    newUser(state, action) {
      return [action.payload, ...state]
    },
    deleteUser(state, action) {
      return state.filter(contact => contact.id !== action.payload)
    }
  }
})

export const contactReducer = contactsSlice.reducer
export const { newUser, deleteUser } = contactsSlice.actions
