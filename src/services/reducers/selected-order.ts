import { TOrder } from '../../types/types';
import {
  GET_SELECTED_ORDER_REQUEST,
  GET_SELECTED_ORDER_SUCCESS,
  GET_SELECTED_ORDER_FAILED
} from '../actions/selected-order';
import { TGetSelectedOrderActions } from '../actions/selected-order';

type TGetSelectedOrderState = {
  order: TOrder,
  getSelectedOrderRequest: boolean,
  getSelectedOrderFailed: boolean
}

const initialState: TGetSelectedOrderState = {
  order: {} as TOrder,
  getSelectedOrderRequest: false,
  getSelectedOrderFailed: false
}

export const selectedOrderReducer = (state = initialState, action: TGetSelectedOrderActions): TGetSelectedOrderState => {
  switch (action.type) {
    case GET_SELECTED_ORDER_REQUEST: {
      return {
        ...state,
        getSelectedOrderRequest: true
      };
    }
    case GET_SELECTED_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.orders[0],
        getSelectedOrderRequest: false,
        getSelectedOrderFailed: false
      };
    }
    case GET_SELECTED_ORDER_FAILED: {
      return {
        ...state,
        getSelectedOrderRequest: false,
        getSelectedOrderFailed: true,
        order: {} as TOrder
      };
    }
    default: {
      return state
    }
  }
};
