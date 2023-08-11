import { useState } from 'react'
import {PopupSubmitStyle, PopupBodyContainerStyle, PopupBodyStyle, PopupCloseStyle, PopupHeaderStyle, PopupTitleStyle } from '../PopupBody.styles'
import CustomInput from '../CustomInput/CustomInput.component'
import CustomButton from '../CustomButton/CustomButton.component'
import './Income.styles.css'
import { INPUT_ERRORS, checkAmount } from '../../utils/input/validation'
import { useDispatch, useSelector } from 'react-redux'
import { budgetSagaActions } from '../../redux/budget/budget.saga.actions'
import { selectBudgetEntryID } from '../../redux/budget/budget.selectors'

const Income = ({onClose, height='646'}) => {
  const [income, setIncome] = useState({income: 0, error: ''})
  const dispatch = useDispatch()
  const budgetEntryID = useSelector(selectBudgetEntryID)

  const onSubmit = () => {
    const incomeError = checkAmount(income.income)
    if (incomeError === 0) {
      dispatch({type: budgetSagaActions.ADD_INCOME, payload: {income: income.income, budgetEntryID}})
      onClose()
      return
    }
    setIncome({income: '', error: INPUT_ERRORS[incomeError]})
  }
  return (
    <PopupBodyContainerStyle height={height}>
      <PopupHeaderStyle>
        <PopupTitleStyle>Add Income</PopupTitleStyle>
        <PopupCloseStyle onClick={() => onClose()}>&#10060;</PopupCloseStyle>
      </PopupHeaderStyle>
      <PopupBodyStyle>
        <CustomInput
          label='Amount (MMK)'
          type='text'
          value={income.income}
          error={income.error}
          onChange={e => setIncome({income: e.target.value, error: ''})}
        />
      </PopupBodyStyle>
      <PopupSubmitStyle>
        <CustomButton theme='primary' label='Add' width='357' onClick={() => onSubmit()}/>
      </PopupSubmitStyle>
    </PopupBodyContainerStyle> 
  )
}

export default Income
