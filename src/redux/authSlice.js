import { createSlice } from '@reduxjs/toolkit'
import { contactsApi } from './services'

const handleUserFullfilled = (state, action) => {
  state.isLoggedIn = true
  state.user = action.payload.user
  state.token = action.payload.token
}

const authSlice = createSlice({
  name: 'users',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false
  },
  extraReducers: builder => {
    builder
      .addMatcher(contactsApi.endpoints.createNewUser.matchFulfilled, handleUserFullfilled)
      .addMatcher(contactsApi.endpoints.login.matchFulfilled, handleUserFullfilled)
      .addMatcher(contactsApi.endpoints.currentUser.matchPending, state => {
        state.isRefreshing = true
      })
      .addMatcher(contactsApi.endpoints.currentUser.matchFulfilled, (state, action) => {
        state.user = action.payload
        state.isLoggedIn = true
        state.isRefreshing = false
      })
      .addMatcher(contactsApi.endpoints.currentUser.matchRejected, state => {
        state.isRefreshing = false
      })
      .addMatcher(contactsApi.endpoints.logout.matchFulfilled, state => {
        state.user = { name: null, email: null }
        state.isLoggedIn = false
        state.token = null
      })
  }
})

export const authReducer = authSlice.reducer
