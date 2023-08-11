import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState: INITIAL_STATE,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload
      state.errorMessage = null
    },
    signInError: (state, action) => {
      state.currentUser = null
      state.errorMessage = action.payload
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

export const {signInSuccess, signInError, userError, clearUser} = userSlice.actions;
