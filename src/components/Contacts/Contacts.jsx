import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { showError } from '~/Notifications/toast'
import { deleteContactById, fetchContacts } from '~/redux/operations'
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
      <h2 className='text-center font-serif text-4xl mb-5'>Contacts:</h2>
      <ul className='gap-3 flex w-96 items-center justify-end flex-col'>
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
              <p>{name}</p>
              <p>{phone}</p>
              <button
                type='button'
                className='rounded-md bg-red-600 px-5 py-2 font-serif'
                onClick={() =>
                  toast.promise(dispatch(deleteContactById(id)), {
                    loading: 'Deleting...',
                    success: 'Deleted!'
                  })
                }>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  )
}
