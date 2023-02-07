import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import css from './ContactsItem.module.css';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contactsItem}>
      {name + ': ' + phone}
      <button
        className={css.delete__contacts}
        type="button"
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </button>
    </li>
  );
};
export default ContactItem;
