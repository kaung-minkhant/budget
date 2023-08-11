import './Main.styles.css'
import Header from '../../components/Header/Header.component'
import MainInfo from '../../components/MainInfo/MainInfo.component';
import { useEffect, useState } from 'react';
import BudgetContainer from '../../components/Budget/Budget.container';
import ExpenseContainer from '../../components/Expense/Expense.container';
import IncomeContainer from '../../components/Income/Income.container';
import ReserveContainer from '../../components/Reserve/Reserve.container';
import { useDispatch, useSelector } from 'react-redux';
import { budgetSagaActions } from '../../redux/budget/budget.saga.actions';
import { selectCurrentUser } from '../../redux/users/user.selector';
import { selectTotal } from '../../redux/budget/budget.selectors';

const MainPage = () => {
  const [showBudget, setShowBudget] = useState(false)
  const [showExpense, setShowExpense] = useState(false)
  const [showIncome, setShowIncome] = useState(false)
  const [showReserve, setShowReserve] = useState(false)
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type: budgetSagaActions.CHECK_ACTIVE_BUDGET, payload: {budgetID: currentUser.budget_id}})
  }, [])
  const total = useSelector(selectTotal)

  return (
    <div className='mainpage'>
      <Header onBudget={() => setShowBudget(true)}
        onExpense={() => setShowExpense(true)}
        onIncome={() => setShowIncome(true)}
        onReserve={() => setShowReserve(true)}
      />  
      <MainInfo amount={total ? total : 0}/>
      {showBudget ? <BudgetContainer onClose={() => setShowBudget(false)} height='360'/> : null }
      {showExpense ? <ExpenseContainer onClose={() => setShowExpense(false)} height='360'/> : null }
      {showIncome ? <IncomeContainer onClose={() => setShowIncome(false)} height='360'/> : null }
      {showReserve ? <ReserveContainer onClose={() => setShowReserve(false)} height='469'/> : null }
    </div>
  );
}

export default MainPage
