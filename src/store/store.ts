import { AnyARecord } from 'dns';
import { compose, createStore, applyMiddleware, AnyAction } from 'redux';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store: any) => (next: (action: any)=>void) => (action: any) => {
  if (!action.type) {
    return next(action);
  }

  console.log('RDX> type: ', action.type);
  console.log('RDX> payload: ', action.payload);
  console.log('RDX> currentState: ', store.getState());

  next(action);

  console.log('RDX> next state: ', store.getState());
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);