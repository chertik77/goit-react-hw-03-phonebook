import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { showConfirmMessage } from '~/Notifications/confirm'
import { IsUserExistsByName, IsUserExistsByNumber } from '~/helpers/IsUserExists'
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
      showConfirmMessage().then(() =>
        toast.promise(dispath(addNewUser({ name, number })), {
          loading: 'Adding new user...',
          success: 'Added!'
        })
      )
    } else {
      toast.promise(dispath(addNewUser({ name, number })), {
        loading: 'Adding new user...',
        success: 'Added!'
      })
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
          onChange={({ target: { value } }) => setName(value)}
        />
        <input
          type='tel'
          value={number}
          name='number'
          required
          className='mx-auto mb-6 block h-9 rounded p-2 font-serif placeholder:text-sm text-black'
          placeholder='Enter number'
          onChange={({ target: { value } }) => setNumber(value)}
        />
        <button type='submit' className='mx-auto block rounded-md bg-orange-400 px-5 py-2 font-serif'>
          Add contact
        </button>
      </form>
    </>
  )
}
