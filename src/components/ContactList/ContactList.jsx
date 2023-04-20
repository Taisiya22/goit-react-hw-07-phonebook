// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operations';
import {  getContact,filterContact } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(filterContact);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            {name}: {number}
            <button
              className={css.deleteBtn}
              onClick={() => dispatch(deleteContact({ id }))}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
