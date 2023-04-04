import css from './MyContacts.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactsForm from '../../components/MyContacts/ContactsForm/ContactsForm';
import ContactsSearch from '../../components/MyContacts/ContactsSearch/ContactsSearch';
import ContactsList from '../../components/MyContacts/ContactsList/ContactsList';

const MyContacts = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.block}>
        <h2 className={css.title}>Phonebook</h2>
        <ContactsForm />
      </div>
      <div className={css.block}>
        <h2 className={css.title}>Contacts</h2>
        <ContactsSearch />
        {<ContactsList />}
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default MyContacts;
