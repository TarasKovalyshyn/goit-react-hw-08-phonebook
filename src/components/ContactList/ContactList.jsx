import css from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
// import { useSelector } from 'react-redux';
const ContactList = ({ contacts, onRemoveContact }) => {
  // const contacts = useSelector(state => state.contacts.contacts);
  return (
    <ul className={css.list__items}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onRemoveContact={onRemoveContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
