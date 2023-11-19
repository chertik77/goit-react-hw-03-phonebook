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
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/login'>Log In</NavLink>
        </div>
      )}
    </header>
  )
}
