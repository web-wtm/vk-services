import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import 'babel-polyfill'
import mainSaga from './containers/App/saga';
import reducer from './containers/App/reducer'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(mainSaga);

export default store;