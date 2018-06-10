import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import 'babel-polyfill'
// import mainSaga from './containers/App/saga'
// import reducer from './containers/App/reducer'
import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default store;