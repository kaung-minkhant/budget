import { createSelector } from "@reduxjs/toolkit";

const selectBudget = (state) => state.budget;

export const selectBudgetEntryID = createSelector(
  [selectBudget],
  (budget) => budget.id
);

export const selectAlreadSet = createSelector(
  [selectBudget],
  (budget) => budget.already_set
);

export const selectBudgetObj = createSelector([selectBudget], (budget) => {
  const budgetObj = {
    id: budget.id,
    createdAt: budget.createdAt,
    starting_amount: budget.starting_amount,
    expense: budget.expense,
    income: budget.income,
    reserve: budget.reserve,
  };
  return budgetObj;
});

export const selectExpense = createSelector(
  [selectBudget],
  (budget) => {
    const expense = budget.expense
    console.log(expense);
    return expense.length !== 0 ? expense[expense.length-1].expense : 0
  }
)

export const selectTotal = createSelector(
  [selectBudget],
  (budget) => {
    const starting_amount = parseInt(budget.starting_amount)
    const expense = budget.expense
    const income = budget.income
    const reserve = budget.reserve
    const totalExpense = expense.reduce((accumulator, currentValue) => {
      return accumulator + parseInt(currentValue.expense)
    }
    , 0)
    const totalIncome = income.reduce((accumulator, currentValue) => {
      return accumulator + parseInt(currentValue.income)
    }
    , 0)
    const totalReserve = reserve.reduce((accumulator, currentValue) => {
      return accumulator + parseInt(currentValue.reserve)
    }
    , 0)
    return starting_amount + totalIncome - totalExpense - totalReserve
  }
)