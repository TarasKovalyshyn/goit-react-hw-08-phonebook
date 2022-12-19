import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  // За допомогою методу "addContact" ми будемо додавати нові контакти.
  // Для цього нам потрібно створити новий масив, в масиві створюємо новий обєкт, в якому генеруємо унікальний "id",
  // розпиляємо об'єкт, який отримали в "contact", після чого ми розпиляємо старий масив "contacts" зі "prevState",
  // тобто попереднього "state"

  addContact = contact => {
    // Методом 'some' перебираємо масив, робимо до нижнього регістру, після чого прирівнюємо
    // значення 'name' зі "state" та то яке ми отримали з інпуту у 'Filter',
    // вразі співпадіння кидаємо 'alert', що такий контакт вже існує в 'state'
    const isIncontacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isIncontacts) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  // Метод, який відповідає за видалення контактів
  // отримуємо значення "id" з 'ContactList',
  // після чого фільтруємо значення які в нас є в 'prevState'
  // і прирівнюємо " id " які ми повернули з 'ContactList',
  // у випадку якщо 'id' співпали, видаляємо
  removeContacts = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => {
          return contact.id !== contactId;
        }),
      };
    });
  };
  componentDidMount() {
    const contact = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contact);
    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contact) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div style={{ width: '300px', marginLeft: '15px' }}>
        <h1>Phonebook</h1>
        {/* За допомогою props "onSubmit" передаємо метод "addContact" в  "handleSubmit", 
        яку після сабміту будемо викликати */}
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts </h2>

        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          // За допомогою пропса "onRemoveContact" передаємо метод на кнопку,
          // який запускаємо за допомогою анонімної стрілочної функції
          onRemoveContact={this.removeContacts}
        />
      </div>
    );
  }
}

export default App;
