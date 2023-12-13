import { authReducer, initialState } from './auth';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED
} from '../actions/auth';

const user = {
  email: '',
  name: ''
}

describe('auth reducer', () => {

  it('should return the initial state', () => {
    const received = authReducer(undefined, {});
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

  it('should handle REGISTER_REQUEST', () => {
    const received = authReducer(initialState, {
      type: REGISTER_REQUEST
    });
    const expected = {
      ...initialState,
      isLoggedIn: false
    };
    expect(received).toEqual(expected);
  })

  it('should handle REGISTER_SUCCESS', () => {
    const received = authReducer(initialState, {
      type: REGISTER_SUCCESS,
      user: user
    });
    const expected = {
      ...initialState,
      user: {
        name: user.name,
        email: user.email
      },
      isLoggedIn: true
    };
    expect(received).toEqual(expected);
  })

  it('should handle REGISTER_FAILED', () => {
    const received = authReducer(initialState, {
      type: REGISTER_FAILED
    });
    const expected = {
      ...initialState,
      user: {
        name: '',
        email: ''
      },
      isLoggedIn: false
    };
    expect(received).toEqual(expected);
  })

  it('should handle LOGIN_REQUEST', () => {
    const received = authReducer(initialState, {
      type: LOGIN_REQUEST,
    });
    const expected = {
      ...initialState,
      isLoggedIn: false
    };
    expect(received).toEqual(expected);
  })

  it('should handle LOGIN_SUCCESS', () => {
    const received = authReducer(initialState, {
      type: LOGIN_SUCCESS,
      user: user
    });
    const expected = {
      ...initialState,
      user: {
        name: user.name,
        email: user.email
      },
      isLoggedIn: true
    };
    expect(received).toEqual(expected);
  })

  it('should handle LOGIN_FAILED', () => {
    const received = authReducer(initialState, {
      type: LOGIN_FAILED
    });
    const expected = {
      ...initialState,
      user: {
        name: '',
        email: ''
      },
      isLoggedIn: false
    };
    expect(received).toEqual(expected);
  })

  it('should handle REFRESH_TOKEN_REQUEST', () => {
    const received = authReducer(initialState, {
      type: REFRESH_TOKEN_REQUEST
    });
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

  it('should handle REFRESH_TOKEN_SUCCESS', () => {
    const received = authReducer(initialState, {
      type: REFRESH_TOKEN_SUCCESS
    });
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

  it('should handle REFRESH_TOKEN_FAILED', () => {
    const received = authReducer(initialState, {
      type: REFRESH_TOKEN_FAILED
    });
    const expected = {
      ...initialState,
      isLoggedIn: false
    };
    expect(received).toEqual(expected);
  })

  it('should handle LOGOUT_REQUEST', () => {
    const received = authReducer(initialState, {
      type: LOGOUT_REQUEST
    });
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

  it('should handle LOGOUT_SUCCESS', () => {
    const received = authReducer(initialState, {
      type: LOGOUT_SUCCESS
    });
    const expected = {
      ...initialState,
      user: {
        name: '',
        email: ''
      },
      isLoggedIn: false
    };
    expect(received).toEqual(expected);
  })

  it('should handle LOGOUT_FAILED', () => {
    const received = authReducer(initialState, {
      type: LOGOUT_FAILED
    });
    const expected = {
      ...initialState,
      isLoggedIn: true
    };
    expect(received).toEqual(expected);
  })

  it('should handle GET_USER_REQUEST', () => {
    const received = authReducer(initialState, {
      type: GET_USER_REQUEST
    });
    const expected = {
      ...initialState,
      user: {
        name: '',
        email: ''
      }
    };
    expect(received).toEqual(expected);
  })

  it('should handle GET_USER_SUCCESS', () => {
    const received = authReducer(initialState, {
      type: GET_USER_SUCCESS,
      user: user
    });
    const expected = {
      ...initialState,
      user: {
        name: user.name,
        email: user.email
      },
      isLoggedIn: true
    };
    expect(received).toEqual(expected);
  })

  it('should handle GET_USER_FAILED', () => {
    const received = authReducer(initialState, {
      type: GET_USER_FAILED
    });
    const expected = {
      ...initialState,
      user: {
        name: '',
        email: ''
      },
      isLoggedIn: false
    };
    expect(received).toEqual(expected);
  })

  it('should handle UPDATE_USER_REQUEST', () => {
    const received = authReducer(initialState, {
      type: UPDATE_USER_REQUEST
    });
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

  it('should handle UPDATE_USER_SUCCESS', () => {
    const received = authReducer(initialState, {
      type: UPDATE_USER_SUCCESS,
      user: user
    });
    const expected = {
      ...initialState,
      user: {
        name: user.name,
        email: user.email
      }
    };
    expect(received).toEqual(expected);
  })

  it('should handle UPDATE_USER_FAILED', () => {
    const received = authReducer(initialState, {
      type: UPDATE_USER_FAILED
    });
    const expected = {
      ...initialState
    };
    expect(received).toEqual(expected);
  })

})
