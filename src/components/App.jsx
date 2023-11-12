import { Toaster } from 'react-hot-toast'
import { Contacts, Filter, Form } from '~/components'

export const App = () => (
  <>
    <h1 className='mb-10 text-center text-4xl'>PhoneBook</h1>
    <Form />
    <Filter />
    <Contacts />
    <Toaster />
  </>
)
