import { isUserExistsByName, isUserExistsByNumber } from './isUserExists'

export const userExistsMessage = (entitites, { name, number }) =>
  isUserExistsByName(entitites, name) && isUserExistsByNumber(entitites, number)
    ? `A user with the name ${name} and number ${number} already exists. Do you still want to add ${name}?`
    : isUserExistsByName(entitites, name)
    ? `A user with the name ${name} already exists. Do you still want to add ${name}?`
    : isUserExistsByNumber(entitites, number)
    ? `A user with the number ${number} already exists. Do you still want to add ${name}?`
    : ''
