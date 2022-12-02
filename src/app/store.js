import { configureStore } from '@reduxjs/toolkit'
import queryReducer from '../features/query/querySlice'
import catsReducer from '../features/cats/catsSlice'

export const store = configureStore({
  reducer: {
    query: queryReducer,
    cats: catsReducer
  },
})
