import { ContactsFilter, ContactsForm, ContactsList, UserMenu } from 'components/pages'
import { useState } from 'react'
import { useGetContactsQuery } from 'redux/services'
import { Loader } from 'utils/ui/Loader'

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
      <UserMenu />
      <h1 className='mb-10 text-center text-4xl mt-40'>PhoneBook</h1>
      <ContactsForm entitites={data} />
      <ContactsFilter onChange={setFilter} items={data} />
      <h2 className='text-center text-3xl mb-5'>
        {!data?.length ? 'Add someone to start' : 'Your Contacts'}
      </h2>
      <Loader isLoading={isLoading} />
      {error && (
        <p className='text-center text-2xl mb-5 p-10'>
          We're sorry, but something went wrong. Please try again.
        </p>
      )}
      <ContactsList filteredContacts={filteredContacts} />
    </>
  )
}

export default Contacts
