import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactsSlice';
export default configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
