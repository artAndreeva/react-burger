import * as api from '../../utils/api';
import { setCookie, removeCookie } from '../../utils/cookie';
import { AppThunk, AppDispatch } from '../types/index';
import { TLoginValues, TProfileValues, TRegisterValues, TUser } from '../../types/types';

export const REGISTER_REQUEST: 'REGISTER_REQUEST' = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS: 'REGISTER_SUCCESS' = 'REGISTER_SUCCESS';
export const REGISTER_FAILED: 'REGISTER_FAILED' = 'REGISTER_FAILED';

export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_FAILED: 'LOGIN_FAILED' = 'LOGIN_FAILED';

export const REFRESH_TOKEN_REQUEST: 'REFRESH_TOKEN_REQUEST' = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS: 'REFRESH_TOKEN_SUCCESS' = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED: 'REFRESH_TOKEN_FAILED' = 'REFRESH_TOKEN_FAILED';

export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED: 'LOGOUT_FAILED' = 'LOGOUT_FAILED';

export const GET_USER_REQUEST: 'GET_USER_REQUEST' = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
export const GET_USER_FAILED: 'GET_USER_FAILED' = 'GET_USER_FAILED';

export const UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST' = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS' = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED: 'UPDATE_USER_FAILED' = 'UPDATE_USER_FAILED';

interface IRegisterRequestAction {
  readonly type: typeof REGISTER_REQUEST;
}
interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_SUCCESS;
  readonly user: TUser;
}
interface IRegisterFailedAction {
  readonly type: typeof REGISTER_FAILED;
}
interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}
interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  readonly user: TUser;
}
interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
}
interface IRefreshTokenRequestAction {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
}
interface IRefreshTokenSuccessAction {
  readonly type: typeof REFRESH_TOKEN_SUCCESS;
}
interface IRefreshTokenFailedAction {
  readonly type: typeof REFRESH_TOKEN_FAILED;
}
interface ILogoutRequestAction {
  readonly type: typeof LOGOUT_REQUEST;
}
interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}
interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
}
interface IGetUserRequestAction {
  readonly type: typeof GET_USER_REQUEST;
}
interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: TUser;
}
interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
}
interface IUpdateUserRequestAction {
  readonly type: typeof UPDATE_USER_REQUEST;
}
interface IUpdateUserSuccessAction {
  readonly type: typeof UPDATE_USER_SUCCESS;
  readonly user: TUser;
}
interface IUpdateUserFailedAction {
  readonly type: typeof UPDATE_USER_FAILED;
}
interface IUndefined {
  readonly type: typeof undefined;
}

export type TAuthActions =
  | IRegisterRequestAction
  | IRegisterSuccessAction
  | IRegisterFailedAction
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginFailedAction
  | IRefreshTokenRequestAction
  | IRefreshTokenSuccessAction
  | IRefreshTokenFailedAction
  | ILogoutRequestAction
  | ILogoutSuccessAction
  | ILogoutFailedAction
  | IGetUserRequestAction
  | IGetUserSuccessAction
  | IGetUserFailedAction
  | IUpdateUserRequestAction
  | IUpdateUserSuccessAction
  | IUpdateUserFailedAction
  | IUndefined;

export const registerRequestAction = (): IRegisterRequestAction => ({type: REGISTER_REQUEST});
export const registerSuccessAction = (user: TUser): IRegisterSuccessAction => ({type: REGISTER_SUCCESS, user});
export const registerFailedAction = (): IRegisterFailedAction => ({type: REGISTER_FAILED});

export const loginRequestAction = (): ILoginRequestAction => ({type: LOGIN_REQUEST});
export const loginSuccessAction = (user: TUser): ILoginSuccessAction => ({type: LOGIN_SUCCESS, user});
export const loginFailedAction = (): ILoginFailedAction => ({type: LOGIN_FAILED});

export const refreshTokenRequestAction = (): IRefreshTokenRequestAction => ({type: REFRESH_TOKEN_REQUEST});
export const refreshTokenSuccessAction = (): IRefreshTokenSuccessAction => ({type: REFRESH_TOKEN_SUCCESS});
export const refreshTokenFailedAction = (): IRefreshTokenFailedAction => ({type: REFRESH_TOKEN_FAILED});

export const logoutRequestAction = (): ILogoutRequestAction => ({type: LOGOUT_REQUEST});
export const logoutSuccessAction = (): ILogoutSuccessAction => ({type: LOGOUT_SUCCESS});
export const logoutFailedAction = (): ILogoutFailedAction => ({type: LOGOUT_FAILED});

export const getUserRequestAction = (): IGetUserRequestAction => ({type: GET_USER_REQUEST});
export const getUserSuccessAction = (user: TUser): IGetUserSuccessAction => ({type: GET_USER_SUCCESS, user});
export const getUserFailedAction = (): IGetUserFailedAction => ({type: GET_USER_FAILED});

export const updateUserRequestAction = (): IUpdateUserRequestAction => ({type: UPDATE_USER_REQUEST});
export const updateUserSuccessAction = (user: TUser): IUpdateUserSuccessAction => ({type: UPDATE_USER_SUCCESS, user});
export const updateUserFailedAction = (): IUpdateUserFailedAction => ({type: UPDATE_USER_FAILED});

export const register: AppThunk = (data: TRegisterValues) => {
  return (dispatch: AppDispatch) => {
    dispatch(registerRequestAction());
    api.register(data)
      .then((res) => {
        localStorage.setItem('refreshToken', res.refreshToken);
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        dispatch(registerSuccessAction(res.user));
      })
      .catch(() => {
        dispatch(registerFailedAction())
      });
  }
}

export const login: AppThunk = (data: TLoginValues) => {
  return (dispatch: AppDispatch) => {
    dispatch(loginRequestAction());
    api.login(data)
      .then((res) => {
        localStorage.setItem('refreshToken', res.refreshToken);
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        dispatch(loginSuccessAction(res.user));
      })
      .catch(() => {
        dispatch(loginFailedAction())
      });
  }
}

export const refreshToken: AppThunk = () => {
  return (dispatch: AppDispatch) => {
    dispatch(refreshTokenRequestAction());
    api.refreshToken()
      .then((res) => {
        localStorage.setItem('refreshToken', res.refreshToken);
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        dispatch(refreshTokenSuccessAction());
      })
     .then(() => {
        dispatch(getUser());
      })
      .catch(() => {
        dispatch(refreshTokenFailedAction())
    });
  }
}

export const logout: AppThunk = () => {
  return (dispatch: AppDispatch) => {
    dispatch(logoutRequestAction());
    api.logout()
      .then(() => {
        localStorage.removeItem('refreshToken');
        removeCookie('accessToken');
        dispatch(logoutSuccessAction());
      })
      .catch(() => {
        dispatch(logoutFailedAction())
      });
  }
}

export const getUser: AppThunk = () => {
  return (dispatch: AppDispatch) => {
    dispatch(getUserRequestAction());
    api.getUser()
      .then((res) => {
        dispatch(getUserSuccessAction(res.user));
      })
      .catch(() => {
        dispatch(refreshToken());
        dispatch(getUserFailedAction());
      });
  }
}

export const updateUser: AppThunk = (data: TProfileValues) => {
  return (dispatch: AppDispatch) => {
    dispatch(updateUserRequestAction());
    api.updateUser(data)
      .then((res) => {
        dispatch(updateUserSuccessAction(res.user));
      })
      .catch(() => {
        dispatch(updateUserFailedAction());
      });
  }
}
