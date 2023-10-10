import {
  GET_INGREDIENT,
  CLOSE_INGREDIENT
} from '../actions/ingredient-modal';

const initialState = {
  selectedIngredient: {}
}

export const ingredientModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.selectedIngredient
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
