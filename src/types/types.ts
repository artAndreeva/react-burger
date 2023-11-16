export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  uniqId?: string;
};

export type TServerRes<T> = {
  success: boolean;
} & T;

export type TGetIngredientsRes = TServerRes<{
  data: TIngredient[];
}>;

export type TSendOrder = {
  ingredients: TIngredient[];
};

export type TSendOrderRes = TServerRes<{
  name: string;
  order: TOrder;
}>;

export type TOrder = {
  number: number;
};

export type TRegisterValues = {
  email: string;
  password: string;
  name: string;
};

export type TRegisterRes = TServerRes<{
  user: TUser;
  refreshToken: string;
  accessToken: string;
}>;

export type TLoginValues = {
  email: string;
  password: string;
};

export type TLoginRes = TServerRes<{
  user: TUser;
  refreshToken: string;
  accessToken: string;
}>;

export type TUser = {
  email: string;
  name: string;
};

export type TRefreshTokenRes = TServerRes<{
  refreshToken: string;
  accessToken: string;
}>;

export type TLogoutRes = TServerRes<{
  message: string;
}>;

export type TResetPasswordValues = {
  email: string;
};

export type TResetPasswordRes = TServerRes<{
  message: string;
}>;

export type TResetValues = {
  password: string;
  token: string;
};

export type TResetRes = TServerRes<{
  message: string;
}>;

export type TGetUserRes = TServerRes<{
  user: TUser;
}>

export type TProfileValues = {
  email: string;
  name: string;
  password: string;
};

export type TUpdateUserRes = TServerRes<{
  user: TUser;
}>;
