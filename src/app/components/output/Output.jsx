import React, {Component} from 'react';

import {Defs} from './defs/Defs';
import {GlobalSegmentContainer} from './global-segment/GlobalSegmentContainer';
import {ScheduleContainer} from './schedule/ScheduleContainer';

export class Output extends Component {

  getGlobals() {
    return this.props.globals.map((segment, i) => (
        <GlobalSegmentContainer segmentData={segment} key={i}/>
    ));
  }

  getSchedules() {
    return this.props.schedules.map((schedule, i) => (
        <ScheduleContainer scheduleData={schedule} index={i} key={i}/>
    ));
  }

  render() {

    const {config, schedules = []} = this.props;
    const {SCHEDULE_HEIGHT, OUTPUT_TOP_OFFSET} = config;
    const TOTAL_HEIGHT = OUTPUT_TOP_OFFSET + schedules.length * SCHEDULE_HEIGHT;

    return (
        <div className="output">
          <svg viewBox={`-2.5 0 105 ${TOTAL_HEIGHT}`}
               xmlns='http://www.w3.org/2000/svg'>
            <Defs/>
            {this.getGlobals()}
            {this.getSchedules()}
          </svg>
        </div>
    )
  }

}
