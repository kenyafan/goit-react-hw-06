import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchStr = useSelector(selectFilter);

  const getFilteredUsers = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  };
  const filteredContacts = getFilteredUsers();

  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={s.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
