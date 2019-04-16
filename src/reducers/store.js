import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import mySaga from '../sagas'
import reducer from './index'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  (process.browser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export default initialState => {
  // mount initial state and saga middleware on the Store
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )
  // then run the saga
  sagaMiddleware.run(mySaga)
  return store
}
