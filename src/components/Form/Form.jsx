import { useState } from 'react';
import { nanoid } from 'nanoid';
import { showConfirmMessage } from '~/Notifications/Notifications';

export const Form = ({ contacts, newUser }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    const contactId = nanoid();

    if (isUserExistsByName(name) && isUserExistsByNumber(number)) {
      showConfirmMessage(
        `Do you want to add the same user? You already have ${name} - ${number} in your phonebook.`,
        name,
        number,
        contactId,
        newUser
      );
    } else if (isUserExistsByName(name)) {
      showConfirmMessage(
        `Do you want to add a user with the same name? You already have ${name} in your phonebook.`,
        name,
        number,
        contactId,
        newUser
      );
    } else if (isUserExistsByNumber(number)) {
      showConfirmMessage(
        `Do you want to add a user with the same number? You already have ${name} with number ${number} in your phonebook.`,
        name,
        number,
        contactId,
        newUser
      );
    } else {
      newUser({ contactId, name, number });
    }
    resetForm();
  };

  const isUserExistsByName = name =>
    contacts.some(contact => {
      const contactNameToCheck = contact.name.toLowerCase();
      const inputNameToCheck = name.toLowerCase();
      return contactNameToCheck.split(' ').includes(inputNameToCheck);
    });

  const isUserExistsByNumber = number => contacts.some(contact => contact.number === number);

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
