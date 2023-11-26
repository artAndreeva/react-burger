import { TResetPasswordValues, TResetValues } from '../../types/types';
import * as api from '../../utils/api';
import { AppThunk, AppDispatch } from '../types/index';

export const RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST' = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS' = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED: 'RESET_PASSWORD_FAILED' = 'RESET_PASSWORD_FAILED';

export const RESET_REQUEST: 'RESET_REQUEST' = 'RESET_REQUEST';
export const RESET_SUCCESS: 'RESET_SUCCESS' = 'RESET_SUCCESS';
export const RESET_FAILED: 'RESET_FAILED' = 'RESET_FAILED';

interface IResetPasswordRequestAction {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}
interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
}
interface IResetPasswordFailedAction {
  readonly type: typeof RESET_PASSWORD_FAILED;
}
interface IResetRequestAction {
  readonly type: typeof RESET_REQUEST;
}
interface IResetSuccessAction {
  readonly type: typeof RESET_SUCCESS;
}
interface IResetFailedAction {
  readonly type: typeof RESET_FAILED;
}

export type TResetPasswordActions =
  | IResetPasswordRequestAction
  | IResetPasswordSuccessAction
  | IResetPasswordFailedAction
  | IResetRequestAction
  | IResetSuccessAction
  | IResetFailedAction;

export const resetPasswordRequestAction = (): IResetPasswordRequestAction => ({type: RESET_PASSWORD_REQUEST});
export const resetPasswordSuccessAction = (): IResetPasswordSuccessAction => ({type: RESET_PASSWORD_SUCCESS});
export const resetPasswordFailedAction = (): IResetPasswordFailedAction => ({type: RESET_PASSWORD_FAILED});
export const resetRequestAction = (): IResetRequestAction => ({type: RESET_REQUEST});
export const resetSuccessAction = (): IResetSuccessAction => ({type: RESET_SUCCESS});
export const resetFailedAction = (): IResetFailedAction => ({type: RESET_FAILED});

export const resetPassword: AppThunk = (data: TResetPasswordValues, redirect: () => void) => {
  return (dispatch: AppDispatch) => {
    dispatch(resetPasswordRequestAction());
    api.resetPassword(data)
    .then(() => {
      dispatch(resetPasswordSuccessAction());
    })
    .then(() => {
      redirect();
    })
    .catch(() => {
      dispatch(resetPasswordFailedAction())
    });
  }
}

export const reset: AppThunk = (data: TResetValues, redirect: () => void) => {
  return (dispatch: AppDispatch) => {
    dispatch(resetRequestAction());
    api.reset(data)
    .then(() => {
      dispatch(resetSuccessAction());
    })
    .then(() => {
      redirect();
    })
    .catch(() => {
      dispatch(resetFailedAction())
    });
  }
}
