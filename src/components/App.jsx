import { Contacts } from 'components/Contacts/Contacts'
import { Filter } from 'components/Contacts/ContactsFilter'
import { Form } from 'components/Contacts/ContactsForm'
import 'primeicons/primeicons.css'
import { ConfirmDialog } from 'primereact/confirmdialog'
import { ScrollTop } from 'primereact/scrolltop'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useGetContactsQuery } from 'redux/services'

export const App = () => {
  const [filter, setFilter] = useState('')
  const { data, isLoading, error } = useGetContactsQuery()

  const handleFilterContacts = () =>
    data
      ?.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(filter.toLowerCase()) || number.split('-').join('').includes(filter)
      )
      .reverse()

  return (
    <>
      <h1 className='mb-10 text-center text-4xl'>PhoneBook</h1>
      <Form data={data} />
      <Filter onChange={setFilter} filter={filter} />
      <Contacts isLoading={isLoading} error={error} filteredContacts={handleFilterContacts} />
      <Toaster />
      <ConfirmDialog />
      <ScrollTop
        className='w-2rem h-2rem border-round-md bg-white text-black'
        icon='pi pi-chevron-up text-black'
      />
    </>
  )
}
