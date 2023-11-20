import { useAuth } from 'hooks/useAuth'
import { useLogoutMutation } from 'redux/services'

export const UserMenu = () => {
  const { user } = useAuth()
  const [logout] = useLogoutMutation()

  return (
    <header>
      <div
        className='flex justify-between items-center p-4 
      border-b border-gray-300 w-full fixed top-0 left-0 right-0 z-50'>
        <p className='m-0 font-bold text-black'>Welcome, {user.name}</p>
        <button
          type='button'
          onClick={() => logout()}
          className='px-4 py-2 border-none rounded bg-red-600 text-white cursor-pointer text-lg'>
          Logout
        </button>
      </div>
    </header>
  )
}
