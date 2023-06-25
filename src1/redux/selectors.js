import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectFilterValue = state => state.filter;

export const selectFilteredContacts = createSelector([selectContacts, selectFilterValue], (contacts, filter) => {

  if (contacts && filter) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
  }
  return contacts
})