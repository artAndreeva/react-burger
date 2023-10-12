import {
  OPEN_INGREDIENT,
  CLOSE_INGREDIENT
} from '../actions/ingredient-modal';

const initialState = {
  selectedIngredient: {}
}

export const ingredientModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.payload
      }
    }
    case CLOSE_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: {}
      }
    }
    default:
      return state
  }
}
