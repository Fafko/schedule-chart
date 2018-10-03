import {schedules} from './schedules';
import {config} from './config';
import {positionDictionary} from './positionDictionary';
import {timeLine} from './timeLine';
import {configurator} from './configurator';

export function app(state = {}, action) {
  return {
    schedules: schedules(state.schedules, action),
    globals: [
      {
        start: '07:30',
        end: '10:00',
        label: 'HEAVY TRAFFIC \n ON THE WAY TO WORK',
        fill: 1
      },
      {
        start: '10:00',
        end: '10:30',
        label: 'SCRUM \n STAND-UP MEETING',
        fill: 2
      },
      {
        start: '17:00',
        end: '19:30',
        label: 'HEAVY TRAFFIC \n ON THE WAY HOME',
        fill: 1
      }
    ],
    config: config(state.config, action),
    positionDictionary: positionDictionary(state.positionDictionary, action),
    timeLine: timeLine(state.timeLine, action),
    configurator: configurator(state.configurator, action)
  }
}
