import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from './saga';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;
