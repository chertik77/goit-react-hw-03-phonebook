import { createSlice, nanoid } from '@reduxjs/toolkit'
import { addNewUser, deleteContactById, fetchContacts } from './operations'

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
    }
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
    builder.addCase(addNewUser.pending, state => {
      state.isLoading = true
    })
    builder.addCase(addNewUser.fulfilled, (state, action) => {
      console.log(action)
      state.isLoading = false
      state.error = null
      state.items.unshift(action.payload)
    })
    builder.addCase(addNewUser.rejected, state => {
      state.isLoading = false
      state.error = true
    })
    builder.addCase(deleteContactById.fulfilled, (state, action) => {
      const index = state.items.findIndex(contact => contact.id === action.payload)
      state.items.splice(index, 1)
    })
  }
})

export const contactReducer = contactsSlice.reducer
export const { newUser, deleteUser, filterContacts } = contactsSlice.actions
