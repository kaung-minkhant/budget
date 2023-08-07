import './Header.styles.css'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {userSagaActions} from '../../redux/users/users.saga.actions'
import CustomButton from '../CustomButton/CustomButton.component'

const Header = ({ history, onBudget, onExpense, onIncome, onReserve }) => {
  const dispatch = useDispatch()
  const logout = () => {
    history.push('/')
    dispatch({ type: userSagaActions.logOutStart })
  }
  return (
    <div className='headerContainer'>
      <span className='filler'></span>
      <div className='buttongroup'>
        <span className='button' onClick={() => onBudget()}>Add Budget</span>
        <span className='button' onClick={() => onExpense()}>Add Expense</span>
        <span className='button' onClick={() => onIncome()}>Add Income</span>
        <span className='button' onClick={() => onReserve()}>Add Reserve</span>
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
