import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import allReducers from './reducers';
import { AuthProvider } from './context/signIn';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(allReducers)



ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
