import { createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL = 'https://65493a3ddd8ebcd4ab245da7.mockapi.io/api'
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts')
  return response.data
})

export const deleteContactById = createAsyncThunk('contacts/deleteContact', async id => {
  const response = await axios.delete(`/contacts/${id}`)
  return response.data.id
})
console.log(fetchContacts())

export const addNewUser = createAsyncThunk('contacts/addContact', async userData => {
  const response = await axios.post('/contacts', {
    name: userData.name,
    phone: userData.number,
    id: nanoid()
  })
  return response.data
})
