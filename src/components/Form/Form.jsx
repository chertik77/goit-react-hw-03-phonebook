import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  confirmForAddingNewUser,
  userIsAlreadyExistsByNumber,
} from '~/Notifications/Notifications';

export const Form = ({ contacts, newUser }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    const contactId = nanoid();

    if (isUserExistsByName(name)) {
      confirmForAddingNewUser(name, number, isUserExistsByNumber, contactId, addNewUser);
      return resetForm();
    } else if (isUserExistsByNumber(number)) {
      userIsAlreadyExistsByNumber(number);
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
        className='mb-2 block'
        onChange={({ target: { value } }) => setName(value)}
      />
      <input
        type='tel'
        value={number}
        name='number'
        required
        onChange={({ target: { value } }) => setNumber(value)}
      />
      <button type='submit' className='bg-orange-400'>
        Add contact
      </button>
    </form>
  );
};
