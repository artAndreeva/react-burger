import * as api from '../../utils/api';

export const SEND_ORDER_REQUEST = 'SEND_ORDER_REQUEST';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';

export const sendOrder = (arr) => {
  return (dispatch) => {
    dispatch({
      type: SEND_ORDER_REQUEST
    });
    api.sendOrder(arr)
    .then((res) => {
      dispatch({
        type: SEND_ORDER_SUCCESS,
        payload: res.order.number
      });
    })
    .catch(() => {
      dispatch({
        type: SEND_ORDER_FAILED
      })
    });
  }
}
