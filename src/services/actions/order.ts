import * as api from '../../utils/api';
import { deleteAllIngredients } from './burger-ingredients';
import { AppThunk, AppDispatch } from '../types/index';
import { TIngredient } from '../../types/types';

export const SEND_ORDER_REQUEST: 'SEND_ORDER_REQUEST' = 'SEND_ORDER_REQUEST';
export const SEND_ORDER_SUCCESS: 'SEND_ORDER_SUCCESS' = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED: 'SEND_ORDER_FAILED' = 'SEND_ORDER_FAILED';

interface ISendOrderRequestAction {
  readonly type: typeof SEND_ORDER_REQUEST;
}
interface ISendOrderSuccessAction {
  readonly type: typeof SEND_ORDER_SUCCESS;
  readonly number: number;
}
interface ISendOrderFailedAction {
  readonly type: typeof SEND_ORDER_FAILED;
}
interface IUndefined {
  readonly type: typeof undefined;
}

export type TOrderActions =
  | ISendOrderRequestAction
  | ISendOrderSuccessAction
  | ISendOrderFailedAction
  | IUndefined;

export const sendOrderRequestAction = (): ISendOrderRequestAction => ({type: SEND_ORDER_REQUEST});
export const sendOrderSuccessAction = (number: number): ISendOrderSuccessAction => ({type: SEND_ORDER_SUCCESS, number});
export const sendOrderFailedAction = (): ISendOrderFailedAction => ({type: SEND_ORDER_FAILED});

export const sendOrder: AppThunk = (arr: TIngredient[]) => {
  return (dispatch: AppDispatch) => {
    dispatch(sendOrderRequestAction());
    api.sendOrder(arr)
    .then((res) => {
      dispatch(sendOrderSuccessAction(res.order.number));
      dispatch(deleteAllIngredients())
    })
    .catch(() => {
      dispatch(sendOrderFailedAction())
    });
  }
}
