import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import users from '~/Users/users.json'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: users,
  reducers: {
    newUser: {
      reducer(state, action) {
        return [action.payload, ...state]
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid()
          }
        }
      }
    },
    deleteUser(state, action) {
      return state.filter(contact => contact.id !== action.payload)
    }
  }
})

export const contactReducer = contactsSlice.reducer
export const { newUser, deleteUser, filterContacts } = contactsSlice.actions
