import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosAuth } from '../../../utils/AxiosConfig';
import * as authActions from './actions';
import { toast } from 'react-toastify';

function* loginSaga(action) {
    try {
        const response = yield call(AxiosAuth.post, '/login', action.payload);
        const { user, token } = response.data;

        yield put(authActions.loginSuccess(user, token));
        
    } catch (e) {
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

function* watchLoginSaga() {
    yield takeLatest('auth/loginRequest', loginSaga);
}

export default watchLoginSaga