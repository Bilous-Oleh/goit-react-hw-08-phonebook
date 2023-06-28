import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/slice';
import { persistedContactsReducer } from './contacts/contactsSlice';
import { persistedFilterReducer } from './contacts/filterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = {
  contacts: persistedContactsReducer,
  filter: persistedFilterReducer,
  auth: persistReducer(authPersistConfig, authReducer),
};

const middleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };

// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { persistedFilterReducer } from './contacts/filterSlice';
// import { persistedContactsReducer } from './contacts/contactsSlice';
// import { configureStore } from '@reduxjs/toolkit';

// const reducer = {
//   contacts: persistedContactsReducer,
//   filter: persistedFilterReducer,
// };

// const store = configureStore({
//   reducer: reducer,
// middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// const persistor = persistStore(store);

// export { store, persistor };
