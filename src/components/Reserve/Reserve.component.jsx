import { useState } from 'react'
import {PopupSubmitStyle, PopupBodyContainerStyle, PopupBodyStyle, PopupCloseStyle, PopupHeaderStyle, PopupTitleStyle } from '../PopupBody.styles'
import CustomInput from '../CustomInput/CustomInput.component'
import CustomButton from '../CustomButton/CustomButton.component'
import { checkAmount, checkDate, INPUT_ERRORS } from '../../utils/input/validation'
import './Reserve.styles.css'

const Reserve = ({onClose, height='646'}) => {
  const [reserve, setReserve] = useState({reserve: 0, error: ''})
  const [day, setDay] = useState({day: 1, error: ''})
  const [month, setMonth] = useState({month: 1, error: ''})
  const [year, setYear] = useState({year: 2023, error: ''})

  const onSubmit = () => {
    const amountError = checkAmount(reserve.reserve)
    const dateError = checkDate(day.day, month.month, year.year)

    if (amountError === 0 && dateError === 0) {
      onClose()
      return;
    }
    
    if (amountError) {
      setReserve({reserve: '', error: INPUT_ERRORS[amountError]})
    }
    if (dateError) {
      setDay({day: '', error: INPUT_ERRORS[dateError]})
      setMonth({month: '', error: ''})
      setYear({year: '', error: ''})
    }

  }
  return (
    <PopupBodyContainerStyle height={height}>
      <PopupHeaderStyle>
        <PopupTitleStyle>Add Reserve</PopupTitleStyle>
        <PopupCloseStyle onClick={() => onClose()}>&#10060;</PopupCloseStyle>
      </PopupHeaderStyle>
      <PopupBodyStyle>
        <CustomInput
          label='Amount (MMK)'
          type='text'
          value={reserve.reserve}
          error={reserve.error}
          onChange={e => setReserve({reserve: e.target.value, error: ''})}
        />
        <div className='date'>
          <CustomInput 
            label='Day'
            width='97'
            type='text'
            value={day.day}
            error={day.error}
            onChange={e => setDay({day: e.target.value, error: ''})}
          />
          <span className='date-seperator'>/</span>
          <CustomInput 
            label='Month'
            width='97'
            type='text'
            value={month.month}
            error={month.error}
            onChange={e => setMonth({month: e.target.value, error: ''})}
          />
          <span className='date-seperator'>/</span>
          <CustomInput 
            label='Year'
            width='97'
            type='text'
            value={year.year}
            error={year.error}
            onChange={e => setYear({year: e.target.value, error: ''})}
          />
        </div>
      </PopupBodyStyle>
      <PopupSubmitStyle>
        <CustomButton theme='primary' label='Add' width='357' onClick={() => onSubmit()}/>
      </PopupSubmitStyle>
    </PopupBodyContainerStyle> 
  )
}

export default Reserve
