import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './store/reducers'

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)