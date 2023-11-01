export const isUserExistsByName = (contacts, name) =>
  contacts.some(contact => {
    const contactNameToCheck = contact.name.toLowerCase()
    const inputNameToCheck = name.toLowerCase()
    return contactNameToCheck.split(' ').includes(inputNameToCheck)
  })

export const isUserExistsByNumber = (contacts, number) => contacts.some(contact => contact.number === number)
