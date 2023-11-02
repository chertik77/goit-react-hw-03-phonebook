import { Contacts } from '~~/Contacts/Contacts'
import { Filter } from '~~/Filter/Filter'
import { Form } from './Form/Form'

export const App = () => {
  // const visibleItems = () =>
  //   contacts.filter(
  //     ({ name, number }) =>
  //       name.toLowerCase().includes(filter.toLowerCase()) || number.split('-').join('').includes(filter)
  //   )

  return (
    <>
      <Form />
      <Filter />
      <Contacts />
    </>
  )
}
