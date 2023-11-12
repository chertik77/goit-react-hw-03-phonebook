import { InputMask } from 'primereact/inputmask'
import { useDispatch, useSelector } from 'react-redux'
import { addNewUser } from '~/redux/operations'
import { selectContacts } from '~/redux/selectors'
import { isUserExistsByName, isUserExistsByNumber } from '~/utils/functions/IsUserExists'
import { useFormValidation } from '~/utils/hooks/useFormValidation'
import { showConfirmMessage } from '~/utils/notifications/confirm'
import { promiseToast } from '~/utils/notifications/toast'

export const Form = () => {
  const dispath = useDispatch()
  const contacts = useSelector(selectContacts)
  const { handleSubmit, reset, registerName, registerNumber, errorMessage } = useFormValidation()

  const submit = ({ name, number }) => {
    if (isUserExistsByName(contacts, name) || isUserExistsByNumber(contacts, number)) {
      showConfirmMessage().then(() => promiseToast(dispath(addNewUser({ name, number }))))
    } else {
      promiseToast(dispath(addNewUser({ name, number })))
    }
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div className='flex flex-col mb-4 justify-center w-48 mx-auto'>
          <input
            type='text'
            name='name'
            className='block rounded p-2 font-serif placeholder:text-sm text-black border'
            placeholder='Enter name'
            {...registerName}
          />
          {errorMessage('name', 'required', 'This field is required.')}
          {errorMessage('name', 'minLength', 'This field should contain minimum 5 digits')}
        </div>
        <div className='flex flex-col mb-4 justify-center w-48 mx-auto'>
          <InputMask
            name='number'
            autoClear={false}
            className='block rounded p-2 font-serif placeholder:text-sm text-black border'
            mask='999-999-9999'
            placeholder='Phone: xxx-xxx-xxxx'
            {...registerNumber}
          />
          {errorMessage('number', 'required', 'This field is required.')}
          {errorMessage('number', 'validate', 'This field should contain 9 digits.')}
        </div>

        <button type='submit' className='mx-auto block rounded-md bg-orange-400 px-5 py-2 font-serif'>
          Add contact
        </button>
      </form>
    </>
  )
}
