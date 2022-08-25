import { combineReducers, Reducer } from 'redux';
import { taskReducer } from './task/task.reducer';

export const rootReducer = combineReducers({
  task: taskReducer,
});