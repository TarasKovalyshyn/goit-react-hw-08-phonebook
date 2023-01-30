import css from './ContactList.module.css';

import ContactItem from '../ContactItem/ContactItem';

import { useSelector } from 'react-redux';
import { selekectContacts, selekectFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selekectContacts);
  const filter = useSelector(selekectFilter);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.list__items}>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
