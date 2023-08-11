import { useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import FrontPicFrame from '../../components/FrontPicFrame/FrontPicFrame.component';
import LoginContainer from '../../components/LogIn/LogIn.container';
import SignUpContainer from '../../components/SignUp/SignUp.container';
import './Entry.style.css'

const EntryPage = () => {
  const [signUpPopup, setSignUpPopup] = useState(false)
  const [logInPopup, setLogInPopup] = useState(false)
  return (
    <div className='entrypage'>
      <CustomButton width='197' theme='signup' type='button' label='Sign Up' onClick={() => setSignUpPopup(true)}/>
      <CustomButton width='197' theme='login' type='button' label='Log In' onClick={() => setLogInPopup(true)}/>
      {signUpPopup && (<SignUpContainer height='646' onClose={() => setSignUpPopup(false)} />)}
      {logInPopup && (<LoginContainer height='469' onClose={() => setLogInPopup(false)} />)}
      <FrontPicFrame />
    </div>
  )
}

export default EntryPage;
