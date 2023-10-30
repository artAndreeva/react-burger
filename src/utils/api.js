import { BASE_URL } from '../constants/constants';
import { getCookie } from '../utils/cookie';

const handleResponse = (res) => {
  if (res.ok && (() => res.json().success)) {
    return res.json();
  }
  return Promise.reject(res.status);
}

const request = (url, options) => {
  return fetch(`${BASE_URL}/${url}`, options)
  .then(handleResponse)
}

export const getIngredients = () => {
  return request('api/ingredients', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const sendOrder = (data) => {
  return request('api/orders', {
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

export const register = (data) => {
  return request('api/auth/register', {
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

export const login = (data) => {
  return request('api/auth/login', {
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

export const refreshToken = () => {
  return request('api/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    })
  })
}

export const logout = () => {
  return request('api/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    })
  })
}

export const resetPassword = (data) => {
  return request('api/password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: data.email
    })
  })
}

export const reset = (data) => {
  return request('api/password-reset/reset', {
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

export const getUser = () => {
  return request('api/auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getCookie('accessToken')
    }
  })
}

export const updateUser = (data) => {
  return request('api/auth/user', {
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
