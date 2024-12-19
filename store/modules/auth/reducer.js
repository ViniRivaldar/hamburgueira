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
    default:
      return state;
  }
};

export default reducer;