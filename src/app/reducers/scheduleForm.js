import {SET_TITLE, SET_WORK_START, SET_WORK_END, SET_SHOW_WORK} from '../actions/scheduleForm';

const DEFAULT_SCHEDULE_TITLE = 'New schedule';
const DEFAULT_WORK_START = '08:00';
const DEFAULT_WORK_END = '17:00';

const DEFAULT_STATE = {
  title: DEFAULT_SCHEDULE_TITLE,
  work: {
    start: DEFAULT_WORK_START,
    end: DEFAULT_WORK_END
  },
  baseSegments: [],
  bottomSegments: []
};

export function scheduleForm(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.payload
      };
    case SET_WORK_START:
      return {
        ...state,
        work: {
          ...state.work,
          start: action.payload
        }
      };
    case SET_WORK_END:
      return {
        ...state,
        work: {
          ...state.work,
          end: action.payload
        }
      };
    case SET_SHOW_WORK:
      return {
        ...state,
        work: action.payload ? DEFAULT_STATE.work : null
      };

    default:
      return state
  }
}
