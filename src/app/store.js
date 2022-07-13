import { configureStore } from '@reduxjs/toolkit'
import addFlagReducer from '../feature/addFlagSlice'

export default configureStore({
  reducer: {
    addFlag: addFlagReducer
  }
})