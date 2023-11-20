export const calculatePasswordStrength = password => {
  let strength = 0
  const minLength = 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /\W/.test(password)

  if (password.length >= minLength) strength += 25
  if (hasUpperCase) strength += 25
  if (hasLowerCase) strength += 25
  if (hasNumber) strength += 25
  if (hasSpecialChar) strength += 25

  return strength
}
