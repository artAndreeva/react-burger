import { BASE_URL } from '../constants/constants';
import * as type from '../types/types';
import { getCookie } from './cookie';

const handleResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

const handleCheckSuccess = <T>(res: T | any): T => {
  if (res && res.success) {
    return res;
  }
  throw new Error('Ошибка');
}

const request = <T>(url: RequestInfo, options: RequestInit): Promise<T> => {
  return fetch(`${BASE_URL}/${url}`, options)
  .then((res: Response) => handleResponse<T>(res))
  .then((res: T) => handleCheckSuccess<T>(res))
}

export const getIngredients = (): Promise<type.TGetIngredientsRes> => {
  return request<type.TGetIngredientsRes>('api/ingredients', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const sendOrder = (data: type.TSendOrder): Promise<type.TSendOrderRes> => {
  return request<type.TSendOrderRes>('api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getCookie('accessToken')
    },
    body: JSON.stringify({
      ingredients: data
    })
  })
}

export const register = (data: type.TRegisterValues): Promise<type.TRegisterRes> => {
  return request<type.TRegisterRes>('api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      name: data.name
    })
  })
}

export const login = (data: type.TLoginValues): Promise<type.TLoginRes> => {
  return request<type.TLoginRes>('api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    })
  })
}

export const refreshToken = (): Promise<type.TRefreshTokenRes> => {
  return request<type.TRefreshTokenRes>('api/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    })
  })
}

export const logout = (): Promise<type.TLogoutRes> => {
  return request<type.TLogoutRes>('api/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    })
  })
}

export const resetPassword = (data: type.TResetPasswordValues): Promise<type.TResetPasswordRes> => {
  return request<type.TResetPasswordRes>('api/password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: data.email
    })
  })
}

export const reset = (data: type.TResetValues): Promise<type.TResetRes> => {
  return request<type.TResetRes>('api/password-reset/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: data.password,
      token: data.token
    })
  })
}

export const getUser = (): Promise<type.TGetUserRes> => {
  return request<type.TGetUserRes>('api/auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getCookie('accessToken')
    }
  })
}

export const updateUser = (data: type.TProfileValues): Promise<type.TUpdateUserRes> => {
  return request<type.TUpdateUserRes>('api/auth/user', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getCookie('accessToken')
    },
    body: JSON.stringify({
      email: data.email,
      name: data.name,
      password: data.password
    })
  })
}
