import { useSelector, useDispatch } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactsSlice";
import { changeFilter, selectFilter } from "./redux/filtersSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import "../src/index.css";

const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values.username, values.tel));
    actions.resetForm();
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <SearchBox valuee={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
