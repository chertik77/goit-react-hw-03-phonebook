import { Contacts } from '~~/Contacts/Contacts'
import { Filter } from '~~/Filter/Filter'
import { Form } from './Form/Form'

export const App = () => {
  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('contacts')
  //   if (savedContacts !== null) {
  //     setContacts(JSON.parse(savedContacts))
  //   }
  // }, [])

  // useEffect(() => localStorage.setItem('contacts', JSON.stringify(contacts)), [contacts])

  // const visibleItems = () =>
  //   contacts.filter(
  //     ({ name, number }) =>
  //       name.toLowerCase().includes(filter.toLowerCase()) || number.split('-').join('').includes(filter)
  //   )

  return (
    <>
      <h1 className='mb-10 text-center font-serif text-4xl text-white'>PhoneBook</h1>
      <Form />
      <Filter />
      <Contacts />
    </>
  )
}
