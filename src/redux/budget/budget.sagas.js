import {takeLatest, all, call, put} from 'redux-saga/effects'
import { budgetSagaActions } from './budget.saga.actions'
import { addBudegEntry, addExpense, addIncome, addReserve, checkUserBudget, createBudget, retrieveBudgetEntry } from '../../firebase/firebase.utils'
import {addBudget, appendExpense, appendIncome, appendReserve, clearAlreadySet, setAlreadySet} from './budget.slice'

export function* createBudgetAsync({payload: {starting_amount, budgetID}}) {
    const budgetExist = yield checkUserBudget(budgetID)
    const ksuidRes = yield fetch('https://ksuid-rest.onrender.com/once')
    const id = yield ksuidRes.text()
    const createdAt = yield new Date()
    const expense = []
    const income = []
    const reserve = []
    if (!budgetExist) {
        yield put(addBudget({id, createdAt, starting_amount, expense, income, reserve}))
        yield put(setAlreadySet())
        yield call(createBudget,{budget_id: budgetID, id, createdAt,starting_amount})
        return
    }
    console.log('adding new entry')
    yield call(addBudegEntry,{budgetID, budgetEntryID: id, createdAt, starting_amount})
}

export function* createBudgetStart() {
    yield takeLatest(budgetSagaActions.CREATE_BUDGET, createBudgetAsync)
}

export function* checkActiveBudgetAsync({payload: {budgetID}}) {
    const budgetEntry = yield retrieveBudgetEntry(budgetID)
    if (budgetEntry) {
        const currentDate = new Date()
        const createdAt = budgetEntry.createdAt
        const id = budgetEntry.uid
        const starting_amount = budgetEntry.starting_amount
        const expense = budgetEntry.expense
        const income = budgetEntry.income
        const reserve = budgetEntry.reserve
        const month = budgetEntry.createdAt.toDate().getMonth()
        const year = budgetEntry.createdAt.toDate().getFullYear()
        if (month === currentDate.getMonth() && year === currentDate.getFullYear()) {
            yield put(setAlreadySet())
            yield put(addBudget({id, createdAt, starting_amount, expense, income, reserve}))
            return
        }
    }
    yield put(clearAlreadySet())
    
}

export function* addExpenseAsync({payload: {budgetEntryID, expense}}) {
    const createdAt = new Date()
    yield addExpense(budgetEntryID, createdAt, expense)
    yield put(appendExpense({createdAt, expense}))
}

export function* addIncomeAsync({payload: {budgetEntryID, income}}) {
    const createdAt = new Date()
    yield addIncome(budgetEntryID, createdAt, income)
    yield put(appendIncome({createdAt, income}))
}

export function* addReserveAsync({payload: {budgetEntryID, day, month, year, reserve}}) {
    const monthIndex = month-1
    const createdAt = new Date(year, monthIndex, day)
    console.log(createdAt);
    console.log(budgetEntryID);
    console.log(reserve);
    yield addReserve(budgetEntryID, createdAt, reserve)
    yield put(appendReserve({createdAt, reserve}))
}

export function* checkActiveBudgetStart() {
    yield takeLatest(budgetSagaActions.CHECK_ACTIVE_BUDGET, checkActiveBudgetAsync)
}

export function* addIncomeStart() {
    yield takeLatest(budgetSagaActions.ADD_EXPENSE, addExpenseAsync)
}

export function* addReserveStart() {
    yield takeLatest(budgetSagaActions.ADD_INCOME, addIncomeAsync)
}

export function* addExpenseStart() {
    yield takeLatest(budgetSagaActions.ADD_RESERVE, addReserveAsync)
}

export function* budgetSagas() {
    yield all([
        call(createBudgetStart),
        call(checkActiveBudgetStart),
        call(addExpenseStart),
        call(addIncomeStart),
        call(addReserveStart),
    ])
}