import { calculatePasswordStrength } from 'utils/password/calculatePasswordStrength'
import { object, string } from 'yup'
const PHONE_NUMBER_LENGTH = 10

const validationSchemas = {
  name: string()
    .required('This field is required.')
    .min(5, 'This field should contain at least 5 characters.')
    .trim(),
  number: string()
    .required('This field is required.')
    .test(
      'len',
      'Please enter a valid phone number with exactly 9 digits.',
      val => val.replace(/[^0-9]/g, '').length === PHONE_NUMBER_LENGTH
    ),
  email: string().email('Please enter a valid email address.').required('This field is required.').trim(),
  signuppassword: string()
    .required('This field is required.')
    .test(
      'passwordStrength',
      'Please make a stronger password',
      value => calculatePasswordStrength(value) >= 75
    )
    .trim(),
  loginpassword: string()
    .required('This field is required.')
    .min(8, 'This field should contain at least 8 characters.')
    .trim()
}

export const createValidationSchema = fields => {
  let schema = {}

  fields.forEach(field => {
    if (validationSchemas[field]) {
      schema[field] = validationSchemas[field]
    }
  })

  return object().shape(schema)
}
