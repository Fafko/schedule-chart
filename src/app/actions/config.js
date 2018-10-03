export const SET_SCHEDULE_STEP = 'SET_SCHEDULE_STEP';
export const SET_SCHEDULE_START = 'SET_SCHEDULE_START';

export function setScheduleStep(step) {
  return {
    type: SET_SCHEDULE_STEP,
    payload: step
  }
}

export function setScheduleStart(start) {
  return {
    type: SET_SCHEDULE_START,
    payload: start
  }
}
