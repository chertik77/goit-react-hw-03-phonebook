import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      state = action.payload
      return state
    }
  }
})

// const visibleItems = () =>
//   contacts.filter(
//     ({ name, number }) =>
//       name.toLowerCase().includes(filter.toLowerCase()) || number.split('-').join('').includes(filter)
//   )

export const filterReducer = filterSlice.reducer
export const { changeFilter } = filterSlice.actions
