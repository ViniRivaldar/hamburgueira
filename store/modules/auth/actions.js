export const loginRequest = (credentials) => ({
  type: 'auth/loginRequest',
  payload: credentials,
});

export const loginSuccess = (user, token) => ({
  type: 'auth/loginSuccess',
  payload: { user, token },
});

export const loginFailure = (error) => ({
  type: 'auth/loginFailure',
  payload: error,
});

export const logout = () => ({
  type: 'auth/logout'
});