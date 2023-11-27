import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import { wsMiddleware } from './middleware/ws-middleware';
import { WS_URL } from '../constants/constants';
import thunk from 'redux-thunk';

/* const wsActions: TWSStoreActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
}; */

const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, wsMiddleware(WS_URL)));

export const store = createStore(rootReducer, enhancer);
