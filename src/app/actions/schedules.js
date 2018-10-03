import {generateId} from '../utils';

export const CREATE_SCHEDULE = 'CREATE_SCHEDULE';
export const EDIT_SCHEDULE = 'EDIT_SCHEDULE';


export function createSchedule(schedule) {
  return {
    type: CREATE_SCHEDULE,
    payload: schedule
  }
}

export function editSchedule(schedule) {
  return {
    type: EDIT_SCHEDULE,
    payload: schedule
  }
}

export function saveSchedule(schedule) {
  return dispatch => {
    if (schedule.hasOwnProperty('id')) {
      dispatch(editSchedule(schedule));
    } else {
      schedule.id = generateId();
      dispatch(createSchedule(schedule));
    }
  }
}
