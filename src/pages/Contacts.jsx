import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { Filter } from 'components/Filter/Filter';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import ContactList from 'components/ContactList/ContactList';

// import { Loading } from './Loading/Loading';
import {
  addContactThunk,
  fetchContactsThunk,
  removeContactThunk,
} from '../redux/contacts/operation';
import { setFilter } from '../redux/contacts/filterSlice';
import { useAuth } from '../hooks';
import { Loading } from 'components/Loading/Loading';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  const handleAddContact = contactData => {
    if (contacts.some(contact => contact.name === contactData.name)) {
      toast.error(`Contact with ${contactData.name} already exists`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      return;
    }
    dispatch(addContactThunk(contactData));
  };

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(fetchContactsThunk());
  }, [dispatch, isLoggedIn]);

  const getFilteredContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = id => {
    dispatch(removeContactThunk(id));
  };

  const handleFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const filteredContacts = getFilteredContact();

  return (
    <div>
      <PhonebookForm onSubmit={handleAddContact}></PhonebookForm>
      <Filter value={filter} onChange={handleFilter} />
      {isLoading && <Loading />}
      <ContactList
        contacts={filteredContacts}
        onDelete={handleDeleteContact}
      ></ContactList>
      <ToastContainer />
    </div>
  );
};

export default App;
