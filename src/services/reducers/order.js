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

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_ORDER_REQUEST: {
      return {
        ...state,
        sendOrderRequest: true
      };
    }
    case SEND_ORDER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.payload,
        sendOrderRequest: false,
        sendOrderFailed: false
      };
    }
    case SEND_ORDER_FAILED: {
      return {
        ...state,
        sendOrderRequest: false,
        sendOrderFailed: true
      };
    }
    default: {
      return state
    }
  }
};
