import { useForm } from 'react-hook-form'

const PHONE_NUMBER_LENGTH = 10
const VALIDATION_TYPES = ['required', 'minLength', 'validate']

export const useFormValidation = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ reValidateMode: 'onChange' })

  const errorMessage = field =>
    errors[field] &&
    VALIDATION_TYPES.includes(errors[field].type) && (
      <small className='p-error mt-2'>{errors[field].message}</small>
    )

  const registerName = {
    ...register('name', {
      required: 'This field is required.',
      minLength: { value: 5, message: 'This field should contain minimum 5 symbols.' }
    })
  }

  const registerNumber = {
    ...register('number', {
      required: 'This field is required.',
      validate: value =>
        value.replace(/[^0-9]/g, '').length === PHONE_NUMBER_LENGTH || 'This field should contain 9 digits.'
    })
  }

  return { handleSubmit, reset, registerName, registerNumber, errorMessage }
}
