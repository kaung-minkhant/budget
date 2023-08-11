import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    id: null,
    createdAt: null,
    starting_amount: null,
    expense: [],
    income: [],
    reserve: [],
    error: null,
    already_set: false,
}

const budgetSlice = createSlice(
    {
        name: 'budgetSlice',
        initialState: INITIAL_STATE,
        reducers: {
            addBudget: (state, action) => {
                state.id = action.payload.id
                state.createdAt = action.payload.createdAt
                state.starting_amount = action.payload.starting_amount
                state.expense = action.payload.expense
                state.income = action.payload.income
                state.reserve = action.payload.reserve
            },
            setAlreadySet: (state) => {
                state.already_set = true
            },
            clearAlreadySet: (state) => {
                state.already_set = false
            },
            appendExpense: (state, action) => {
                state.expense = [...state.expense, {
                    createdAt: action.payload.createdAt,
                    expense: action.payload.expense,
                }]
            },
            appendIncome: (state, action) => {
                state.income = [...state.income, {
                    createdAt: action.payload.createdAt,
                    income: action.payload.income,
                }]
            },
            appendReserve: (state, action) => {
                state.reserve = [...state.reserve, {
                    createdAt: action.payload.createdAt,
                    reserve: action.payload.reserve,
                }]
            },
        },
    }
)

export default budgetSlice.reducer
export const {addBudget, setAlreadySet, clearAlreadySet, appendExpense, appendIncome, appendReserve} = budgetSlice.actions