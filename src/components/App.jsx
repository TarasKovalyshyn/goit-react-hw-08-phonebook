import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import { getError, getIsLoading } from '../redux/selectors';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ width: '300px', marginLeft: '15px' }}>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts </h2>
      {isLoading && !error && <b>Loading contacts...</b>}

      {/* <Filter />  */}

      <ContactList />
    </div>
  );
};

export default App;
