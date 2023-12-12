import * as api from '../../utils/api';
import { AppThunk, AppDispatch } from '../types/index';
import { TIngredient } from '../../types/types';

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';

interface IGetIngredientsRequestAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}
interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: TIngredient[];
}
interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}
interface IUndefined {
  readonly type: typeof undefined;
}

export type TIngredientsActions =
  | IGetIngredientsRequestAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction
  | IUndefined;

export const getIngredientsRequestAction = (): IGetIngredientsRequestAction => ({type: GET_INGREDIENTS_REQUEST});
export const getIngredientsSuccessAction = (ingredients: TIngredient[]): IGetIngredientsSuccessAction => ({type: GET_INGREDIENTS_SUCCESS, ingredients});
export const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({type: GET_INGREDIENTS_FAILED});

export const getIngredients: AppThunk = () => {
  return (dispatch: AppDispatch) => {
    dispatch(getIngredientsRequestAction());
    api.getIngredients()
    .then((res) => {
      dispatch(getIngredientsSuccessAction(res.data));
    })
    .catch(() => {
      dispatch(getIngredientsFailedAction())
    });
  }
}
