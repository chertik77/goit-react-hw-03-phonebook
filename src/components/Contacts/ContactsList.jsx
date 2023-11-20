import { useDeleteContactByIdMutation } from 'redux/services'
import { promiseToast } from 'utils/notifications/toast'

export const ContactsList = ({ filteredContacts }) => {
  const [deleteContactById] = useDeleteContactByIdMutation()

  const handleDelete = id =>
    promiseToast(deleteContactById(id), {
      loading: 'Deleting...',
      success: 'User deleted successfully!'
    })

  return (
    <div className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
      {filteredContacts()?.map(({ id, name, number }) => (
        <div
          key={id}
          className='relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'>
          <h2 className='text-lg font-semibold text-gray-900'>{name}</h2>
          <p className='mt-2 text-sm text-gray-500'>{number}</p>
          <button
            onClick={() => handleDelete(id)}
            className='absolute top-2 right-2 text-gray-400 hover:text-red-500'>
            <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </button>
        </div>
      ))}
    </div>
  )
}
