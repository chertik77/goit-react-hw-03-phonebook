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
      {error && (
        <p className='text-center text-2xl mb-5 p-10'>
          {"We're sorry, but something went wrong. Please try again."}
        </p>
      )}
      <ul className='grid grid-cols-3 gap-6 p-5 sm:grid-cols-1 md:grid-cols-3'>
        {filteredContacts()?.map(({ id, name, number }) => (
          <li key={id} className='flex flex-col bg-white shadow-md rounded-lg overflow-hidden'>
            <div className='p-4'>
              <h2 className='text-lg font-semibold text-gray-900'>{name}</h2>
              <p className='mt-2 text-sm text-gray-600'>{number}</p>
            </div>
            <div className='px-4 py-2 bg-gray-100 border-t border-gray-200'>
              <button
                type='button'
                className='inline-flex items-center justify-center px-4 py-2 text-sm 
                font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700'
                onClick={() => handleDelete(id)}>
                Delete
              </button>
            </div>
          </li>
        ))}{' '}
      </ul>
    </>
  )
}
