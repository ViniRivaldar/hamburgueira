const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  isLoggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/loginRequest':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'auth/loginSuccess':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
        isLoggedIn: true
      };
    case 'auth/loginFailure':
      return {
        ...state,
        loading: false,
        error: action.payload,
        isLoggedIn: false
      };
    case 'auth/logout':
      return {
        ...initialState
      };
    
    case '@auth/UPDATE_PROFILE_REQUEST':
      return {
        ...state,
        isUpdating: true,
        error: null
      };
    case '@auth/UPDATE_PROFILE_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        isUpdating: false,
        error: null
      };
      case '@auth/UPDATE_PROFILE_FAILURE':
        return {
          ...state,
          isUpdating: false,
          error: action.payload
        };
    default:
      return state;
  }
};

export default reducer;