import { useState } from 'react'
import {PopupSubmitStyle, PopupBodyContainerStyle, PopupBodyStyle, PopupCloseStyle, PopupHeaderStyle, PopupTitleStyle } from '../PopupBody.styles'
import CustomInput from '../CustomInput/CustomInput.component'
import CustomButton from '../CustomButton/CustomButton.component'
import './Expense.styles.css'
import { INPUT_ERRORS, checkAmount } from '../../utils/input/validation'

const Expense = ({onClose, height='646'}) => {
  const [expense, setExpense] = useState({expense: 0, error: ''})

  const onSubmit = () => {
    const expenseError = checkAmount(expense.expense)
    if (expenseError === 0) {
      onClose()
      return
    }
  setExpense({expense: '', error: INPUT_ERRORS[expenseError]})
  }
  return (
    <PopupBodyContainerStyle height={height}>
      <PopupHeaderStyle>
        <PopupTitleStyle>Add Expense</PopupTitleStyle>
        <PopupCloseStyle onClick={() => onClose()}>&#10060;</PopupCloseStyle>
      </PopupHeaderStyle>
      <PopupBodyStyle>
        <CustomInput
          label='Amount (MMK)'
          type='text'
          value={expense.expense}
          error={expense.error}
          onChange={e => setExpense({expense: e.target.value, error: ''})}
        />
      </PopupBodyStyle>
      <PopupSubmitStyle>
        <CustomButton theme='primary' label='Add' width='357' onClick={() => onSubmit()}/>
      </PopupSubmitStyle>
    </PopupBodyContainerStyle> 
  )
}

export default Expense
