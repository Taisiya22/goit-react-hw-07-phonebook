// import { createSelector } from "@reduxjs/toolkit";

export const getContact = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const filterContact = state => state.filter;

// export const getAllContacts = createSelector([getContact, filterContact], (contacts, filter) => {
//     // console.log(contacts)
//     // console.log(filter)
//     return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())
//           )
// });