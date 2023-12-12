import type { Middleware, MiddlewareAPI } from 'redux';
import type { AppDispatch, RootState } from '../types/index';
import {
  WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_END,
  WS_CONNECTION_START,
  WS_CONNECTION_END,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_ORDERS,
} from '../actions/ws';
import { refreshToken } from '../actions/auth';
import { getCookie } from '../../utils/cookie';

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

export const socketMiddleware = (wsActions: TWSStoreAuthActions | TWSStoreActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    let isConnected = false;
    let reconnectTimer = 0;
    let wsUrl = '';
    let end = '';

    return next => (action) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsConnect, wsDisconnect, onOpen, onClose, onError, onMessage } = wsActions;

      if (type === wsConnect) {
        wsUrl = action.payload.wsUrl;
        end = action.payload.end;
        socket = new WebSocket(`${wsUrl}${end}`);
        isConnected = true;
        console.log(wsConnect)
      }

      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, event: event.type });
        };

        socket.onerror = event => {
          dispatch({ type: onError, event: event.type });
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          if (parsedData.message === 'Invalid or missing token') {
            dispatch(refreshToken());
            dispatch({ type: onClose });
            reconnectTimer = window.setTimeout(() => {
              dispatch({ type: wsConnect, payload: { wsUrl, end: `?token=${getCookie('accessToken')}` }});
              console.log(wsConnect)
            }, 3000)
          } else {
            dispatch({ type: onMessage, parsedData });
          }
        };

        socket.onclose = () => {
          dispatch({ type: onClose });

          if (isConnected) {
            reconnectTimer = window.setTimeout(() => {
              dispatch({ type: wsConnect, payload: { wsUrl, end }});
              console.log(wsConnect)
            }, 3000)
          }
        };
      }

      if (type === wsDisconnect) {
        if (socket?.readyState === 1) {
          socket?.close();
          dispatch({ type: onClose });
          clearTimeout(reconnectTimer)
          isConnected = false;
          reconnectTimer = 0;
          wsUrl = '';
          end = '';
          console.log(wsDisconnect)
        }
      }
      next(action);
    };
  }) as Middleware;
};
