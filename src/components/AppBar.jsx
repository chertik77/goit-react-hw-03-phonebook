import { useAuth } from 'hooks/useAuth'
import { NavLink } from 'react-router-dom'
import { UserMenu } from './UserMenu'

export const AppBar = () => {
  const { isLoggedIn } = useAuth()

  return (
    <header>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div>
          <NavLink className='text-black' to='/' style={{ color: 'black' }}>
            Home
          </NavLink>
          <NavLink className='text-black' to='/register' style={{ color: 'black' }}>
            Register
          </NavLink>
          <NavLink className='text-black' to='/login' style={{ color: 'black' }}>
            Log In
          </NavLink>
        </div>
      )}
    </header>
  )
}
