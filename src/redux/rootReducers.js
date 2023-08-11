import { combineReducers } from "redux";
import userReducer from './users/users.slice'
import budgetReducer from './budget/budget.slice'

export const rootReducer = combineReducers({
  user: userReducer,
  budget: budgetReducer,
});
