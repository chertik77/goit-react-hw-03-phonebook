import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

export const showConfirmMessage = message =>
  new Promise(resolve =>
    Confirm.show(
      'Adding the same user',
      message,
      'Yes',
      'No',
      () => {
        resolve();
      },
      () => {},
      { width: '320px', titleMaxLength: 36, messageMaxLength: 112 }
    )
  );
