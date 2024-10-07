

const isAlphanumeric = (value) => {
  const alphanumRegex = /^[a-zA-Z0-9]+$/;
  return alphanumRegex.test(value);
}

const isValidPassword = (value) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,16}$/;
  return passwordRegex.test(value);
}

const isValidEmail = (value) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(value);
}

module.exports = { isAlphanumeric, isValidPassword, isValidEmail}

