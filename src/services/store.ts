import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import { TWSStoreActions, socketMiddleware } from './middleware/ws-middleware';
import { WS_URL } from '../constants/constants';
import thunk from 'redux-thunk';
import {
  WS_CONNECTION_START,
  WS_CONNECTION_END,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_ORDERS
} from './actions/ws';

const wsActions: TWSStoreActions = {
  wsConnect: WS_CONNECTION_START,
  wsDisconnect: WS_CONNECTION_END,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ORDERS,
};

const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(WS_URL, wsActions)));

export const store = createStore(rootReducer, enhancer);
