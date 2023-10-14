import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function confirmForAddingNewUser(name, number, contactId, isUserExistsByNumber, addNewUser) {
  return Confirm.show(
    'Adding the user with the same name',
    `Do you want to add new user with the name ${name}? 
        You already have ${name} in your phonebook.`,
    'Yes',
    'No',
    () => {
      if (isUserExistsByNumber(number)) {
        return userIsAlreadyExistsByNumber(number);
      }
      addNewUser(contactId, name, number);
    }
  );
}

function userIsAlreadyExistsByNumber(number) {
  return Notify.failure(`User with number ${number} is already exist in your phonebook!`);
}

export { confirmForAddingNewUser, userIsAlreadyExistsByNumber };
