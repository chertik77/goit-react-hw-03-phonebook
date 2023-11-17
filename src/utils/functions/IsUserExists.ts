export const isUserExistsByName = (contacts: object[], name: string) => {
  return contacts.some(contact => {
    const contactNameToCheck = contact.name.toLowerCase()
    const inputNameToCheck = name.toLowerCase()
    return contactNameToCheck.split(' ').includes(inputNameToCheck)
  })
}

export const isUserExistsByNumber = (contacts, number) => {
  return contacts.some(contact => contact.number === number)
}
