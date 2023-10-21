import { useState, useEffect } from 'react';
import { Form } from '~~/Form/Form';
import { Filter } from '~~/Filter/Filter';
import { Contacts } from '~~/Contacts/Contacts';
import users from '~/Users/users.json';

export const App = () => {
  const [contacts, setContacts] = useState(users);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => localStorage.setItem('contacts', JSON.stringify(contacts)), [contacts]);

  const changeFilter = value => setFilter(value);

  const addNewUser = newUser => setContacts(s => [newUser, ...s]);

  const visibleItems = () =>
    contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        number.split('-').join('').includes(filter)
    );

  const deleteItem = id => setContacts(s => s.filter(contact => contact.id !== id));

  return (
    <>
      <h1 className='mb-10 text-center font-serif text-4xl text-white'>PhoneBook</h1>
      <Form contacts={contacts} newUser={addNewUser} />
      <Filter onChangeFilter={changeFilter} />
      <Contacts title='Contacts:' items={visibleItems()} onDeleteItem={deleteItem} />
    </>
  );
};
