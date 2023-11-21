import { App } from 'components/App'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PrimeReactProvider>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </PrimeReactProvider>
  </Provider>
)
