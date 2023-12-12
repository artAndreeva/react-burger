import { TWSOrdersRes } from '../../types/types';

export const WS_AUTH_CONNECTION_START: 'WS_AUTH_CONNECTION_START' = 'WS_AUTH_CONNECTION_START';
export const WS_AUTH_CONNECTION_END: 'WS_AUTH_CONNECTION_END' = 'WS_AUTH_CONNECTION_END';
export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_END: 'WS_CONNECTION_END' = 'WS_CONNECTION_END';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';

interface IWSAuthConnectionStartAction {
  readonly type: typeof WS_AUTH_CONNECTION_START;
  readonly payload: {wsUrl: string, end: string};
}
interface IWSAuthConnectionEndAction {
  readonly type: typeof WS_AUTH_CONNECTION_END;
}
interface IWSConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: {wsUrl: string, end: string};
}
interface IWSConnectionEndAction {
  readonly type: typeof WS_CONNECTION_END;
}
interface IWSConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  readonly event: string;
}
interface IWSConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly event: string;
}
interface IWSConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}
interface IWSGetOrdersAction {
  readonly type: typeof WS_GET_ORDERS;
  readonly parsedData: TWSOrdersRes;
}
interface IUndefined {
  readonly type: typeof undefined;
}

export type TWSAuthActions =
  | IWSAuthConnectionStartAction
  | IWSAuthConnectionEndAction
  | IWSConnectionSuccessAction
  | IWSConnectionErrorAction
  | IWSConnectionClosedAction
  | IWSGetOrdersAction
  | IUndefined;

export type TWSActions =
  | IWSConnectionStartAction
  | IWSConnectionEndAction
  | IWSConnectionSuccessAction
  | IWSConnectionErrorAction
  | IWSConnectionClosedAction
  | IWSGetOrdersAction;

export const wsAuthConnectionStartAction = (payload: {wsUrl: string, end: string}): IWSAuthConnectionStartAction => ({ type: 'WS_AUTH_CONNECTION_START', payload});
export const wsAuthConnectionEndAction = (): IWSAuthConnectionEndAction => ({ type: 'WS_AUTH_CONNECTION_END'});

export const wsConnectionStartAction = (payload: {wsUrl: string, end: string}): IWSConnectionStartAction => ({ type: 'WS_CONNECTION_START', payload});
export const wsConnectionEndAction = (): IWSConnectionEndAction => ({ type: 'WS_CONNECTION_END'});

