import {EDIT_SCHEDULE, CREATE_SCHEDULE} from '../actions/schedules';

const DEFAULT_STATE = [
  {
    id: 'JHI7HTH9LLESJ',
    title: 'Regular Schedule',
    work: {
      start: '10:00',
      end: '19:00'
    },
    baseSegments: [
      {
        start: '23:30',
        end: '08:00',
        color: '#0095f3',
        height: 1.5,
        label: 'SLEEP 08:30'
      },
      {
        start: '08:00',
        end: '08:00',
        color: '#0095f3',
        height: 1.5,
        label: 'WAKE UP'
      },
      {
        start: '08:00',
        end: '10:00',
        color: '#ff4b8b',
        height: 1.5
      },
      {
        start: '10:00',
        end: '10:30',
        color: '#ff4b8b',
        height: 2,
        label: 'STAND UP 00:30'
      },
      {
        start: '10:30',
        end: '10:45',
        color: '#ffe632',
        height: 2,
        label: 'COFFEE 00:15'
      },
      {
        start: '10:45',
        end: '11:00',
        color: '#ffe632',
        height: 2,
        label: 'BACK TO FLOW 00:15'
      },
      {
        start: '11:00',
        end: '12:00',
        color: '#00cc05',
        height: 2,
        label: 'FLOW 01:00'
      },
      {
        start: '12:00',
        end: '12:45',
        color: '#ff4b8b',
        height: 2,
        label: 'LUNCH 00:45'
      },
      {
        start: '12:45',
        end: '13:45',
        color: '#ffe632',
        height: 2,
        label: 'BACK TO FLOW \n AFTER LUNCH 00:45'
      },
      {
        start: '13:45',
        end: '16:00',
        color: '#00cc05',
        height: 2,
        label: 'FLOW 02:15'
      },
      {
        start: '16:00',
        end: '16:15',
        color: '#ff4b8b',
        height: 2,
        label: 'MEAL 00:15'
      },
      {
        start: '16:15',
        end: '16:45',
        color: '#ffe632',
        height: 2,
        label: 'BACK TO FLOW 00:30'
      },
      {
        start: '16:45',
        end: '19:00',
        color: '#00cc05',
        height: 2,
        label: 'FLOW 02:15'
      },
      {
        start: '19:00',
        end: '20:00',
        color: '#ff4b8b',
        height: 1.5
      },
      {
        start: '20:00',
        end: '22:30',
        color: '#00cc05',
        height: 2,
        label: 'TIME WITH KID \n & FAMILY 02:30'
      },
      {
        start: '22:30',
        end: '22:30',
        color: '#ffe632',
        height: 2,
        label: 'KID FALLS ASLEEP'
      },
      {
        start: '22:30',
        end: '23:30',
        color: '#ffe632',
        height: 2,
        label: 'PERSONAL TIME \n BEFORE SLEEP 01:00'
      }
    ],
    bottomSegments: [
      {
        start: '09:00',
        end: '10:00',
        label: 'PUBLIC \n TRANSPORT'
      },
      {
        start: '10:00',
        end: '19:00',
        color: 'rgba(0, 204, 5, 0.1)',
        label: 'ACTIVITY AT WORK'
      },
      {
        start: '19:00',
        end: '20:00',
        label: 'PUBLIC \n TRANSPORT'
      },
      {
        start: '20:00',
        end: '23:30',
        color: 'rgba(0, 204, 5, 0.1)',
        label: 'ACTIVITY AT HOME'
      }
    ]
  },
  {
    id: 'JHI7ID87AZHM3',
    title: 'Optimized Schedule',
    baseSegments: [
      {
        start: '00:15',
        end: '06:45',
        color: '#0095f3',
        height: 1.5,
        label: 'SLEEP 08:30'
      },
      {
        start: '06:15',
        end: '10:45',
        color: '#ff4b8b',
        height: 2,
        label: 'MEAL 01:00'
      },
      {
        start: '14:00',
        end: '14:30',
        color: '#ff4b8b',
        height: 2,
        label: 'MEAL 01:00'
      }
    ]
  }
];

export function schedules(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CREATE_SCHEDULE:
      return [
        ...state,
        action.payload
      ];
    case EDIT_SCHEDULE:
      return state.map(schedule => {
        if (schedule.id === action.payload.id) {
          return {...schedule, ...action.payload};
        }
        return schedule;
      });
    default:
      return state
  }
}
