import { takeLatest, call, put, all } from 'redux-saga/effects'
import { userSagaActions } from './users.saga.actions'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth } from '../../firebase/firebase.config'
import { checkAndCreateUserDocument, checkUser, retrieveUser } from '../../firebase/firebase.utils'
import { clearUser, signInError, signInSuccess, userError } from './users.slice'

export function* onSignUpAsync({ payload: { email, password } }) {
  try {
    const userAuthObj = yield createUserWithEmailAndPassword(auth, email, password)
    if (!userAuthObj) return 
    const userObj = userAuthObj.user
    yield checkAndCreateUserDocument(userObj)
    const userData = yield retrieveUser(userObj)
    yield put(signInSuccess(userData))
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('Email Already In Use!')
    }
  }
}

export function* onSignInAsync({ payload: { email, password } }) {
  try {
    const userAuthObj = yield signInWithEmailAndPassword(auth, email, password)
    const userObj = userAuthObj.user
    const userData = yield retrieveUser(userObj)
    yield put(signInSuccess(userData))
  } catch (error) {
    yield put(userError(error))
    yield put(signInError(error.message))
  }
}

export function* onLogOutAsync() {
  yield signOut(auth)
  yield put(clearUser())
  yield console.log("Firing Log Out Process")
}

export function* onCheckUserAsync() {
  try {
    const userData = yield checkUser()
    if (!userData) return
    yield put(signInSuccess(userData))
  } catch (error) {
    console.log(error)
    yield put(signInError(error.message))
  }
}

export function* onSignUpStart() {
  yield takeLatest(userSagaActions.signUpStart, onSignUpAsync)
}

export function* onSignInStart() {
  yield takeLatest(userSagaActions.signInStart, onSignInAsync)
}

export function* onLogOutStart() {
  yield takeLatest(userSagaActions.logOutStart, onLogOutAsync)
}

export function* onCheckUserStart() {
  yield takeLatest(userSagaActions.checkUser, onCheckUserAsync)
}

export function* userSagas() {
  yield all([
    call(onSignUpStart),
    call(onSignInStart),
    call(onLogOutStart),
    call(onCheckUserStart),
  ])
}


