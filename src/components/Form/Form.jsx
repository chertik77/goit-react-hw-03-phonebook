import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  confirmForAddingSameUser,
  confirmForAddingSameUserName,
  confirmForAddingSameUserNumber,
} from '~/Notifications/Notifications';

export const Form = ({ contacts, newUser }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    const contactId = nanoid();

    if (isUserExistsByName(name) && isUserExistsByNumber(number)) {
      confirmForAddingSameUser(name, number, contactId, addNewUser);
      return resetForm();
    } else if (isUserExistsByName(name)) {
      confirmForAddingSameUserName(name, number, contactId, addNewUser);
      return resetForm();
    } else if (isUserExistsByNumber(number)) {
      confirmForAddingSameUserNumber(name, number, contactId, addNewUser);
      return resetForm();
    } else {
      addNewUser(contactId, name, number);
    }
  };

  const isUserExistsByName = name =>
    contacts.some(contact => {
      const contactNameToCheck = contact.name.toLowerCase();
      const inputNameToCheck = name.toLowerCase();
      return contactNameToCheck.split(' ').includes(inputNameToCheck);
    });

  const isUserExistsByNumber = number => contacts.some(contact => contact.number === number);

  const addNewUser = (id, name, number) => {
    newUser({ id, name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        value={name}
        name='name'
        required
        className='mx-auto mb-4 block h-9 rounded p-2 font-serif placeholder:text-sm'
        placeholder='Enter name'
        onChange={({ target: { value } }) => setName(value)}
      />
      <input
        type='tel'
        value={number}
        name='number'
        required
        className='mx-auto mb-6 block h-9 rounded p-2 font-serif placeholder:text-sm'
        placeholder='Enter number'
        onChange={({ target: { value } }) => setNumber(value)}
      />
      <button
        type='submit'
        className='mx-auto block rounded-md bg-orange-400 px-5 py-2 font-serif text-white'
      >
        Add contact
      </button>
    </form>
  );
};
