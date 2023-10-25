import * as api from '../../utils/api';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

export const RESET_REQUEST = 'RESET_REQUEST';
export const RESET_SUCCESS = 'RESET_SUCCESS';
export const RESET_FAILED = 'RESET_FAILED';

export const resetPassword = (data, redirect) => {
  return (dispatch) => {
    dispatch({
      type: RESET_PASSWORD_REQUEST
    });
    api.resetPassword(data)
    .then((res) => {
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: res
      });
    })
    .then(() => {
      redirect();
    })
    .catch(() => {
      dispatch({
        type: RESET_PASSWORD_FAILED
      })
    });
  }
}

export const reset = (data, redirect) => {
  return (dispatch) => {
    dispatch({
      type: RESET_REQUEST
    });
    api.reset(data)
    .then((res) => {
      dispatch({
        type: RESET_SUCCESS,
        payload: res
      });
    })
    .then(() => {
      redirect();
    })
    .catch(() => {
      dispatch({
        type: RESET_FAILED
      })
    });
  }
}
