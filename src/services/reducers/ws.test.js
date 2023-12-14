import { wsReducer, initialState } from './ws';
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

const payload = {
  wsUrl: '',
  end: ''
}

const orders = {
  success: true,
  orders: [{
    ingredients: ['', ''],
    _id: '',
    status: '',
    number: 123,
    createdAt: '',
    updatedAt: '',
    name: '',
    owner: '',
    __v: 123,
  }],
  total: 123,
  totalToday: 123,
}

const type = '';

describe('websocket reducer', () => {

  it('should return the initial state', () => {
    const received = wsReducer(undefined, {});
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

  it('should handle WS_AUTH_CONNECTION_START', () => {
    const received = wsReducer(initialState, {
      type: WS_AUTH_CONNECTION_START,
      payload: payload
    });
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

  it('should handle WS_AUTH_CONNECTION_END', () => {
    const received = wsReducer(initialState, {
      type: WS_AUTH_CONNECTION_END
    });
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

  it('should handle WS_CONNECTION_START', () => {
    const received = wsReducer(initialState, {
      type: WS_CONNECTION_START,
      payload: payload
    });
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

  it('should handle WS_CONNECTION_END', () => {
    const received = wsReducer(initialState, {
      type: WS_CONNECTION_END
    });
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

  it('should handle WS_CONNECTION_SUCCESS', () => {
    const received = wsReducer(initialState, {
      type: WS_CONNECTION_SUCCESS,
      event: type
    });
    const expected = {
      ...initialState,
      error: undefined,
      wsConnected: true
    };
    expect(received).toEqual(expected);
  })

  it('should handle WS_CONNECTION_ERROR', () => {
    const received = wsReducer(initialState, {
      type: WS_CONNECTION_ERROR,
      event: type
    });
    const expected = {
      ...initialState,
      error: type,
      wsConnected: false,
      orders: []
    };
    expect(received).toEqual(expected);
  })

  it('should handle WS_CONNECTION_CLOSED', () => {
    const received = wsReducer(initialState, {
      type: WS_CONNECTION_CLOSED,
    });
    const expected = {
      ...initialState,
      error: undefined,
      wsConnected: false,
      orders: []
    };
    expect(received).toEqual(expected);
  })

  it('should handle WS_GET_ORDERS', () => {
    const received = wsReducer(initialState, {
      type: WS_GET_ORDERS,
      parsedData: orders
    });
    const expected = {
      ...initialState,
      error: undefined,
      orders: orders.orders,
      total: orders.total,
      totalToday: orders.totalToday
    };
    expect(received).toEqual(expected);
  })

})
