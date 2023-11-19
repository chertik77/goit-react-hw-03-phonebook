import { InputMask } from 'primereact/inputmask'
import { useForm } from 'react-hook-form'
import { useAddNewContactMutation, useGetContactsQuery } from 'redux/services'
import { isUserExistsByName, isUserExistsByNumber } from 'utils/helpers/IsUserExists'
import { showConfirmMessage } from 'utils/notifications/Confirm'
import { promiseToast } from 'utils/notifications/Toast'

export const ContactsForm = () => {
  const { data } = useGetContactsQuery()
  const [addNewContact, { isLoading }] = useAddNewContactMutation()
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors }
  } = useForm()

  const errorMessage = field =>
    errors[field] && <small className='p-error mt-2'>{errors[field]?.message}</small>

  const submit = ({ name, number }) => {
    const userExistsMessage =
      isUserExistsByName(data, name) && isUserExistsByNumber(data, number)
        ? `A user with the name ${name} and number ${number} already exists. Do you still want to add ${name}?`
        : isUserExistsByName(data, name)
        ? `A user with the name ${name} already exists. Do you still want to add ${name}?`
        : isUserExistsByNumber(data, number)
        ? `A user with the number ${number} already exists. Do you still want to add ${name}?`
        : ''

    const handleUserAddition = () =>
      promiseToast(addNewContact({ name, number }), {
        loading: 'Adding new user...',
        success: ({ data }) => `${data.name} added successfully!`
      })

    if (userExistsMessage) {
      showConfirmMessage(userExistsMessage).then(handleUserAddition)
    } else {
      handleUserAddition()
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
          {errorMessage('name')}
        </div>
        <div className='flex flex-col mb-4 justify-center w-48 mx-auto'>
          <InputMask
            autoClear={false}
            className='block rounded p-2 placeholder:text-sm text-black'
            mask='999-999-9999'
            placeholder='Phone: xxx-xxx-xxxx'
            {...register('number')}
          />
          {errorMessage('number')}
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
