import 'primeicons/primeicons.css'
import { ScrollTop } from 'primereact/scrolltop'
import { Toaster } from 'react-hot-toast'
import { Contacts, Filter, Form } from '~/components'

export const App = () => (
  <>
    <h1 className='mb-10 text-center text-4xl'>PhoneBook</h1>
    <Form />
    <Filter />
    <Contacts />
    <Toaster />
    <ScrollTop
      className='w-2rem h-2rem border-round-md bg-white text-black'
      icon='pi pi-chevron-up text-black'
    />
  </>
)
