export const SET_TITLE = 'SET_TITLE';
export const SET_WORK_START = 'SET_WORK_START';
export const SET_WORK_END = 'SET_WORK_END';
export const SET_SHOW_WORK = 'SET_SHOW_WORK';

export function setTitle(title) {
  return {
    type: SET_TITLE,
    payload: title
  }
}

export function setWorkStart(start) {
  return {
    type: SET_WORK_START,
    payload: start
  }
}

export function setWorkEnd(end) {
  return {
    type: SET_WORK_END,
    payload: end
  }
}

export function setShowWork(show) {
  return {
    type: SET_SHOW_WORK,
    payload: show
  }
}
