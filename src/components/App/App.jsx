import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import css from './App.module.css';
import { getAllContacts} from 'redux/selectors';
import { getIsLoading, getError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';


export const App = () => {
  // const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.wrapper}>
      <Section title="Phone book">
        <Form />
      </Section>
      {/* {contacts.length > 0 &&  */}
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
      {isLoading && <div>Loading...</div> }
       {/* }  */}
    </div>
  );
};
