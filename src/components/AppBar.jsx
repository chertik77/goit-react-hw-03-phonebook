import { useAuth } from 'hooks/useAuth'
import { UserMenu } from './UserMenu'

export const AppBar = () => {
  const { isLoggedIn } = useAuth()

  return <header>{isLoggedIn && <UserMenu />}</header>
}
