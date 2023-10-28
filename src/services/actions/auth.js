import * as api from '../../utils/api';
import { setCookie, removeCookie } from '../../utils/cookie';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const register = (data) => {
  return (dispatch) => {
    dispatch({
      type: REGISTER_REQUEST
    });
    api.register(data)
      .then((res) => {
        localStorage.setItem('refreshToken', res.refreshToken);
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.user
        });
      })
      .catch(() => {
        dispatch({
          type: REGISTER_FAILED
        })
      });
  }
}

export const login = (data) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST
    });
    api.login(data)
      .then((res) => {
        localStorage.setItem('refreshToken', res.refreshToken);
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.user
        });
      })
      .catch(() => {
        dispatch({
          type: LOGIN_FAILED
        })
      });
  }
}

export const refreshToken = () => {
  return (dispatch) => {
    dispatch({
      type: REFRESH_TOKEN_REQUEST
    });
    api.refreshToken()
      .then((res) => {
        localStorage.setItem('refreshToken', res.refreshToken);
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        dispatch({
          type: REFRESH_TOKEN_SUCCESS,
          payload: res
        });
      })
     .then(() => {
        dispatch(getUser());
      })
      .catch(() => {
        dispatch({
          type: REFRESH_TOKEN_FAILED
        })
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_REQUEST
    });
    api.logout()
      .then(() => {
        localStorage.removeItem('refreshToken');
        removeCookie('accessToken');
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      })
      .catch(() => {
        dispatch({
          type: LOGOUT_FAILED
        })
      });
  }
}

export const getUser = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_REQUEST
    });
    api.getUser()
      .then((res) => {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: res.user
        });
      })
      .catch(() => {
        dispatch({
          type: GET_USER_FAILED
        });
        dispatch(refreshToken());
      });
  }
}

export const updateUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_USER_REQUEST
    });
    api.updateUser(data)
      .then((res) => {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: res.user
        });
      })
      .catch(() => {
        dispatch({
          type: UPDATE_USER_FAILED
        });
      });
  }
}