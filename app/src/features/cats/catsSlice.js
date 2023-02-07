import { createSlice } from '@reduxjs/toolkit'
import { getCats } from '../../services/cats'

const initialState = {
  value: getCats(),
}

export const catSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    setCats: () => {
      
    }
  },
})

export const { setCats } = catSlice.actions

export default catSlice.reducer