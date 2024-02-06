import { configureStore } from '@reduxjs/toolkit'
import departmentReducer from './Slice'

export default configureStore({
  reducer: {
    department : departmentReducer
  },
})