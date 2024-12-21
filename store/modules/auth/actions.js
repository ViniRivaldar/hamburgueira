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

export const updateProfileRequest = (userData) => ({
  type: '@auth/UPDATE_PROFILE_REQUEST',
  payload: userData,
});

export const updateProfileSuccess = (user) => ({
  type: '@auth/UPDATE_PROFILE_SUCCESS',
  payload: { user }
});

export const updateProfileFailure = (error) => ({
  type: '@auth/UPDATE_PROFILE_FAILURE',
  payload: error,
});