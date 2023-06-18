import css from './ContactsList.module.css';
import { deleteContact, fetchAllContacts } from 'redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { useEffect } from 'react';

export function ContactsList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchAllContacts())
    }, [dispatch])
    
  return (
    <>
      <ul className={css.contacts}>
        {filteredContacts.map(contact => {
          return (
            <li className={css.contactItem} key={contact.id} id={contact.id}>
              <div>
                <span className={css.contactName}>{contact.name}:</span>
                <span className={css.contactNumber}>{contact.phone}</span>
              </div>
              <button
                className={css.buttonDelete}
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
