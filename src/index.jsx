import { PrimeReactProvider } from 'primereact/api'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { App } from '~/components/App'
import { persistor, store } from '~/redux/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PrimeReactProvider value={{ unstyled: true }}>
          <App />
        </PrimeReactProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
)
