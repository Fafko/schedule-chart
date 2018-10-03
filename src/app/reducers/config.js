import {SET_SCHEDULE_STEP, SET_SCHEDULE_START} from '../actions/config';

import {
  AVAILABLE_SCHEDULE_STEPS
} from '../configs'

const DEFAULT_STATE = {
  AVAILABLE_SCHEDULE_STEPS,
  SCHEDULE_START: 5,
  SCHEDULE_STEP: 15,
  FONT_SIZE: 0.45,
  TITLE_FONT_SIZE: 1.25,
  TIME_LINE_FONT_SIZE: 0.6,
  WORK_FONT_SIZE: 0.55,
  WORK_TIME_FONT_SIZE: 0.725,
  FONT_SIZE_TO_FONT_OFFSET_COEFFICIENT: 0.087,
  GLOBAL_SEGMENT_LABELS_Y: 6.55,
  OUTPUT_TOP_OFFSET: 12,
  SCHEDULE_HEIGHT: 15.8,
  EXPORT_SVG_FILENAME: 'schedules-chart.svg',
  EXPORT_SVG_MIME_TYPE: 'image/svg+xml'
};

export function config(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_SCHEDULE_STEP:
      return {
        ...state,
        SCHEDULE_STEP: action.payload
      };
    case SET_SCHEDULE_START:
      return {
        ...state,
        SCHEDULE_START: action.payload
      };
    default:
      return state
  }
}
