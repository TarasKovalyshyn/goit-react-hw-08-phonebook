import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
const contactSlice = createSlice({
  name: 'Phone Book',
  initialState: {
    conatcts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact(state, action) {
      console.log(state);
      console.log(action);
      state.conatcts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    removeContacts(state, action) {},
    changeFilter(state, action) {},
  },
});
export const { addContact, removeContacts, changeFilter } =
  contactSlice.actions;
export default contactSlice.reducer;
