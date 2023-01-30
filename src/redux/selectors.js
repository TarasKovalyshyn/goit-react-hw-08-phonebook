export const selekectContacts = state => state.contacts.items;
export const selekectFilter = state => state.contacts.filter;

export const getContacts = state => state.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
