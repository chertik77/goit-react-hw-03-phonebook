import toast from 'react-hot-toast'

export const promiseToast = (promise, options) => toast.promise(promise, options)
