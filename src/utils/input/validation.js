const INPUT_ERRORS_CODES = {
  NO_ERROR: 0,
  EMPTY: 1 ,
  NOT_VALID: 2,
  INVALID_PASSWORD: 3,
  NOT_EQUAL: 4,
}

export const INPUT_ERRORS = {
  0: 'Input OK', 
  1: 'Input Is Empty',
  2: 'Invalid',
  3: 'Min. 6 characters, Upper and lower letters and numbers',
  4: 'Passwords do not match',
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
    return INPUT_ERRORS_CODES.INVALID_PASSWORD
  }
  return INPUT_ERRORS_CODES.NO_ERROR
}

export const checkConfirmPassword = ({password}, {confirmpassword}) => {
  if (!confirmpassword) {
    return INPUT_ERRORS_CODES.EMPTY
  } else if (password !== confirmpassword) {
    return INPUT_ERRORS_CODES.NOT_EQUAL
  }
  return INPUT_ERRORS_CODES.NO_ERROR
}

export const checkAmount = (amount) => {
  if (isNaN(+amount) || amount === '' || +amount === 0) {
    return INPUT_ERRORS_CODES.NOT_VALID
  }
  return INPUT_ERRORS_CODES.NO_ERROR
}

export const checkDate = (day, month, year) => {
  const currentDateObj = new Date()
  const currentDate = currentDateObj.getDate()
  const currentMonth = currentDateObj.getMonth()+1
  const currentYear = currentDateObj.getFullYear()
  const currentEndDate = new Date(currentYear, currentMonth+1, 0).getDate()
  if (+day < currentDate || +day > currentEndDate || isNaN(+day)) {
    return INPUT_ERRORS_CODES.NOT_VALID
  }

  if (+month !== currentMonth || isNaN(+month)) {
    return INPUT_ERRORS_CODES.NOT_VALID
  }

  if (+year !== currentYear || isNaN(+year)) {
    return INPUT_ERRORS_CODES.NOT_VALID
  }

  return INPUT_ERRORS_CODES.NO_ERROR
}