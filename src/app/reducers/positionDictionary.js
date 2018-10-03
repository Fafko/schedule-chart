import {GENERATE_POSITION_DICTIONARY} from '../actions/positionDictionary';

const DEFAULT_STATE = {};

export function positionDictionary(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GENERATE_POSITION_DICTIONARY:
      return action.payload;
    default:
      return state
  }
}