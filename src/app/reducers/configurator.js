import {scheduleForm} from './scheduleForm';
import {SET_IS_OPENED, SET_SCHEDULE_FORM_DATA} from '../actions/configurator';

const DEFAULT_STATE = {
  isOpened: true
};

export function configurator(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_IS_OPENED:
      return {
        ...state,
        isOpened: action.payload
      };
    case SET_SCHEDULE_FORM_DATA:
      return {
        ...state,
        scheduleFormData: action.payload
      };
    default:
      return {
        ...state,
        scheduleFormData: scheduleForm(state.scheduleFormData, action)
      }
  }
}
