import { Confirm } from 'notiflix/build/notiflix-confirm-aio'

export const showConfirmMessage = () =>
  new Promise<void>(resolve =>
    Confirm.show(
      'Adding the same user',
      'Do you want to add the same user?',
      'Yes',
      'No',
      () => {
        resolve()
      },
      () => {},
      { width: '320px', titleMaxLength: 36, messageMaxLength: 112 }
    )
  )
