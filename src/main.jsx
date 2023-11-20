import { App } from 'components/App'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'redux/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PrimeReactProvider>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter basename={import.meta.env.MODE === 'production' ? '/goit-react-hw-08-phonebook' : ''}>
          <App />
        </HashRouter>
      </PersistGate>
    </PrimeReactProvider>
  </Provider>
)
