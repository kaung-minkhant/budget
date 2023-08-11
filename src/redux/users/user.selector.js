import { createSelector } from "@reduxjs/toolkit";

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
)

export const selectBudgetID = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.budget_id
)