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

const initialState = {
  user: {
    name: '',
    email: ''
  },
  isLoggedIn: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        isLoggedIn: false
      }
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email
        },
        isLoggedIn: true
      }
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        user: {
          name: '',
          email: ''
        },
        isLoggedIn: false
      }
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoggedIn: false
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email
        },
        isLoggedIn: true
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        user: {
          name: '',
          email: ''
        },
        isLoggedIn: false
      }
    }
    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state
      }
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
      }
    }
    case REFRESH_TOKEN_FAILED: {
      return {
        ...state,
        isLoggedIn: false
      }
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        user: {
          name: '',
          email: ''
        },
        isLoggedIn: false
      }
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        isLoggedIn: true
      }
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        user: {
          name: '',
          email: ''
        }
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email
        },
        isLoggedIn: true
      }
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        user: {
          name: '',
          email: ''
        },
        isLoggedIn: false
      }
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state
      }
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email
        }
      }
    }
    case UPDATE_USER_FAILED: {
      return {
        ...state
      }
    }
    default: {
      return state
    }
  }
 }
