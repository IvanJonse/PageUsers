import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunkMiddleware  from 'redux-thunk'
import usersReducer from './usersReducer'
import { reducer as formRedux } from 'redux-form'

let reducers = combineReducers({
  userPage: usersReducer,
  form: formRedux

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store;