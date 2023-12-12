import { burgerIngredientsReducer } from './burger-ingredients';
import {
  ADD_BUN,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SORT_INGREDIENTS,
  DELETE_ALL_INGREDIENTS
} from '../actions/burger-ingredients';
import { TIngredient } from '../../types/types';
import update from 'immutability-helper';

const initialState = {
  buns: {} as TIngredient,
  ingredients: []
};

const ingredient = {
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
    __v: 123,
    uniqId: ''
};

const uniqId = '';

const ingredients = [ingredient];

const index = {
  dragIndex: 123,
  hoverIndex: 123
}

describe('burger ingredients reducer', () => {

  it('should return the initial state', () => {
    const received = burgerIngredientsReducer(undefined, { type: undefined })
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

  it('should handle ADD_BUN', () => {
    const received = burgerIngredientsReducer(initialState, {
      type: ADD_BUN,
      item: ingredient
    })
    const expected = {
      ...initialState,
      buns: ingredient,
    };
    expect(received).toEqual(expected);
  })

/*   it('should handle ADD_INGREDIENT', () => {
    const received = burgerIngredientsReducer(initialState, {
      type: ADD_INGREDIENT,
      item: ingredient
    })
    const expected = {
      ...initialState,
      ingredients: [...ingredients, ingredient],
    };
    expect(received).toEqual(expected);
  }) */

  it('should handle DELETE_INGREDIENT', () => {
    const received = burgerIngredientsReducer(initialState, {
      type: DELETE_INGREDIENT,
      uniqId: uniqId
    })
    const expected = {
      ...initialState,
      ingredients: [...ingredients].filter(item => item.uniqId !== uniqId)
    };
    expect(received).toEqual(expected);
  })
/*
  it('should handle SORT_INGREDIENTS', () => {
    const received = burgerIngredientsReducer(initialState, {
      type: SORT_INGREDIENTS,
      index: index
    })
    const expected = {
      ...initialState,
      ingredients: update(ingredients, {
        $splice: [
          [index.dragIndex, 1],
          [index.hoverIndex, 0, ingredients[index.dragIndex]],
        ],
      }),
    };
    expect(received).toEqual(expected);
  }) */

  it('should handle DELETE_ALL_INGREDIENTS', () => {
    const received = burgerIngredientsReducer(initialState, {
      type: DELETE_ALL_INGREDIENTS,
    })
    const expected = {
      ...initialState,
      buns: {},
      ingredients: []
    };
    expect(received).toEqual(expected);
  })

})
