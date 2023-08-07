import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload
      state.errorMessage = null
    },
    userError: (state, action) => {
      state.currentUser = null
      state.errorMessage = action.payload
    },
    clearUser: (state, action) => {
      state.currentUser = null
      state.errorMessage = null
    }
  },
})

export default userSlice.reducer;

export const {setUser, userError, clearUser} = userSlice.actions;
