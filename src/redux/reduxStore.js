import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunkMiddleware  from 'redux-thunk'
import usersReducer from './usersReducer'

let reducers = combineReducers({
  userPage: usersReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store;