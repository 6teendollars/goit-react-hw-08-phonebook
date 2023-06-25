import { useEffect, useState } from 'react';
import { useDispatch /**useSelector**/ } from 'react-redux';

import { FormContaks } from 'components/form/FormContaks';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import { fetchContacts } from 'redux/contacts/contactOperetion';
import { Modal } from 'components/modal/Modal';


const Contacts = () => {
  const [showModal, setShowModal] = useState(false);
  const [contactId, setContactId] = useState(null);

  const updateModal = id => {
    setShowModal(true);
    setContactId(id);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Phonebook</h2>
      <FormContaks />
      <h2>Contacts</h2>
      <Filter />
      <ContactList updateModal={updateModal} />
      {showModal && <Modal id={contactId} closeModal={closeModal} />}
    </>
  );
};

export default Contacts;
