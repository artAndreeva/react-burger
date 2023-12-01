import { getCookie } from "../utils/cookie";

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

export const WS_URL = 'wss://norma.nomoreparties.space/orders/all';
export const WS_AUTH_URL = `wss://norma.nomoreparties.space/orders?token=${getCookie('accessToken')}`;
