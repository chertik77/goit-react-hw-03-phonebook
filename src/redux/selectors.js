import { createSelector } from '@reduxjs/toolkit'

export const selectContactsInfo = state => state.contacts
export const selectContacts = state => state.contacts.items
export const selectFilter = state => state.filter

export const filteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) =>
  contacts.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(filter.toLowerCase()) || phone.split('-').join('').includes(filter)
  )
)
