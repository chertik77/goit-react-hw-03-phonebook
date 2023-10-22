import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

export const showConfirmMessage = (title, message, name, number, contactId, newUser) =>
  Confirm.show(
    title,
    message,
    'Yes',
    'No',
    () => {
      newUser({contactId, name, number});
    },
    () => {},
    { width: '320px', titleMaxLength: 36, messageMaxLength: 112 }
  );
