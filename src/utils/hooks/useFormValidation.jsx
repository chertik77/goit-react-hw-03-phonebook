import { useForm } from 'react-hook-form'

const PHONE_NUMBER_LENGTH = 10

export const useFormValidation = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ reValidateMode: 'onChange' })

  const errorMessage = (field, type) =>
    errors[field] &&
    errors[field].type === type && <small className='p-error mt-2'>{errors[field].message}</small>

  const registerName = {
    ...register('name', {
      required: { value: true, message: 'This field is required.' },
      minLength: { value: 5, message: 'This field should contain minimum 5 digits' }
    })
  }

  const registerNumber = {
    ...register('number', {
      required: { value: true, message: 'This field is required.' },
      validate: value =>
        value.replace(/[^0-9]/g, '').length === PHONE_NUMBER_LENGTH || 'This field should contain 9 digits.'
    })
  }

  return { handleSubmit, reset, registerName, registerNumber, errorMessage }
}
