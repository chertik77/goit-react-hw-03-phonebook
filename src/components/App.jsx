import { useAuth } from 'hooks/useAuth'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useCurrentUserQuery } from 'redux/services'
import { PrivateRoute } from 'routes/PrivateRoute'
import { RestrictedRoute } from 'routes/RestrictedRoute'
import { Layout } from './Layout'

const LoginPage = lazy(() => import('pages/Login'))
const ContactsPage = lazy(() => import('pages/Contacts'))

export const App = () => {
  useCurrentUserQuery()
  const { isRefreshing } = useAuth()

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />} />
        <Route path='/contacts' element={<PrivateRoute redirectTo='/' component={<ContactsPage />} />} />
      </Route>
    </Routes>
  )
}
