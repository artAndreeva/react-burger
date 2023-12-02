import update from 'immutability-helper';
import {
  ADD_BUN,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SORT_INGREDIENTS,
  DELETE_ALL_INGREDIENTS
} from '../actions/burger-ingredients';
import { TIngredient } from '../../types/types';
import { TBurgerIngredientsActions } from '../actions/burger-ingredients';

type TBurgerIngredientsState = {
  buns: TIngredient,
  ingredients: TIngredient[]
}

const initialState: TBurgerIngredientsState = {
  buns: {} as TIngredient,
  ingredients: []
}

export const burgerIngredientsReducer = (state = initialState, action: TBurgerIngredientsActions): TBurgerIngredientsState => {
  switch (action.type) {
    case ADD_BUN: {
      return {
        ...state,
        buns: action.item,
      }
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.item],
      }
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(item => item.uniqId !== action.uniqId)
      }
    }
    case SORT_INGREDIENTS: {
      return {
        ...state,
        ingredients: update(state.ingredients, {
          $splice: [
            [action.index.dragIndex, 1],
            [action.index.hoverIndex, 0, state.ingredients[action.index.dragIndex]],
          ],
        }),
      }
    }
    case DELETE_ALL_INGREDIENTS: {
      return {
        ...state,
        buns: {} as TIngredient,
        ingredients: []
      }
    }
    default: {
      return state
    }
  }
}
