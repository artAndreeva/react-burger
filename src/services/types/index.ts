import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../store';
import { TAuthActions } from '../actions/auth';
import { TIngredientsActions } from '../actions/ingredients';
import { TOrderActions } from '../actions/order';
import { TResetPasswordActions } from '../actions/reset-password';
import { TWSActions } from '../actions/ws';

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
  | TAuthActions
  | TIngredientsActions
  | TOrderActions
  | TResetPasswordActions
  | TWSActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;
