// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyB6RJFn9hoSiut8lqFeloRHcBk7C0Kfmz8',

  authDomain: 'budget-21e63.firebaseapp.com',

  projectId: 'budget-21e63',

  storageBucket: 'budget-21e63.appspot.com',

  messagingSenderId: '371214326142',

  appId: '1:371214326142:web:48d1985e5d423434323b2f',
}

// Initialize Firebase

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
export const auth = getAuth(app);


