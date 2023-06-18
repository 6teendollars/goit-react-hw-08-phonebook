import css from './App.module.css';
import { PhonebookForm } from './Form/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export function App() {

  return (
    <div>
      <div className={css.wrapper}>
        <h1 className={css.titleForm}>Phonebook</h1>
      <PhonebookForm />
      </div>
      <h2 className={css.titleContacts}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
