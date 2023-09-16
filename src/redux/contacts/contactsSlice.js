import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  addContactThunk,
  fetchContactsThunk,
  removeContactThunk,
} from '../contacts/operation';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: '',
  },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts = [...state.contacts, action.payload];
        state.isLoading = false;
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(removeContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeContactThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
        state.isLoading = false;
      })
      .addCase(removeContactThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['contacts'],
  blacklist: ['contacts'],
};
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
