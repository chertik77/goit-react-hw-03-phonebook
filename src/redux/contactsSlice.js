import { createSlice, nanoid } from '@reduxjs/toolkit'
import { fetchContacts } from './operations'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  reducers: {
    newUser: {
      reducer: (state, { payload }) => [payload, ...state],
      prepare: (name, number) => ({ payload: { name, number, id: nanoid() } })
    },
    deleteUser: (state, { payload }) => state.filter(contact => contact.id !== payload)
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true
    })
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = null
      state.items = action.payload
    })
    builder.addCase(fetchContacts.rejected, state => {
      state.isLoading = false
      state.error = true
    })
  }
})

export const contactReducer = contactsSlice.reducer
export const { newUser, deleteUser, filterContacts } = contactsSlice.actions
