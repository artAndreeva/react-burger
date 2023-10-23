import update from 'immutability-helper';
import {
  ADD_BUN,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SORT_INGREDIENTS,
  DELETE_ALL_INGREDIENTS
} from '../actions/burger-ingredients';

const initialState = {
  buns: {},
  ingredients: []
}

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN: {
      return {
        ...state,
        buns: action.payload,
      }
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      }
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(item => item.uniqId !== action.payload)
      }
    }
    case SORT_INGREDIENTS: {
      return {
        ...state,
        ingredients: update(state.ingredients, {
          $splice: [
            [action.payload.dragIndex, 1],
            [action.payload.hoverIndex, 0, state.ingredients[action.payload.dragIndex]],
          ],
        }),
      }
    }
    case DELETE_ALL_INGREDIENTS: {
      return {
        ...state,
        buns: {},
        ingredients: []
      }
    }
    default: {
      return state
    }
  }
}
