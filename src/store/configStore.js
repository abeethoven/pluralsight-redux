import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'

export default function configStore (initialState) {
  return createStore (
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
}
