import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

export const showConfirmMessage = (title, message, name, number, contactId, addNewUser) =>
  Confirm.show(
    title,
    message,
    'Yes',
    'No',
    () => {
      addNewUser(contactId, name, number);
    },
    () => {},
    { width: '320px', titleMaxLength: 36, messageMaxLength: 112 }
  );
