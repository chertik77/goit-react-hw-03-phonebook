import { nanoid } from 'nanoid'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { showConfirmMessage } from '../../Notifications/Notifications'
import { IsUserExistsByName, IsUserExistsByNumber } from '../../helpers/IsUserExists'
import { newUser } from '../../redux/contactsSlice'

export const Form = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const hasSameUserName = IsUserExistsByName(name)
  const hasSameUserNumber = IsUserExistsByNumber(number)
  const hasSameUser = hasSameUserName && hasSameUserNumber
  const id = nanoid()
  const dispath = useDispatch()

  const onFormSubmit = e => {
    e.preventDefault()
    if (hasSameUser || hasSameUserName || hasSameUserNumber) {
      showConfirmMessage().then(() => dispath(newUser({ id, name, number })))
    } else {
      dispath(newUser({ id, name, number }))
    }
    resetForm()
  }

  const resetForm = () => {
    setName('')
    setNumber('')
  }

  return (
    <>
      <h1 className='mb-10 text-center font-serif text-4xl text-white'>PhoneBook</h1>
      <form onSubmit={onFormSubmit}>
        <input
          type='text'
          value={name}
          name='name'
          required
          className='mx-auto mb-4 block h-9 rounded p-2 font-serif placeholder:text-sm'
          placeholder='Enter name'
          onChange={({ target: { value } }) => setName(value)}
        />
        <input
          type='tel'
          value={number}
          name='number'
          required
          className='mx-auto mb-6 block h-9 rounded p-2 font-serif placeholder:text-sm'
          placeholder='Enter number'
          onChange={({ target: { value } }) => setNumber(value)}
        />
        <button
          type='submit'
          className='mx-auto block rounded-md bg-orange-400 px-5 py-2 font-serif text-white'>
          Add contact
        </button>
      </form>
    </>
  )
}
