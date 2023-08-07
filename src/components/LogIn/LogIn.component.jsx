import { PopupBodyContainerStyle, PopupBodyStyle, PopupCloseStyle, PopupHeaderStyle, PopupSubmitStyle, PopupTitleStyle } from "../PopupBody.styles"
import CustomInput from "../CustomInput/CustomInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import { useState } from "react";
import { userSagaActions } from "../../redux/users/users.saga.actions";
import { checkEmail, checkPassword, INPUT_ERRORS } from "../../utils/input/validation";
import { useDispatch } from "react-redux";

const LogIn = ({onClose, height}) => {
  const [email, setEmail] = useState({email: '', error: ''})
  const [password, setPassword] = useState({password: '', error: ''})
  const dispatch = useDispatch()

  const onSubmit = () => {
    const emailError = checkEmail(email)
    const passwordError = checkPassword(password)
    if (emailError === 0 && passwordError === 0) {
      dispatch({type: userSagaActions.signInStart, payload: {email: email.email, password: password.password}}) 
      return;
    }
    if (emailError) {
      setEmail({email: '', error: INPUT_ERRORS[emailError]})
    }
    if (passwordError) {
      setPassword({password: '', error: INPUT_ERRORS[passwordError]})
    }
  }

  return (
    <PopupBodyContainerStyle height={height}>
      <PopupHeaderStyle>
        <PopupTitleStyle>Log In</PopupTitleStyle>
        <PopupCloseStyle onClick={() => onClose()}>&#10060;</PopupCloseStyle>
      </PopupHeaderStyle>
      <PopupBodyStyle>
        <CustomInput label='Name' type='text' value={email.email}
          error={email.error}
          onChange={(e) => setEmail({email: e.target.value, error: ''})}
        />
        <CustomInput label='Password' type='password' value={password.password}
          error={password.error}
          onChange={(e) => setPassword({password: e.target.value, error: ''})}
        />
      </PopupBodyStyle>
      <PopupSubmitStyle>
        <CustomButton width='357' theme='primary' label='Log In' onClick={() => onSubmit()}/>
      </PopupSubmitStyle> 
    </PopupBodyContainerStyle>
  )
} 

export default LogIn;
