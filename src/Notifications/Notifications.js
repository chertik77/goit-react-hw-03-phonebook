import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const confirmForAddingSameUser = (name, number, contactId, addNewUser) =>
  Confirm.show(
    'Adding the same user',
    `Do you want to add same user? 
        You already have ${name} - ${number} in your phonebook.`,
    'Yes',
    'No',
    () => {
      addNewUser(contactId, name, number);
    }
  );

const confirmForAddingSameUserName = (name, number, contactId, addNewUser) =>
  Confirm.show(
    'Adding the user with the same name',
    `Do you want to add user with the same name? 
        You already have ${name} in your phonebook.`,
    'Yes',
    'No',
    () => {
      addNewUser(contactId, name, number);
    }
  );
const confirmForAddingSameUserNumber = (name, number, contactId, addNewUser) =>
  Confirm.show(
    'Adding the user with the same number',
    `Do you want to add user with the same number? 
        You already have ${name} with number ${number} in your phonebook.`,
    'Yes',
    'No',
    () => {
      addNewUser(contactId, name, number);
    },
    () => {},
    {
      width: '320px',
      titleMaxLength: 36,
      messageMaxLength: 112,
    }
  );

export { confirmForAddingSameUser, confirmForAddingSameUserName, confirmForAddingSameUserNumber };
