import './Main.styles.css'
import Header from '../../components/Header/Header.component'
import MainInfo from '../../components/MainInfo/MainInfo.component';
import { useState } from 'react';
import BudgetContainer from '../../components/Budget/Budget.container';
import ExpenseContainer from '../../components/Expense/Expense.container';
import IncomeContainer from '../../components/Income/Income.container';
import ReserveContainer from '../../components/Reserve/Reserve.container';

const MainPage = () => {
  const [showBudget, setShowBudget] = useState(false)
  const [showExpense, setShowExpense] = useState(false)
  const [showIncome, setShowIncome] = useState(false)
  const [showReserve, setShowReserve] = useState(false)

  return (
    <div className='mainpage'>
      <Header onBudget={() => setShowBudget(true)}
        onExpense={() => setShowExpense(true)}
        onIncome={() => setShowIncome(true)}
        onReserve={() => setShowReserve(true)}
      />  
      <MainInfo />
      {showBudget ? <BudgetContainer onClose={() => setShowBudget(false)} height='360'/> : null }
      {showExpense ? <ExpenseContainer onClose={() => setShowExpense(false)} height='360'/> : null }
      {showIncome ? <IncomeContainer onClose={() => setShowIncome(false)} height='360'/> : null }
      {showReserve ? <ReserveContainer onClose={() => setShowReserve(false)} height='469'/> : null }
    </div>
  );
}

export default MainPage
