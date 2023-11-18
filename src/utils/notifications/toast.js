import toast from 'react-hot-toast'

export const successRegistrationToast = () => {
  toast.success(
    'Registration successful! You can now start adding new contacts to your phonebook. Remember, you can always filter your contacts for easy access. Enjoy your stay!',
    {
      duration: 10000,
      icon: '🔥',
      style: {
        'min-width': '400px'
      }
    }
  )
}

export const promiseToast = (promise, options) => {
  toast.promise(promise, options)
}
