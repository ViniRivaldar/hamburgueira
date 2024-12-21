import { takeLatest, call, put, select } from 'redux-saga/effects';
import { AxiosAuth } from '../../../utils/AxiosConfig';
import * as authActions from './actions';
import { get } from 'lodash';
import { toast } from 'react-toastify';

const getToken = state => state.auth.token;

function setAuthToken(token) {
  if (token) {
    AxiosAuth.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete AxiosAuth.defaults.headers.common['Authorization'];
  }
}

function* loginSaga(action) {
  try {
    const response = yield call(AxiosAuth.post, '/login', action.payload);
    const { user, token } = response.data;
    
    yield put(authActions.loginSuccess(user, token));
    setAuthToken(token);
  } catch (e) {
    console.error('Login error:', e);
    
    if (e.response?.data?.errors) {
      e.response.data.errors.forEach(errorMessage => {
        if (errorMessage.includes('Senha')) {
          toast.error('Erro com a senha.');
        }
      });
    } else {
      toast.error('Erro ao realizar o login. Tente novamente.');
    }
    yield put(authActions.loginFailure(e));
  }
}

function* updateProfileSaga({ payload }) {
  try {
    const token = yield select(getToken);
    const { id, ...user } = payload;
    const response = yield call(AxiosAuth.put, `/register/${id}`, user, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    const updatedUser = response.data.user;
    yield put(authActions.updateProfileSuccess(updatedUser));
    toast.success('Perfil atualizado com sucesso!');
  } catch (error) {
    console.error('Update profile error:', error.response?.data || error);
    toast.error('Erro ao atualizar perfil. Tente novamente.');
    yield put(authActions.updateProfileFailure(error));
  }
}

function* persistRehydrateSaga({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (token) {
    setAuthToken(token);
  }
}

function* logoutSaga() {
  setAuthToken(null);
}

export default function* rootSaga() {
  yield takeLatest('auth/loginRequest', loginSaga);
  yield takeLatest('persist/REHYDRATE', persistRehydrateSaga);
  yield takeLatest('@auth/UPDATE_PROFILE_REQUEST', updateProfileSaga);
  yield takeLatest('@auth/LOGOUT', logoutSaga);
}