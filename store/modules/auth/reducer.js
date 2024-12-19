const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};
  
const reducer = (state = initialState, actions) => {
    switch (actions.type) {
      case 'LOGIN_REQUEST':
        return { ...state, loading: true, error: null };
  
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: actions.payload.user,
          token: actions.payload.token,
          loading: false,
        };
  
      case 'LOGIN_FAILURE':
        return { ...state, loading: false, error: actions.payload };
  
      default:
        return state;
    }
};
  
export default reducer;  