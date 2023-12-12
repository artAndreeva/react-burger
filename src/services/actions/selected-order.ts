import * as api from '../../utils/api';
import { AppThunk, AppDispatch } from '../types/index';
import { TOrder } from '../../types/types';

export const GET_SELECTED_ORDER_REQUEST: 'GET_SELECTED_ORDER_REQUEST' = 'GET_SELECTED_ORDER_REQUEST';
export const GET_SELECTED_ORDER_SUCCESS: 'GET_SELECTED_ORDER_SUCCESS' = 'GET_SELECTED_ORDER_SUCCESS';
export const GET_SELECTED_ORDER_FAILED: 'GET_SELECTED_ORDER_FAILED' = 'GET_SELECTED_ORDER_FAILED';

interface IGetSelectedOrderRequestAction {
  readonly type: typeof GET_SELECTED_ORDER_REQUEST;
}
interface IGetSelectedOrderSuccessAction {
  readonly type: typeof GET_SELECTED_ORDER_SUCCESS;
  readonly order: TOrder;
}
interface IGetSelectedOrderFailedAction {
  readonly type: typeof GET_SELECTED_ORDER_FAILED;
}
interface IUndefined {
  readonly type: typeof undefined;
}

export type TGetSelectedOrderActions =
  | IGetSelectedOrderRequestAction
  | IGetSelectedOrderSuccessAction
  | IGetSelectedOrderFailedAction
  | IUndefined;

export const GetSelectedOrderRequestAction = (): IGetSelectedOrderRequestAction => ({type: GET_SELECTED_ORDER_REQUEST});
export const GetSelectedOrderSuccessAction = (order: TOrder): IGetSelectedOrderSuccessAction => ({type: GET_SELECTED_ORDER_SUCCESS, order});
export const GetSelectedOrderFailedAction = (): IGetSelectedOrderFailedAction => ({type: GET_SELECTED_ORDER_FAILED});

export const getSelectedOrder: AppThunk = (number) => {
  return (dispatch: AppDispatch) => {
    dispatch(GetSelectedOrderRequestAction());
    api.getSelectedOrder(number)
    .then((res) => {
      dispatch(GetSelectedOrderSuccessAction(res.orders[0]));
    })
    .catch(() => {
      dispatch(GetSelectedOrderFailedAction())
    });
  }
}
