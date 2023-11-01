import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../redux/contactsSlice'

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch()

  return (
    <>
      <h2 className='mb-5 text-center font-serif text-4xl text-white'>Contacts:</h2>
      <ul className='flex w-96 flex-col items-center justify-end gap-3'>
        {contacts.map(({ id, name, number }) => (
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
