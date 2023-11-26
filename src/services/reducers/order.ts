import {
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILED
} from '../actions/order';
import { TOrderActions } from '../actions/order';

type TOrderState = {
  orderNumber: number,
  sendOrderRequest: boolean,
  sendOrderFailed: boolean
}

const initialState: TOrderState = {
  orderNumber: 0,
  sendOrderRequest: false,
  sendOrderFailed: false
}

export const orderReducer = (state = initialState, action: TOrderActions): TOrderState => {
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
        orderNumber: action.order.number,
        sendOrderRequest: false,
        sendOrderFailed: false
      };
    }
    case SEND_ORDER_FAILED: {
      return {
        ...state,
        sendOrderRequest: false,
        sendOrderFailed: true,
        orderNumber: 0
      };
    }
    default: {
      return state
    }
  }
};
