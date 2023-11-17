import { createSlice } from '@reduxjs/toolkit'
import { addNewUser, deleteContactById, fetchContacts } from './operations'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (_state, action) => action.payload)
    builder.addCase(addNewUser.fulfilled, (state, action) => [action.payload, ...state])
    builder.addCase(deleteContactById.fulfilled, (state, action) =>
      state.filter(contact => contact.id !== action.payload.id)
    )
  }
})

export const contactReducer = contactsSlice.reducer
