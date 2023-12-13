import { ingredientsReducer, initialState } from './ingredients';
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from '../actions/ingredients';

const ingredients = [{
  _id: '',
  name: '',
  type: '',
  proteins: 123,
  fat: 123,
  carbohydrates: 123,
  calories: 123,
  price: 123,
  image: '',
  image_mobile: '',
  image_large: '',
  __v: 123
}]

describe('ingredients reducer', () => {

  it('should return the initial state', () => {
    const received = ingredientsReducer(undefined, {});
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

  it('should handle GET_INGREDIENTS_REQUEST', () => {
    const received = ingredientsReducer(initialState, {
      type: GET_INGREDIENTS_REQUEST
    });
    const expected = {
      ...initialState,
      ingredientsRequest: true
    };
    expect(received).toEqual(expected);
  })

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    const received = ingredientsReducer(initialState, {
      type: GET_INGREDIENTS_SUCCESS,
      ingredients: ingredients
    });
    const expected = {
      ...initialState,
      ingredients: ingredients,
      ingredientsRequest: false,
      ingredientsFailed: false
    };
    expect(received).toEqual(expected);
  })

  it('should handle GET_INGREDIENTS_FAILED', () => {
    const received = ingredientsReducer(initialState, {
      type: GET_INGREDIENTS_FAILED
    });
    const expected = {
      ...initialState,
      ingredientsRequest: false,
      ingredientsFailed: true,
      ingredients: []
    };
    expect(received).toEqual(expected);
  })

})
