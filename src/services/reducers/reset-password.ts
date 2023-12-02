import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_REQUEST,
  RESET_SUCCESS,
  RESET_FAILED,
} from '../actions/reset-password';
import { TResetPasswordActions } from '../actions/reset-password';

type TResetPasswordState = {
  isResetPassword: boolean,
  isReset: boolean
}

const initialState: TResetPasswordState = {
  isResetPassword: false,
  isReset: false
}

export const resetPasswordReducer = (state = initialState, action: TResetPasswordActions): TResetPasswordState => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        isResetPassword: false
      }
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        isResetPassword: true
      }
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        isResetPassword: false
      }
    }
    case RESET_REQUEST: {
      return {
        ...state,
        isReset: false
      }
    }
    case RESET_SUCCESS: {
      return {
        ...state,
        isReset: true
      }
    }
    case RESET_FAILED: {
      return {
        ...state,
        isReset: false
      }
    }
    default: {
      return state;
    }
  }
 }
