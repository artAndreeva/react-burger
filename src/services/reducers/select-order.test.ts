import { selectedOrderReducer } from './selected-order';
import {
  GET_SELECTED_ORDER_REQUEST,
  GET_SELECTED_ORDER_SUCCESS,
  GET_SELECTED_ORDER_FAILED
} from '../actions/selected-order';
import { TOrder } from '../../types/types';

const initialState = {
  order: {} as TOrder,
  getSelectedOrderRequest: false,
  getSelectedOrderFailed: false,
  getSelectedOrderSuccess: false
}

const order = {
  ingredients: ['', ''],
  _id: '',
  status: '',
  number: 123,
  createdAt: '',
  updatedAt: '',
  name: '',
  owner: '',
  __v: 123,
};

describe('selected order reducer', () => {

  it('should return the initial state', () => {
    const received = selectedOrderReducer(undefined, { type: undefined })
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

  it('should handle GET_SELECTED_ORDER_REQUEST', () => {
    const received = selectedOrderReducer(initialState, {
      type: GET_SELECTED_ORDER_REQUEST
    })
    const expected = {
      ...initialState,
      getSelectedOrderRequest: true,
      getSelectedOrderSuccess: false
    };
    expect(received).toEqual(expected);
  })

  it('should handle GET_SELECTED_ORDER_SUCCESS', () => {
    const received = selectedOrderReducer(initialState, {
      type: GET_SELECTED_ORDER_SUCCESS,
      order: order
    })
    const expected = {
      ...initialState,
      order: order,
      getSelectedOrderRequest: false,
      getSelectedOrderFailed: false,
      getSelectedOrderSuccess: true
    };
    expect(received).toEqual(expected);
  })

  it('should handle GET_SELECTED_ORDER_FAILED', () => {
    const received = selectedOrderReducer(initialState, {
      type: GET_SELECTED_ORDER_FAILED
    })
    const expected = {
      ...initialState,
      getSelectedOrderRequest: false,
      getSelectedOrderFailed: true,
      getSelectedOrderSuccess: false,
      order: {}
    };
    expect(received).toEqual(expected);
  })

})
