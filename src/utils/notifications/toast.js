import toast from 'react-hot-toast'

export const promiseToast = (
  promise,
  options = {
    loading: 'Adding new user...',
    success: data => `${data.payload.name} added successfully!`
  }
) => toast.promise(promise, options)
