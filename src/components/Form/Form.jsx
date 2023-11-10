import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IsUserExistsByName, IsUserExistsByNumber } from '~/helpers/IsUserExists'
import { showConfirmMessage } from '~/notifications/confirm'
import { addNewUser } from '~/redux/operations'

export const Form = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const hasSameUserName = IsUserExistsByName(name)
  const hasSameUserNumber = IsUserExistsByNumber(number)
  const hasSameUser = hasSameUserName && hasSameUserNumber
  const dispath = useDispatch()

  const onFormSubmit = e => {
    e.preventDefault()
    if (hasSameUser || hasSameUserName || hasSameUserNumber) {
      showConfirmMessage().then(() => dispath(addNewUser({ name, number })))
    } else {
      dispath(addNewUser({ name, number }))
    }
    resetForm()
  }

  const resetForm = () => {
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
        <input
          type='tel'
          value={number}
          name='number'
          required
          className='mx-auto mb-6 block h-9 rounded p-2 font-serif placeholder:text-sm text-black'
          placeholder='Enter number'
          onChange={e => setNumber(e.target.value)}
        />
        <button type='submit' className='mx-auto block rounded-md bg-orange-400 px-5 py-2 font-serif'>
          Add contact
        </button>
      </form>
    </>
  )
}
