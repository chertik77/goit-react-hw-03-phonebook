import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://65493a3ddd8ebcd4ab245da7.mockapi.io/api'

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contactss')
  return response.data
})
