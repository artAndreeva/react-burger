import PropTypes from 'prop-types';

export const INGREDIENS_PROP_TYPES = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired
});

export const BASE_URL = 'https://norma.nomoreparties.space';

export const TYPE = {
  bun: 'bun',
  sauce: 'sauce',
  main: 'main',
}

export const API_ERROR = 'Ошибка сервера';

export const INGREDIENT_MODAL_HEADER = 'Детали ингредиента';

export const PLACEHOLDER_TEXT = {
  top: 'Место для булки',
  middle: 'Место для ингредиентов',
  bottom: 'Место для булки'
}
