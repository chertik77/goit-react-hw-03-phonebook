import { useRef, useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { useDeleteContactByIdMutation, useEditContactByIdMutation } from 'redux/services'
import { promiseToast } from 'utils/notifications/toast'

export const ContactsList = ({ filteredContacts }) => {
  const [isEditable, setIsEditable] = useState(false)
  const editValues = useRef({ name: '', number: '' })
  const [deleteContactById] = useDeleteContactByIdMutation()
  const [edit] = useEditContactByIdMutation()

  const handleNameChange = e => {
    editValues.current.name = e.target.value
  }

  const handleNumberChange = e => {
    editValues.current.number = e.target.value
  }

  const handleDelete = id => {
    promiseToast(deleteContactById(id), {
      loading: 'Deleting...',
      success: 'Contact deleted successfully!'
    })
  }

  const handleEdit = id => {
    console.log(editValues)
    promiseToast(edit({ id, values: editValues.current }), {
      loading: 'Updating your contact...',
      success: 'Contact edited successfully!'
    })
  }

  return (
    <div className='flex flex-wrap justify-around'>
      {filteredContacts()?.map(({ id, name, number }) => (
        <div key={id} className='m-4 w-64 rounded overflow-hidden shadow-lg bg-white'>
          <div className='px-6 py-4'>
            <ContentEditable
              className='font-bold text-xl mb-2'
              tagName='p'
              html={name}
              disabled={!isEditable}
              onLoadStart={e => console.log(e)}
              onChange={handleNameChange}
            />
            <ContentEditable
              className='text-gray-700 text-base'
              tagName='p'
              html={number}
              disabled={!isEditable}
              onFocus={e => (editValues.current.number = e.target.textContent)}
              onChange={handleNumberChange}
            />
          </div>
          <div className='px-6 pt-4 pb-2'>
            {isEditable ? (
              <button
                onClick={() => {
                  handleEdit(id)
                  setIsEditable(false)
                }}
                className='inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2'>
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEditable(!isEditable)}
                className='inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2'>
                Edit
              </button>
            )}
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
