import { useForm } from 'react-hook-form'

const PHONE_NUMBER_LENGTH = 10
const VALIDATION_TYPES = ['required', 'minLength', 'validate', 'pattern']

export const useFormValidation = () => {
  const {
    handleSubmit,
    reset,
    register,
    control,
    watch,
    formState: { errors }
  } = useForm({ reValidateMode: 'onChange' })

  const errorMessage = field =>
    VALIDATION_TYPES.includes(errors[field]?.type) && (
      <small className='p-error mt-2'>{errors[field]?.message}</small>
    )

  const registerName = register('name', {
    required: 'This field is required.',
    minLength: { value: 5, message: 'This field should contain at least 5 characters.' },
    setValueAs: v => v.trim()
  })

  const registerNumber = register('number', {
    required: 'This field is required.',
    validate: value =>
      value.replace(/[^0-9]/g, '').length === PHONE_NUMBER_LENGTH ||
      'Please enter a valid phone number with exactly 9 digits.'
  })

  const registerEmail = register('email', {
    required: 'This field is required.',
    pattern: {
      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: 'Please enter a valid email address.'
    }
  })

  const registerPassword = register('password', {
    required: 'This field is required.',
    minLength: { value: 8, message: 'This field should contain at least 8 characters.' },
    setValueAs: v => v.trim()
  })

  return {
    handleSubmit,
    watch,
    reset,
    registerName,
    control,
    registerNumber,
    registerEmail,
    registerPassword,
    errorMessage
  }
}
