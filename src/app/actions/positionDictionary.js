import {padStart} from '../utils';
import {MINUTES_IN_DAY, MIN_SCHEDULE_STEP} from '../configs'

export const GENERATE_POSITION_DICTIONARY = 'GENERATE_POSITION_DICTIONARY';

export function generatePositionDictionary(scheduleStart) {

  let moment = new Date();
  moment.setHours(scheduleStart);
  moment.setMinutes(0);
  moment.setSeconds(0);

  const dictionary = {};
  const count = MINUTES_IN_DAY / MIN_SCHEDULE_STEP;

  for (let i = 0; i <= count; i += 1) {

    let key = padStart(`${moment.getHours()}`, 2, '0') + ':' + padStart(`${moment.getMinutes()}`, 2, '0');

    if (dictionary.hasOwnProperty(key)) {
      key = `_${key}`;
    }

    dictionary[key] = (i / count * 100) || 0;

    moment.setMinutes(moment.getMinutes() + MIN_SCHEDULE_STEP);

  }


  return {
    type: GENERATE_POSITION_DICTIONARY,
    payload: dictionary
  }
}