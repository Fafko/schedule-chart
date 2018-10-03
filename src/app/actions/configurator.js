export const SET_IS_OPENED = 'SET_IS_OPENED';
export const SET_SCHEDULE_FORM_DATA = 'SET_SCHEDULE_FORM_DATA';

export function setIsOpened(isOpened) {
  return {
    type: SET_IS_OPENED,
    payload: isOpened
  }
}

export function setScheduleFormData(data) {
  return {
    type: SET_SCHEDULE_FORM_DATA,
    payload: data
  }
}
