import {BASE_URL} from '../constants/constants'

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
      'Content-Type': 'application/json'
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

export const refreshToken = (refreshToken) => {
  return request('api/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: refreshToken
    })
  })
}

export const logout = (refreshToken) => {
  return request('api/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: refreshToken
    })
  })
}

export const getUser = (token) => {
  return request('api/auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
}

export const updateUser = (token) => {
  return request('api/auth/user', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
}
