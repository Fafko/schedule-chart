import {padStart} from '../utils';
import {MINUTES_IN_DAY} from '../configs';

export const GENERATE_TIME_LINE = 'GENERATE_TIME_LINE';

export function generateTimeLine(scheduleStart, scheduleStep) {

  const count = MINUTES_IN_DAY / scheduleStep;
  const moment = new Date();
  moment.setHours(scheduleStart);
  moment.setMinutes(0);
  moment.setSeconds(0);

  let timeLine = [];

  for (let i = 0; i <= count; i += 1) {

    const data = {
      label: null,
      bold: false,
      height: 2.5,
      key: padStart(`${moment.getHours()}`, 2, '0') + ':' + padStart(`${moment.getMinutes()}`, 2, '0')
    };

    if (moment.getMinutes() === 0) {
      data.label = padStart(`${moment.getHours()}:00`, 5, '0');
      data.bold = true;
    }

    if (moment.getMinutes() === 0 || moment.getMinutes() === 30) {
      data.height = 2.87;
    }

    timeLine.push(data);

    moment.setMinutes(moment.getMinutes() + scheduleStep);

  }

  timeLine.push({
    label: padStart(`${scheduleStart}:00`, 5, '0'),
    height: 2.87,
    bold: true,
    key: '_' + padStart(`${scheduleStart}`, 2, '0') + ':00'
  });

  return {
    type: GENERATE_TIME_LINE,
    payload: timeLine
  }
}