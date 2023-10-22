import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

export const showConfirmMessage = (name, number, contactId, newUser) =>
  Confirm.show(
    'Adding the same user',
    `Do you want to add the same user? You already have ${name} - ${number} in your phonebook.`,
    'Yes',
    'No',
    () => {
      newUser({ contactId, name, number });
    },
    () => {},
    { width: '320px', titleMaxLength: 36, messageMaxLength: 112 }
  );
