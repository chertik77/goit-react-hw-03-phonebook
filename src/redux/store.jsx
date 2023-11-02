import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactReducer } from './contactsSlice'

const persistConfig = { key: 'contacts', storage, blacklist: ['_persist'] }

export const store = configureStore({
  reducer: persistReducer(persistConfig, contactReducer),
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})
export const persistor = persistStore(store)
