import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import { selectError, selectIsLoading } from '../redux/selectors';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
console.log(error)
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ width: '300px', marginLeft: '15px' }}>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts </h2>
      <Filter />

      {isLoading && !error && <b>Loading contacts...</b>}
      {ContactList ? <ContactList /> : ''}
    </div>
  );
};

export default App;
