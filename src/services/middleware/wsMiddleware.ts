import type { Middleware, MiddlewareAPI } from 'redux';
import type { AppDispatch, RootState } from '../types/index';
import { TWSActions } from '../actions/ws';
import { wsConnectionSuccessAction, wsConnectionErrorAction, wsConnectionClosedAction, wsGetOrdersAction } from '../actions/ws';

export const wsMiddleware = (wsUrl: string): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

    return next => (action: TWSActions) => {
      const { dispatch } = store;
      const { type } = action;

      if (type === 'WS_CONNECTION_START') {
        socket = new WebSocket(wsUrl);
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
};
