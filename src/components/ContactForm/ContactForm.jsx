import css from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isInСontacts = contacts.some(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );

    if (isInСontacts) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContacts({ name, number }));

    reset();
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.contactsLable}>Contact name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
          placeholder="Mango..."
          className={css.contactsInput}
        />

        <label className={css.contactsLable}>Phone</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
          placeholder="+1111111111111"
          className={css.contactsInput}
        />
        <button type="submit" className={css.addContacts}>
        Add contact
      </button>
      </form>
      
    </div>
  );
};
export default ContactForm;
