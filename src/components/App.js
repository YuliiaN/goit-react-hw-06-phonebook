import Section from './Section/Section';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const selectedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section title="Phonebook">
        <Form></Form>
      </Section>
      <Section title="Contacts">
        {contacts.length ? (
          <>
            <Filter title="Find contacts by name" />
            <ContactsList currentContacts={selectedContacts} />
          </>
        ) : (
          <p>Your phonebook is empty</p>
        )}
      </Section>
    </>
  );
};
