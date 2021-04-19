import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

export const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <>
      {filtered === null
        ? contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </>
  );
};

export default Contacts;
