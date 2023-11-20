import { useDeleteContactByIdMutation } from 'redux/services'
import { promiseToast } from 'utils/notifications/toast'

export const ContactsList = ({ filteredContacts }) => {
  const [deleteContactById] = useDeleteContactByIdMutation()

  const handleDelete = id => {
    promiseToast(deleteContactById(id), {
      loading: 'Deleting...',
      success: 'Contact deleted successfully!'
    })
  }

  return (
    <div className='flex flex-wrap justify-around'>
      {filteredContacts()?.map(({ id, name, number }) => (
        <div key={id} className='m-4 w-64 rounded overflow-hidden shadow-lg bg-white'>
          <div className='px-6 py-4'>
            <p className='font-bold text-xl mb-2'>{name}</p>
            <p className='text-gray-700 text-base'>{number}</p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <button
              onClick={() => handleDelete(id)}
              className='inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2'>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
