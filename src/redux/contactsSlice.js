import { createSlice } from '@reduxjs/toolkit'
import { addNewUser, deleteContactById, fetchContacts } from './operations'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
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
    builder.addCase(addNewUser.pending, state => {
      state.isLoading = true
    })
    builder.addCase(addNewUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = null
      state.items = [action.payload, ...state.items]
    })
    builder.addCase(addNewUser.rejected, state => {
      state.isLoading = false
      state.error = true
    })
    builder.addCase(deleteContactById.fulfilled, (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload)
    })
  }
})

export const contactReducer = contactsSlice.reducer
