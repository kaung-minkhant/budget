import {all, call} from 'redux-saga/effects'
import { userSagas } from './users/users.sagas'
import { budgetSagas } from './budget/budget.sagas'

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(budgetSagas),
  ])
};
