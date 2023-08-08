import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase.config";


export const checkAndCreateUserDocument = async (userObj) => {
  const uid = userObj.uid
  const userRef = doc(db, `users/${uid}`)
  const userSnap = await getDoc(userRef)
  if (!userSnap.exists()) {
    const date = new Date()
    const ksuidRes = await fetch('https://ksuid-rest.onrender.com/once')
    const ksuid = await ksuidRes.text()
    const userWriteObj = {
      uid: uid,
      email: userObj.email,
      createdAt: date,
      budget_id: ksuid,
    }
    await setDoc(userRef, userWriteObj)
  }
  return userRef
}

export const retrieveUser = async (userObj) => {
  const uid = userObj.uid
  const userRef = doc(db, `users/${uid}`)
  const userSnap = await getDoc(userRef)
  return userSnap.data()
}

export const checkUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, async (userObj) => {
      unsubscribe()
      if (!userObj) {
        resolve(null)
        return 
      }
      const userData = await retrieveUser(userObj)
      resolve(userData)
    }, reject)
  })
}

export const checkAndCreateBudget =  async (budget_id) => {
  if (!budget_id) return
  const budgetRef = doc(db, `budgets/${budget_id}`)
  const budgetSnap = await getDoc(budgetRef)
  if (!budgetSnap.exists()) {
    const budgetWriteObj = {
      uid: budget_id,
      current_id: null,
      budgets: [],
    } 
    await setDoc(budgetRef, budgetWriteObj)
  }
  return budgetRef
}