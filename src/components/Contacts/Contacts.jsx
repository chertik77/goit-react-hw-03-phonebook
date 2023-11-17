import { ColorRing } from 'react-loader-spinner'
import { useDeleteContactByIdMutation } from 'redux/services'
import { promiseToast } from 'utils/notifications/toast'

export const Contacts = ({ isLoading, error, filteredContacts }) => {
  const [deleteContactById] = useDeleteContactByIdMutation()

  const handleDelete = id =>
    promiseToast(deleteContactById(id), {
      loading: 'Deleting...',
      success: 'User deleted successfully!'
    })

  return (
    <>
      <h2 className='text-center text-4xl mb-5'>Contacts:</h2>
      <ColorRing
        visible={isLoading}
        height='100'
        width='100'
        ariaLabel='blocks-loading'
        wrapperClass='blocks-wrapper mx-auto'
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
      {error && <p className='text-center text-3xl mb-5'>{error.data}</p>}
      <ul className='gap-3 flex w-96 items-center justify-end flex-col'>
        {filteredContacts()?.map(({ id, name, number }) => (
          <li key={id} className='flex items-center justify-end gap-2'>
            <p>{name}</p>
            <p>{number}</p>
            <button
              type='button'
              className='rounded-md bg-red-600 px-5 py-2 disabled:opacity-50 disabled:cursor-not-allowed'
              onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
