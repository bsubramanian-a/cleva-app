import { combineReducers } from 'redux';
import auth from './auth';
import data from './data';

export const rootReducer = combineReducers({
  auth,data
});
