import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import {app} from './reducers';
import {logger} from './middlewares/logger';
import {generatePositionDictionary} from './actions/positionDictionary';
import {generateTimeLine} from './actions/timeLine';
import {Root} from './components/Root';

const NODE_TO_MOUNT = document.getElementById('app');
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  combineReducers({app}),
  composeEnhancers(applyMiddleware(thunk, logger))
);

store.dispatch(generatePositionDictionary(store.getState().app.config.SCHEDULE_START));
store.dispatch(generateTimeLine(store.getState().app.config.SCHEDULE_START, store.getState().app.config.SCHEDULE_STEP));

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  NODE_TO_MOUNT
);
