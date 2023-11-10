import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactReducer } from './contactsSlice'
import { filterReducer } from './filterSlice'
import { contactsTransform } from './transform'

const rootReducer = combineReducers({ contacts: contactReducer, filter: filterReducer })
const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter', '_persist'],
  transforms: [contactsTransform]
}

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})
export const persistor = persistStore(store)
