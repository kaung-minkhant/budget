import './Header.styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {userSagaActions} from '../../redux/users/users.saga.actions'
import CustomButton from '../CustomButton/CustomButton.component'
import { selectAlreadSet, selectBudgetEntryID } from '../../redux/budget/budget.selectors'
import { useEffect } from 'react'
import { budgetSagaActions } from '../../redux/budget/budget.saga.actions'
import { selectCurrentUser } from '../../redux/users/user.selector'

const Header = ({ history, onBudget, onExpense, onIncome, onReserve}) => {
  const dispatch = useDispatch()
  const budgetAlreadySet = useSelector(selectAlreadSet)

  const logout = () => {
    history.push('/')
    dispatch({ type: userSagaActions.logOutStart })
  }
  return (
    <div className='headerContainer'>
      <span className='filler'></span>
      <div className='buttongroup'>
        <span className={`button ${budgetAlreadySet ? 'disabled' : ''}`} onClick={() => budgetAlreadySet || onBudget()}>Add Budget</span>
        <span className={`button ${budgetAlreadySet ? '' : 'disabled'}`} onClick={() => budgetAlreadySet && onExpense()}>Add Expense</span>
        <span className={`button ${budgetAlreadySet ? '' : 'disabled'}`} onClick={() => budgetAlreadySet && onIncome()}>Add Income</span>
        <span className={`button ${budgetAlreadySet ? '' : 'disabled'}`} onClick={() => budgetAlreadySet && onReserve()}>Add Reserve</span>
      </div>
      <CustomButton
        className='logout'
        label='Sign Out'
        theme='primary'
        width='179'
        onClick={() => logout()}
      />
    </div>
  )
}

export default withRouter(Header)
