export const ADD_BUN = 'ADD_BUN';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const SORT_INGREDIENTS = 'SORT_INGREDIENTS';
export const DELETE_ALL_INGREDIENTS = 'DELETE_ALL_INGREDIENTS';

export const addBun = (payload) => ({type: ADD_BUN, payload});
export const addIngredient = (payload) => ({type: ADD_INGREDIENT, payload});
export const deleteIngredient = (payload) => ({type: DELETE_INGREDIENT, payload});
export const sortIngredients = (payload) => ({type: SORT_INGREDIENTS, payload});
export const deleteAllIngredients = () => ({type: DELETE_ALL_INGREDIENTS});
