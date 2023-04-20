import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { contactsFilter } from 'redux/filterSlice';
import { filterContact } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterContact);
  return (
    <label className={css.search}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(contactsFilter(e.target.value.toLowerCase()))}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
