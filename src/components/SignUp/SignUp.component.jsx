import CustomInput from '../CustomInput/CustomInput.component'
import CustomButton from '../CustomButton/CustomButton.component'
import {
  PopupBodyContainerStyle,
  PopupBodyStyle,
  PopupCloseStyle,
  PopupHeaderStyle,
  PopupSubmitStyle,
  PopupTitleStyle,
} from '../PopupBody.styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userSagaActions } from '../../redux/users/users.saga.actions'
import { checkConfirmPassword, checkEmail, checkPassword, INPUT_ERRORS } from '../../utils/input/validation'

const SignUp = ({ onClose, height = '646' }) => {
  const [email, setEmail] = useState({email: '', error: ''})
  const [password, setPassword] = useState({password: '', error: ''})
  const [confirmpassword, setConfirmPassword] = useState({confirmpassword: '', error: ''})
  const dispatch = useDispatch()

  const onSubmit = () => {
    const emailError = checkEmail(email)
    const passwordError = checkPassword(password)
    const confirmPasswordError = checkConfirmPassword(password, confirmpassword)
    if (emailError === 0 && passwordError === 0 && confirmPasswordError === 0) {
      dispatch({type: userSagaActions.signUpStart, payload: {email: email.email, password: password.password}}) 
      return;
    }
    if (emailError) {
      setEmail({email: '', error: INPUT_ERRORS[emailError]})
    }
    if (passwordError) {
      setPassword({password: '', error: INPUT_ERRORS[passwordError]})
    }
    if (confirmPasswordError) {
      setConfirmPassword({confirmpassword: '', error: INPUT_ERRORS[confirmPasswordError]})
    }
  }
  return (
    <PopupBodyContainerStyle height={height}>
      <PopupHeaderStyle>
        <PopupTitleStyle>Sign Up</PopupTitleStyle>
        <PopupCloseStyle onClick={() => onClose()}>&#10060;</PopupCloseStyle>
      </PopupHeaderStyle>
      <PopupBodyStyle>
        <CustomInput
          label='Email'
          type='email'
          value={email.email}
          error={email.error}
          onChange={e => setEmail({email: e.target.value, error: ''})}
        />
        <CustomInput
          label='Password'
          type='password'
          value={password.password}
          error={password.error}
          onChange={e => setPassword({password: e.target.value, error: ''})}
        />
        <CustomInput
          label='Confirm Password'
          type='password'
          value={confirmpassword.confirmpassword}
          error={confirmpassword.error}
          onChange={e => setConfirmPassword({confirmpassword: e.target.value, error: ''})}
        />
      </PopupBodyStyle>
      <PopupSubmitStyle>
        <CustomButton theme='primary' label='Sign Up' width='357' onClick={() => onSubmit()}/>
      </PopupSubmitStyle>
    </PopupBodyContainerStyle>
  )
}

export default SignUp
