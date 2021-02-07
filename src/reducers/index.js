import counterReducer from "./counter.store";
import loggedReducer from './signIn.store'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    signed: loggedReducer
})

export default allReducers;