import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import './index.css';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './services/root-reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
