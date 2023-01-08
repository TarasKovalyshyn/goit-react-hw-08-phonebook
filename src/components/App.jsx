import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useState, useEffect } from 'react';

const INITIAL_LIST = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? INITIAL_LIST;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const isIncontacts = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isIncontacts) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    setContacts(prevState => [...prevState, { id: nanoid(), ...contact }]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const removeContacts = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <div style={{ width: '300px', marginLeft: '15px' }}>
      <h1>Phonebook</h1>

      <ContactForm onSubmit={addContact} />

      <h2>Contacts </h2>

      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={visibleContacts}
        onRemoveContact={removeContacts}
      />
    </div>
  );
};

export default App;

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
// componentDidMount() {
// const contact = localStorage.getItem('contacts');
// const parsedContacts = JSON.parse(contact);
//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contact) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

// addContact = contact => {

//   const isIncontacts = this.state.contacts.some(
//     ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
//   );
//   if (isIncontacts) {
//     alert(`${contact.name} is already in contacts.`);
//     return;
//   }
//   this.setState(prevState => ({
//     contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
//   }));
// };
// changeFilter = e => {
//   this.setState({ filter: e.currentTarget.value });
// };
//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

// removeContacts = contactId => {
//   this.setState(prevState => {
//     return {
//       contacts: prevState.contacts.filter(contact => {
//         return contact.id !== contactId;
//       }),
//     };
//   });
// };

//   render() {
//     const { filter } = this.state;

//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <div style={{ width: '300px', marginLeft: '15px' }}>
//         <h1>Phonebook</h1>

//         <ContactForm onSubmit={this.addContact} />

//         <h2>Contacts </h2>

//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={visibleContacts}
//           onRemoveContact={this.removeContacts}
//         />
//       </div>
//     );
//   }
// }