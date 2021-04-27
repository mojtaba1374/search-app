import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import authReducer from './store/reducer';
// import AuthContextProvider from './Context/auth-context';

const store = createStore(authReducer);

const app = (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(app,
  document.getElementById('root')
);
