import { all } from 'redux-saga/effects';
import watchLoginSaga from './auth/sagas';

export default function* rootSaga() {
 yield all([
   watchLoginSaga(),
   
 ]);
}