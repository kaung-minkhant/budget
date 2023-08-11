import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
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

const storeBudgetEntry = async (id, createdAt, starting_amount) => {
  const budgetRef = doc(db, `budgets/${id}`)
  const budgetWriteObj = {
    uid: id,
    createdAt: createdAt,
    starting_amount: starting_amount,
    expense: [],
    income: [],
    reserve: [],
  }
  await setDoc(budgetRef, budgetWriteObj)
}
const storeUserBudget = async (budget_id, id) => {
  const userBudgetRef = doc(db, `userBudgets/${budget_id}`)
  const userBudgetWriteObj = {
    uid: budget_id,
    current_id: id,
  }
  await setDoc(userBudgetRef, userBudgetWriteObj)
}


export const createBudget =  async ({budget_id, id, createdAt, starting_amount}) => {
  if (!budget_id) return
  await storeUserBudget(budget_id, id)
  await storeBudgetEntry(id, createdAt, starting_amount)
}

export const addBudegEntry = async ({budgetID, budgetEntryID, createdAt, starting_amount}) => {
  if (!budgetID) return
  const userBudgetRef = doc(db, `userBudgets/${budgetID}`)
  await updateDoc(userBudgetRef, {
    current_id: budgetEntryID
  })
  await storeBudgetEntry(budgetEntryID, createdAt, starting_amount)
}

export const addExpense = async (budgetEntryID, createdAt, expense) => {
  if (!budgetEntryID) return
  const budgetEntryRef = doc(db, `budgets/${budgetEntryID}`)
  const expenseObj = {
    createdAt, 
    expense
  }
  await updateDoc(budgetEntryRef, {
    expense: arrayUnion(expenseObj)
  })
  console.log(budgetEntryRef)
}

export const addIncome = async (budgetEntryID, createdAt, income) => {
  if (!budgetEntryID) return
  const budgetEntryRef = doc(db, `budgets/${budgetEntryID}`)
  const incomeObj = {
    createdAt, 
    income
  }
  await updateDoc(budgetEntryRef, {
    income: arrayUnion(incomeObj)
  })
  console.log(budgetEntryRef)
}

export const addReserve = async (budgetEntryID, createdAt, reserve) => {
  if (!budgetEntryID) return
  const budgetEntryRef = doc(db, `budgets/${budgetEntryID}`)
  const reserveObj = {
    createdAt, 
    reserve
  }
  await updateDoc(budgetEntryRef, {
    reserve: arrayUnion(reserveObj)
  })
  console.log(budgetEntryRef)
}

export const checkUserBudget = async (budgetID) => {
  if (!budgetID) return
  const budgetRef = doc(db, `userBudgets/${budgetID}`)
  const budgetSnap = await getDoc(budgetRef)
  if (!budgetSnap.exists()) {
    return false
  }
  return true
}

export const retrieveBudgetEntry = async (budgetID) => {
  if (!budgetID) return
  const userBudgetRef = doc(db, `userBudgets/${budgetID}`)
  const userBudgetSnap = await getDoc(userBudgetRef)
  if (userBudgetSnap.exists()) {
    const currentBudgetID = userBudgetSnap.data().current_id
    const budgetEntryRef = doc(db, `budgets/${currentBudgetID}`)
    const budgetEntrySnap = await getDoc(budgetEntryRef)
    return budgetEntrySnap.data()
  }
  return null
}