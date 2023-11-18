import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore } from 'redux-persist'
import { contactsApi } from './services'

export const store = configureStore({
  reducer: { [contactsApi.reducerPath]: contactsApi.reducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: { extraArgument: contactsApi }, serializableCheck: false }).concat(
      contactsApi.middleware
    )
})
setupListeners(store.dispatch)
export const persistor = persistStore(store)
