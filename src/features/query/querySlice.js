import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.value = action.payload;
    }
  },
})

export const { setQuery } = querySlice.actions

export default querySlice.reducer