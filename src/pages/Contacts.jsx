import { ContactsFilter } from 'components/Contacts/ContactsFilter'
import { ContactsForm } from 'components/Contacts/ContactsForm'
import { ContactsList } from 'components/Contacts/ContactsList'
import { useState } from 'react'
import { useGetContactsQuery } from 'redux/services'
import { Error } from 'utils/ui/error'
import { Spinner } from 'utils/ui/Loader'

const Contacts = () => {
  const [filter, setFilter] = useState('')
  const { data, isLoading, error } = useGetContactsQuery()

  const filteredContacts = () =>
    data
      ?.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(filter.toLowerCase()) || number.split('-').join('').includes(filter)
      )
      .reverse()

  return (
    <>
      <h1 className='mb-10 text-center text-4xl mt-40'>PhoneBook</h1>
      <ContactsForm />
      <ContactsFilter onChange={setFilter} items={data} />
      <h2 className='text-center text-3xl mb-5'>
        {!data?.length ? 'Add someone to start' : 'Your Contacts'}
      </h2>
      <Spinner isLoading={isLoading} />
      <Error error={error} />
      <ContactsList filteredContacts={filteredContacts} />
    </>
  )
}

export default Contacts
