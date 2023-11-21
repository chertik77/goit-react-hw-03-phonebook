import { useAuth } from 'hooks/useAuth'
import { lazy, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useCurrentUserQuery, useGetContactsQuery } from 'redux/services'
import { PrivateRoute } from 'routes/PrivateRoute'
import { RestrictedRoute } from 'routes/RestrictedRoute'
import { Loader } from 'utils/ui/Loader'
import { Layout } from './Layout'
import { ContactsForm } from './pages/contacts/ContactsForm'

const LoginPage = lazy(() => import('pages/Login'))
const ContactsPage = lazy(() => import('pages/Contacts'))

export const App = () => {
  const [filter, setFilter] = useState('')
  const { isRefreshing } = useAuth()
  const { data } = useGetContactsQuery()
  useCurrentUserQuery()

  const filteredContacts = () =>
    data
      ?.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(filter.toLowerCase()) || number.split('-').join('').includes(filter)
      )
      .reverse()

  return isRefreshing ? (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Loader />
    </div>
  ) : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />} />
        <Route
          path='/contacts'
          element={
            <PrivateRoute
              redirectTo='/'
              component={<ContactsPage entitites={filteredContacts} setFilter={setFilter} />}
            />
          }>
          <Route path='create' element={<ContactsForm entitites={filteredContacts} />} />
        </Route>
      </Route>
    </Routes>
  )
}
