import { resetPasswordReducer } from './reset-password';
import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_REQUEST,
  RESET_SUCCESS,
  RESET_FAILED,
} from '../actions/reset-password';

const initialState = {
  isResetPassword: false,
  isReset: false
}

describe('reset password reducer', () => {

  it('should return the initial state', () => {
    const received = resetPasswordReducer(undefined, {});
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

  it('should handle RESET_PASSWORD_REQUEST', () => {
    const received = resetPasswordReducer(initialState, {
      type: RESET_PASSWORD_REQUEST
    });
    const expected = {
      ...initialState,
      isResetPassword: false
    };
    expect(received).toEqual(expected);
  })

  it('should handle RESET_PASSWORD_SUCCESS', () => {
    const received = resetPasswordReducer(initialState, {
      type: RESET_PASSWORD_SUCCESS
    });
    const expected = {
      ...initialState,
      isResetPassword: true
    };
    expect(received).toEqual(expected);
  })

  it('should handle RESET_PASSWORD_FAILED', () => {
    const received = resetPasswordReducer(initialState, {
      type: RESET_PASSWORD_FAILED
    });
    const expected = {
      ...initialState,
      isResetPassword: false
    };
    expect(received).toEqual(expected);
  })

  it('should handle RESET_REQUEST', () => {
    const received = resetPasswordReducer(initialState, {
      type: RESET_REQUEST
    });
    const expected = {
      ...initialState,
      isReset: false
    };
    expect(received).toEqual(expected);
  })

  it('should handle RESET_SUCCESS', () => {
    const received = resetPasswordReducer(initialState, {
      type: RESET_SUCCESS
    });
    const expected = {
      ...initialState,
      isReset: true
    };
    expect(received).toEqual(expected);
  })

  it('should handle RESET_FAILED', () => {
    const received = resetPasswordReducer(initialState, {
      type: RESET_FAILED
    });
    const expected = {
      ...initialState,
      isReset: false
    };
    expect(received).toEqual(expected);
  })

})
