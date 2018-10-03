import {GENERATE_TIME_LINE} from '../actions/timeLine';

const DEFAULT_STATE = [];

export function timeLine(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GENERATE_TIME_LINE:
      return action.payload;
    default:
      return state
  }
}