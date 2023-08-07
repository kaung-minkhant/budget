import { combineReducers } from "redux";
import userReducer from './users/users.slice'

export const rootReducer = combineReducers({
  user: userReducer,
});
