import '../styles/globals.scss'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import store, {persistor} from './helpers/redux/store'

/* const persistor = persistStore(store) */

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider >
  )
}

export default MyApp
