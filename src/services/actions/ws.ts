import { TWSOrdersRes } from '../../types/types';

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';

interface IWSConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
}
interface IWSConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  readonly event: Event;
}
interface IWSConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly event: Event;
}
interface IWSConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
  readonly event: Event;
}
interface IWSGetOrdersAction {
  readonly type: typeof WS_GET_ORDERS;
  readonly receivedData: TWSOrdersRes;
}

export type TWSActions =
  | IWSConnectionStartAction
  | IWSConnectionSuccessAction
  | IWSConnectionErrorAction
  | IWSConnectionClosedAction
  | IWSGetOrdersAction;

export const wsConnectionStartAction = (): IWSConnectionStartAction => ({ type: 'WS_CONNECTION_START'});
export const wsConnectionSuccessAction = (event: Event): IWSConnectionSuccessAction => ({ type: 'WS_CONNECTION_SUCCESS', event});
export const wsConnectionErrorAction = (event: Event): IWSConnectionErrorAction => ({ type: 'WS_CONNECTION_ERROR', event});
export const wsConnectionClosedAction = (event: Event): IWSConnectionClosedAction => ({ type: 'WS_CONNECTION_CLOSED', event});
export const wsGetOrdersAction = (receivedData: TWSOrdersRes): IWSGetOrdersAction => ({ type: 'WS_GET_ORDERS', receivedData});

