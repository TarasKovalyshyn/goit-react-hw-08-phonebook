import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import Filter from 'components/Filter/Filter';
import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsContainer}>
      <div>
        <HelmetProvider>
          <ContactForm />
          <Filter />
          <div>{isLoading && 'Request in progress...'}</div>
          <ContactList />
        </HelmetProvider>
      </div>
    </div>
  );
}
