import { PrimeReactProvider } from 'primereact/api'
import { Toaster } from 'react-hot-toast'
import { Contacts, Filter, Form } from '~/components'

export const App = () => (
  <PrimeReactProvider value={{ unstyled: true }}>
    <h1 className='mb-10 text-center font-serif text-4xl'>PhoneBook</h1>
    <Form />
    <Filter />
    <Contacts />
    <Toaster />
  </PrimeReactProvider>
)
