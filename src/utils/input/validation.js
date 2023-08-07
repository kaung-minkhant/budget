const INPUT_ERRORS_CODES = {
  NO_ERROR: 0,
  EMPTY: 1 ,
  NOT_VALID: 2,
}

export const INPUT_ERRORS = {
  0: 'Input OK', 
  1: 'Input Is Empty',
  2: 'Input Is Invalid',
}


export const checkEmail = ({email}) => {
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  if (!email) {
    return INPUT_ERRORS_CODES.EMPTY
  } else if (!emailPattern.test(email)) {
    return INPUT_ERRORS_CODES.NOT_VALID
  }
  return INPUT_ERRORS_CODES.NO_ERROR
}

export const checkPassword = ({password}) => {
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g
  if (!password) {
    return INPUT_ERRORS_CODES.EMPTY
  } else if (!passwordPattern.test(password)) {
    return INPUT_ERRORS_CODES.NOT_VALID
  }
  return INPUT_ERRORS_CODES.NO_ERROR
}

export const checkConfirmPassword = ({password}, {confirmpassword}) => {
  if (!confirmpassword) {
    return INPUT_ERRORS_CODES.EMPTY
  } else if (password !== confirmpassword) {
    return INPUT_ERRORS_CODES.NOT_VALID
  }
  return INPUT_ERRORS_CODES.NO_ERROR
}
