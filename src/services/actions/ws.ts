import { TWSOrdersRes } from '../../types/types';

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_END: 'WS_CONNECTION_END' = 'WS_CONNECTION_END';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';

interface IWSConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
}
interface IWSConnectionEndAction {
  readonly type: typeof WS_CONNECTION_END;
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
}
interface IWSGetOrdersAction {
  readonly type: typeof WS_GET_ORDERS;
  readonly parsedData: TWSOrdersRes;
}

export type TWSActions =
  | IWSConnectionStartAction
  | IWSConnectionEndAction
  | IWSConnectionSuccessAction
  | IWSConnectionErrorAction
  | IWSConnectionClosedAction
  | IWSGetOrdersAction;

export const wsConnectionStartAction = (): IWSConnectionStartAction => ({ type: 'WS_CONNECTION_START'});
export const wsConnectionEndAction = (): IWSConnectionEndAction => ({ type: 'WS_CONNECTION_END'});

