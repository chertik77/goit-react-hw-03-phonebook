import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '~/redux/contactsSlice'

export const Contacts = () => {
  const { contacts, filter } = useSelector(state => state)
  const dispatch = useDispatch()
  const filteredContacts = contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter.toLowerCase()) || number.split('-').join('').includes(filter)
  )
  return (
    <>
      <h2 className='mb-5 text-center font-serif text-4xl text-white'>Contacts:</h2>
      <ul className='flex w-96 flex-col items-center justify-end gap-3'>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className='flex items-center justify-end gap-2'>
            <p className='text-white'>{name}</p>
            <p className='text-white'>{number}</p>
            <button
              type='button'
              className='rounded-md bg-red-600 px-5 py-2 font-serif text-white'
              onClick={() => dispatch(deleteUser(id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
