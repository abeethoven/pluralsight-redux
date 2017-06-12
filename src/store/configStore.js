import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'

export default function configStore (initialState) {
  return createStore (
    rootReducer,
    initialState //,
    //applyMiddleware();
  )
}
