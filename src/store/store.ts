import { compose, createStore, applyMiddleware, Store } from 'redux';
import { Action } from '../types/action';
import { TaskState } from './task/task.reducer';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const customLoggerMiddleware = (store: Store<TaskState, Action>) => (next: (action: Action)=>void) => (action: Action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('RDX> type: ', action.type);
  console.log('RDX> payload: ', action.payload);
  console.log('RDX> currentState: ', store.getState());

  next(action);

  console.log('RDX> next state: ', store.getState());
};

const middleWares = [logger]; // [customLoggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store= createStore(rootReducer, undefined, composedEnhancers);
