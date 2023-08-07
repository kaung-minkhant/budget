import { useState } from 'react'
import {PopupSubmitStyle, PopupBodyContainerStyle, PopupBodyStyle, PopupCloseStyle, PopupHeaderStyle, PopupTitleStyle } from '../PopupBody.styles'
import CustomInput from '../CustomInput/CustomInput.component'
import CustomButton from '../CustomButton/CustomButton.component'
import {INPUT_ERRORS, checkAmount} from '../../utils/input/validation'
import './Budget.styles.css'


const Budget = ({onClose, height='646'}) => {
  const [budgetAmount, setBudgetAmount] = useState({budget: 0, error: ''})
  const onSubmit = () => {
    const budgeError = checkAmount(budgetAmount.budget)
    if (budgeError === 0) {
      onClose()
      return
    }
    setBudgetAmount({budget: '', error: INPUT_ERRORS[budgeError]})
  }
  return (
    <PopupBodyContainerStyle height={height}>
      <PopupHeaderStyle>
        <PopupTitleStyle>Add Budget</PopupTitleStyle>
        <PopupCloseStyle onClick={() => onClose()}>&#10060;</PopupCloseStyle>
      </PopupHeaderStyle>
      <PopupBodyStyle>
        <CustomInput
          label='Amount (MMK)'
          type='text'
          value={budgetAmount.budget}
          error={budgetAmount.error}
          onChange={e => setBudgetAmount({budget: e.target.value, error: ''})}
        />
      </PopupBodyStyle>
      <PopupSubmitStyle>
        <CustomButton theme='primary' label='Add' width='357' onClick={() => onSubmit()}/>
      </PopupSubmitStyle>
    </PopupBodyContainerStyle> 
  )
}

export default Budget
