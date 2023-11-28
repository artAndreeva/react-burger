import type { Middleware, MiddlewareAPI } from 'redux';
import type { AppDispatch, RootState } from '../types/index';
import { TWSActions } from '../actions/ws';
import { getCookie } from '../../utils/cookie';
import {
  WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_END,
  WS_CONNECTION_START,
  WS_CONNECTION_END,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_ORDERS
} from '../actions/ws';

export type TWSStoreActions = {
  wsConnect: typeof WS_CONNECTION_START,
  wsDisconnect: typeof WS_CONNECTION_END,
  onOpen: typeof  WS_CONNECTION_SUCCESS,
  onClose: typeof WS_CONNECTION_CLOSED,
  onError: typeof  WS_CONNECTION_ERROR,
  onMessage: typeof  WS_GET_ORDERS,
};

export type TWSStoreAuthActions = {
  wsConnect: typeof WS_AUTH_CONNECTION_START,
  wsDisconnect: typeof WS_AUTH_CONNECTION_END,
  onOpen: typeof  WS_CONNECTION_SUCCESS,
  onClose: typeof WS_CONNECTION_CLOSED,
  onError: typeof  WS_CONNECTION_ERROR,
  onMessage: typeof  WS_GET_ORDERS,
};

export const socketMiddleware = (wsUrl: string, wsActions: TWSStoreActions | TWSStoreAuthActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TWSActions) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsConnect, wsDisconnect, onOpen, onClose, onError, onMessage } = wsActions;

      if (type === wsConnect && wsConnect === WS_CONNECTION_START) {
        socket = new WebSocket(`${wsUrl}/all`);
      }
      if (type === wsConnect && wsConnect !== WS_CONNECTION_START) {
        socket = new WebSocket(`${wsUrl}?token=${getCookie('accessToken')}`);
      }

      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, event });
        };

        socket.onerror = event => {
          dispatch({ type: onError, event });
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch({ type: onMessage, parsedData });
        };

        socket.onclose = () => {
          dispatch({ type: onClose });
        };
      }
      if (type === wsDisconnect) {
        socket?.close();
        dispatch({ type: onClose });
      }

      next(action);
    };
  }) as Middleware;
};

/* export const wsMiddleware = (wsUrl: string): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

    return next => (action: TWSActions) => {
      const { dispatch } = store;
      const { type } = action;

      if (type === 'WS_CONNECTION_START') {
        socket = new WebSocket(`${wsUrl}?token=${getCookie('accessToken')}`);
      }
      if (socket) {
        socket.onopen = event => {
          dispatch(wsConnectionSuccessAction(event));
        };
        socket.onerror = event => {
          dispatch(wsConnectionErrorAction(event));
        };
        socket.onmessage = event => {
          const { data } = event;
          const receivedData = JSON.parse(data)
          dispatch(wsGetOrdersAction(receivedData));
        };
        socket.onclose = event => {
          dispatch(wsConnectionClosedAction(event));
        };
      }

      next(action);
    };
    }) as Middleware;
}; */
