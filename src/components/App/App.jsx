import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { selectContact, selectErorr, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';

import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErorr);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.wrapper}>
      <Section title="Phone book">
        <Form />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      )}
      {isLoading && !error && <Loader />}
    </div>
  );
};
