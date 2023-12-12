import { TIndex, TIngredient } from '../../types/types';

export const ADD_BUN: 'ADD_BUN' = 'ADD_BUN';
export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const SORT_INGREDIENTS: 'SORT_INGREDIENTS' = 'SORT_INGREDIENTS';
export const DELETE_ALL_INGREDIENTS: 'DELETE_ALL_INGREDIENTS' = 'DELETE_ALL_INGREDIENTS';

interface IAddBunAction {
  readonly type: typeof ADD_BUN;
  readonly item: TIngredient;
}
interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  readonly item: TIngredient;
}
interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  readonly uniqId: string;
}
interface ISortIngredientsAction {
  readonly type: typeof SORT_INGREDIENTS;
  readonly index: TIndex;
}
interface IDeleteAllIngredientsAction {
  readonly type: typeof DELETE_ALL_INGREDIENTS;
}
interface IUndefined {
  readonly type: typeof undefined;
}

export type TBurgerIngredientsActions =
  | IAddBunAction
  | IAddIngredientAction
  | IDeleteIngredientAction
  | ISortIngredientsAction
  | IDeleteAllIngredientsAction
  | IUndefined;

export const addBun = (item: TIngredient): IAddBunAction => ({type: ADD_BUN, item});
export const addIngredient = (item: TIngredient): IAddIngredientAction => ({type: ADD_INGREDIENT, item});
export const deleteIngredient = (uniqId: string): IDeleteIngredientAction => ({type: DELETE_INGREDIENT, uniqId});
export const sortIngredients = (index: TIndex): ISortIngredientsAction => ({type: SORT_INGREDIENTS, index});
export const deleteAllIngredients = (): IDeleteAllIngredientsAction => ({type: DELETE_ALL_INGREDIENTS});
