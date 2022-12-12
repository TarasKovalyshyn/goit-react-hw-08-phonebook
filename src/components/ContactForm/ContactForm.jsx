import css from './ContactForm.module.css';
import React, { Component } from 'react';

class ContactForm extends Component {
  // Створюємо state, для збереження value з інпутів "name" та "number",
  // потім ми ті значення за допомогою props будемо передавати в ф-цію "addContact"
  state = {
    name: '',
    number: '',
  };

  //   За допомогою ключа [name] отримуємо value з input
  //   (name: value, number: value) та записуємо в "state"
  //   Робимо деструктуризацію
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  //   Створюємо метод для сабміту форми,
  //   відключаємо перезавантаження сторінки
  // та додаємо очищення input після сабміту
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    // Викликаємо метод який ми передавали за допомогою props і
    // передаємо значення які збереглися в state після сабміту форми, а саме "name" та "number"
    this.props.onSubmit({ name, number });
    this.reset();
  };

  //   Функція для очищення інпуту
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.lable}>
            Name
            <input
              className={css.inputContact}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label className={css.lable}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
