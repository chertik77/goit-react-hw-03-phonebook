import { useState } from 'react';
import { nanoid } from 'nanoid';
import { showConfirmMessage } from '~/Notifications/Notifications';
import { isUserExistsByName, isUserExistsByNumber } from '../../helpers/IsUserExists';

export const Form = ({ contacts, newUser }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const hasSameUserName = isUserExistsByName(contacts, name);
    const hasSameUserNumber = isUserExistsByNumber(contacts, number);

    if ((hasSameUserName && hasSameUserNumber) || hasSameUserName || hasSameUserNumber) {
      showConfirmMessage(
        `Do you want to add the same user? You already have ${name} - ${number} in your phonebook.`
      ).then(() => {
        newUser({ id, name, number });
      });
    } else {
      newUser({ id, name, number });
    }
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
