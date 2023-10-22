import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

export const showConfirmMessage = (message, name, number, contactId, newUser) =>
  Confirm.show(
    "Adding the same user",
    message,
    'Yes',
    'No',
    () => {
      newUser({contactId, name, number});
    },
    () => {},
    { width: '320px', titleMaxLength: 36, messageMaxLength: 112 }
  );
