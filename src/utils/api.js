import {BASE_URL} from '../constants/constants'

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

const request = (url, options) => {
  return fetch(url, options)
  .then(handleResponse)
}

export const getIngredients = () => {
  return request(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}