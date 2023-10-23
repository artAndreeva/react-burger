import {BASE_URL} from '../constants/constants'

const handleResponse = (res) => {
  if (res.ok && (() => res.json().success)) {
    return res.json();
  }
  return Promise.reject(res.status);
}

const request = (url, options) => {
  return fetch(url, options)
  .then(handleResponse)
}

export const getIngredients = () => {
  return request(`${BASE_URL}/api/ingredients`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const sendOrder = (data) => {
  return request(`${BASE_URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ingredients: data
    })
  })
}
