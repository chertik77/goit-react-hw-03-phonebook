import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from './authSlice'
import { contactsApi } from './services'

const authPersistConfig = { key: 'auth', storage, whitelist: ['token'] }
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [contactsApi.reducerPath]: contactsApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: { extraArgument: contactsApi }, serializableCheck: false }).concat(
      contactsApi.middleware
    )
})
setupListeners(store.dispatch)
export const persistor = persistStore(store)
