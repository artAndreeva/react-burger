import { orderReducer } from './order';
import {
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILED
} from '../actions/order';

const initialState = {
  orderNumber: 0,
  sendOrderRequest: false,
  sendOrderFailed: false
}

const number = 123;

describe('order reducer', () => {

  it('should return the initial state', () => {
    const received = orderReducer(undefined, { type: undefined })
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

  it('should handle SEND_ORDER_REQUEST', () => {
    const received = orderReducer(initialState, {
      type: SEND_ORDER_REQUEST
    })
    const expected = {
      ...initialState,
      sendOrderRequest: true
    };
    expect(received).toEqual(expected);
  })

  it('should handle SEND_ORDER_SUCCESS', () => {
    const received = orderReducer(initialState, {
      type: SEND_ORDER_SUCCESS,
      number: number
    })
    const expected = {
      ...initialState,
      orderNumber: number,
      sendOrderRequest: false,
      sendOrderFailed: false
    };
    expect(received).toEqual(expected);
  })

  it('should handle SEND_ORDER_FAILED', () => {
    const received = orderReducer(initialState, {
      type: SEND_ORDER_FAILED
    })
    const expected = {
      ...initialState,
      sendOrderRequest: false,
      sendOrderFailed: true,
      orderNumber: 0
    };
    expect(received).toEqual(expected);
  })

})
