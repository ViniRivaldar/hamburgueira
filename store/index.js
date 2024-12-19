import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import watchLoginSaga from './modules/auth/sagas'; 
import rootReducer from './modules/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(watchLoginSaga);

export default store