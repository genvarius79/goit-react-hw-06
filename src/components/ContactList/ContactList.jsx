import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filtersSlice';

export default function ContactList() {
  const items = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredEl = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {filteredEl.map(item => {
        return (
          <li key={item.id}>
            <Contact item={item} />
          </li>
        );
      })}
    </ul>
  );
}
