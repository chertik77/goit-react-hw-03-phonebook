import { InputMask } from 'primereact/inputmask'
import { useAddNewUserMutation } from 'redux/services'
import { isUserExistsByName, isUserExistsByNumber } from 'utils/functions/IsUserExists'
import { useFormValidation } from 'utils/hooks/useFormValidation'
import { showConfirmMessage } from 'utils/notifications/confirm'
import { promiseToast } from 'utils/notifications/toast'

export const Form = ({ data }) => {
  const [addNewUser, { isLoading }] = useAddNewUserMutation()
  const { handleSubmit, reset, registerName, registerNumber, errorMessage } = useFormValidation()

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
      promiseToast(addNewUser({ name, number }), {
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
            {...registerName}
          />
          {errorMessage('name')}
        </div>
        <div className='flex flex-col mb-4 justify-center w-48 mx-auto'>
          <InputMask
            autoClear={false}
            className='block rounded p-2 placeholder:text-sm text-black'
            mask='999-999-9999'
            placeholder='Phone: xxx-xxx-xxxx'
            {...registerNumber}
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
