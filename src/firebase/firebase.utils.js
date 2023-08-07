import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase.config";

export const checkAndCreateUserDocument = async (userObj) => {
  const uid = userObj.uid
  const userRef = doc(db, `users/${uid}`)
  const userSnap = await getDoc(userRef)
  if (!userSnap.exists()) {
    const date = new Date()
    const userWriteObj = {
      uid: uid,
      email: userObj.email,
      createdAt: date,
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
