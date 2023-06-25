import { useState } from 'react';
import Notiflix from 'notiflix';
import css from './PhonebookForm.module.css';
import { addContact } from 'redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export function PhonebookForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.some(item => item.name === name)) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  return (
    <form className={css.formContact} onSubmit={handleSubmit}>
      <label className={css.labelContact}>
        Name
        <input
          className={css.inputContact}
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.labelContact}>
        Phone
        <input
          className={css.inputContact}
          onChange={handleChange}
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button}>Add contact</button>
    </form>
  );
}
