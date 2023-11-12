import { useForm } from 'react-hook-form'

export const useFormValidation = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ reValidateMode: 'onChange' })

  const errorMessage = (field, type, message) =>
    errors[field] && errors[field].type === type && <small className='p-error mt-2'>{message}</small>

  const registerName = { ...register('name', { required: true, minLength: 5 }) }

  const registerNumber = {
    ...register('number', {
      required: true,
      validate: value => value.replace(/[^0-9]/g, '').length === 10
    })
  }

  return { handleSubmit, reset, registerName, registerNumber, errorMessage }
}
