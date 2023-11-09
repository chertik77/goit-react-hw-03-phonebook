import { useEffect } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { showError } from '~/Notifications/toast'
import { deleteUser } from '~/redux/contactsSlice'
import { fetchContacts } from '~/redux/operations'
import { filteredContacts, selectContactsInfo } from '~/redux/selectors'

export const Contacts = () => {
  const { isLoading, error } = useSelector(selectContactsInfo)
  const filterContacts = useSelector(filteredContacts)
  const dispatch = useDispatch()
  const showContacts = !isLoading && !error

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <>
      <h2 className='mb-5 text-center font-serif text-4xl text-white'>Contacts:</h2>
      <ul className='flex w-96 flex-col items-center justify-end gap-3'>
        {error && showError()}
        {isLoading && (
          <ThreeDots
            height='80'
            width='80'
            radius='9'
            color='rgb(251 146 60)'
            ariaLabel='three-dots-loading'
            visible={true}
          />
        )}
        {showContacts &&
          filterContacts.map(({ id, name, phone }) => (
            <li key={id} className='flex items-center justify-end gap-2'>
              <p className='text-white'>{name}</p>
              <p className='text-white'>{phone}</p>
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
