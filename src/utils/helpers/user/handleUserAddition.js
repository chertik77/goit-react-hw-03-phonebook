import { promiseToast } from 'utils/notifications/toast'

export const handleUserAddition = (dispatcher, data) =>
  promiseToast(dispatcher(data), {
    loading: 'Adding new user...',
    success: ({ data }) => `${data.name} added successfully!`
  })
