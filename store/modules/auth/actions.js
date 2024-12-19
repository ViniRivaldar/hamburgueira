import * as types from '../types';

export function loginRequest(data) {
  return {
    type: types.LOGIN_REQUEST,
    payload: data,
  };
}

export function loginSuccess(user, token) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: { user, token },
  };
}

export function loginFailure(error) {
  return {
    type: types.LOGIN_FAILURE,
    payload: error,
  };
}