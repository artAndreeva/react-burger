import {
  WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_END,
  WS_CONNECTION_START,
  WS_CONNECTION_END,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS
} from '../actions/ws';
import type { TWSActions, TWSAuthActions } from '../actions/ws';
import { TOrder } from '../../types/types';

type TWSState = {
  wsConnected: boolean;
  orders: TOrder[];
  error?: Event;
  total: number;
  totalToday: number;
}

const initialState: TWSState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0
};

export const wsReducer = (state = initialState, action: TWSActions | TWSAuthActions): TWSState => {
  switch (action.type) {
    case WS_AUTH_CONNECTION_START: {
      return {
        ...state,
      }
    }
    case WS_AUTH_CONNECTION_END: {
      return {
        ...state,
      }
    }
    case WS_CONNECTION_START: {
      return {
        ...state,
      }
    }
    case WS_CONNECTION_END: {
      return {
        ...state,
      }
    }
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        error: undefined,
        wsConnected: true
      }
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        error: action.event,
        wsConnected: false
      }
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        error: undefined,
        wsConnected: false,
        orders: []
      }
    }
    case WS_GET_ORDERS: {
      return {
        ...state,
        error: undefined,
        orders: action.parsedData.orders,
        total: action.parsedData.total,
        totalToday: action.parsedData.totalToday
      }
    }
    default: {
      return state;
    }
  }
};
