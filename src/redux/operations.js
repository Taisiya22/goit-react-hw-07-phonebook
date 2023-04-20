import { createAsyncThunk } from "@reduxjs/toolkit";

import *as api from 'services/api'


export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const contacts  = await api.fetchContacts();
      return contacts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const contacts = await api.addContact(newContact);
      return contacts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
 "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const contacts = await api.deleteContact(contactId);
      return contacts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


