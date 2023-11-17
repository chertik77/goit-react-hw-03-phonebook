import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: { changeFilter: (_state, action) => (_state = action.payload) }
})

export const filterReducer = filterSlice.reducer
export const { changeFilter } = filterSlice.actions
