import { InputMask } from 'primereact/inputmask'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewUser } from '~/redux/operations'
import { IsUserExistsByName, IsUserExistsByNumber } from '~/utils/functions/IsUserExists'
import { showConfirmMessage } from '~/utils/notifications/confirm'
import { promiseToast } from '~/utils/notifications/toast'

export const Form = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const hasSameUserName = IsUserExistsByName(name)
  const hasSameUserNumber = IsUserExistsByNumber(number)
  const dispath = useDispatch()

  const onFormSubmit = e => {
    e.preventDefault()
    if (hasSameUserName || hasSameUserNumber) {
      showConfirmMessage().then(() => promiseToast(dispath(addNewUser({ name, number }))))
    } else {
      promiseToast(dispath(addNewUser({ name, number })))
    }
    setName('')
    setNumber('')
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type='text'
          value={name}
          name='name'
          required
          className='mx-auto mb-4 block h-9 rounded p-2 font-serif placeholder:text-sm text-black'
          placeholder='Enter name'
          onChange={e => setName(e.target.value)}
        />
        <InputMask
          type='tel'
          value={number}
          name='number'
          required
          className='mx-auto mb-6 block h-9 rounded p-2 font-serif placeholder:text-sm text-black'
          onChange={e => setNumber(e.target.value)}
          mask='999-999-9999'
          placeholder='Phone: xxx-xxx-xxxx'
        />
        <button type='submit' className='mx-auto block rounded-md bg-orange-400 px-5 py-2 font-serif'>
          Add contact
        </button>
      </form>
    </>
  )
}
