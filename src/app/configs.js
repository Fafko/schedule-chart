import {getDivisorsOf} from './utils';

export const MINUTES_IN_HOUR = 60;
export const MINUTES_IN_DAY = 1440;
export const AVAILABLE_SCHEDULE_STEPS = getDivisorsOf(MINUTES_IN_HOUR);
export const MIN_SCHEDULE_STEP = Math.min(...AVAILABLE_SCHEDULE_STEPS);
