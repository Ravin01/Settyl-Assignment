import { createSlice } from '@reduxjs/toolkit'

export const DepartmentSlice = createSlice({
  name: 'department',
  initialState: {
    value : ''
  },
  reducers: {
    departmentFilter: (state, action) => {
       return action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { departmentFilter } = DepartmentSlice.actions

export default DepartmentSlice.reducer



