import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { selectAllContact } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectAllContact);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
