import { useForm } from 'react-hook-form'

const VALIDATION_TYPES = ['required', 'minLength', 'pattern']

export const useLoginFormValidation = () => {
  const {
    handleSubmit,
    reset,
    register,
    clearErrors,
    resetField,
    formState: { errors }
  } = useForm({ mode: 'onChange', reValidateMode: 'onBlur' })
  console.log(errors)
  const errorMessage = field =>
    VALIDATION_TYPES.includes(errors[field]?.type) && (
      <small className='p-error mt-2'>{errors[field]?.message}</small>
    )

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
    reset,
    resetField,
    registerEmail,
    registerPassword,
    clearErrors,
    errorMessage
  }
}
