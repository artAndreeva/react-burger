import * as api from '../../utils/api';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredients = () => {
  return (dispatch) => {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    });
    api.getIngredients()
    .then((res) => {
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: res.data
      });
    })
    .catch(() => {
      dispatch({
        type: GET_INGREDIENTS_FAILED
      })
    });
  }
}
