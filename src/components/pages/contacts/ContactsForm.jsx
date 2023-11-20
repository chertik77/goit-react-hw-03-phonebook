import { yupResolver } from '@hookform/resolvers/yup'
import { InputMask } from 'primereact/inputmask'
import { useForm } from 'react-hook-form'
import { useAddNewContactMutation } from 'redux/services'
import { userExistsMessage } from 'utils/helpers/userExistsMessage'
import { createValidationSchema } from 'utils/helpers/validationSchema'
import { showConfirmMessage } from 'utils/notifications/confirm'
import { promiseToast } from 'utils/notifications/toast'

export const ContactsForm = ({ entitites }) => {
  const [addNewContact, { isLoading }] = useAddNewContactMutation()
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors }
  } = useForm({ resolver: yupResolver(createValidationSchema(['name', 'number'])) })

  const handleUserAddition = (dispatcher, data) =>
    promiseToast(dispatcher(data), {
      loading: 'Adding new user...',
      success: ({ data }) => `${data.name} added successfully!`
    })

  const ErrorInputMessage = ({ errors, field }) =>
    errors[field] && <small className='p-error mt-1'>{errors[field]?.message}</small>

  const submit = data => {
    if (userExistsMessage(entitites, data)) {
      showConfirmMessage(userExistsMessage(entitites, data)).then(() =>
        handleUserAddition(addNewContact, data)
      )
    } else {
      handleUserAddition(addNewContact, data)
    }

    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div className='flex flex-col mb-4 justify-center w-48 mx-auto'>
          <input
            type='text'
            className='block rounded p-2 placeholder:text-sm text-black'
            placeholder='Enter name'
            {...register('name')}
          />
          <ErrorInputMessage errors={errors} field='name' />
        </div>
        <div className='flex flex-col mb-4 justify-center w-48 mx-auto'>
          <InputMask
            autoClear={false}
            className='block rounded p-2 placeholder:text-sm text-black'
            mask='999-999-9999'
            placeholder='Phone: xxx-xxx-xxxx'
            {...register('number')}
          />
          <ErrorInputMessage errors={errors} field='number' />
        </div>
        <button
          type='submit'
          className='mx-auto block rounded-md bg-orange-400 px-5 py-2 
          disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add new contact'}
        </button>
      </form>
    </>
  )
}
