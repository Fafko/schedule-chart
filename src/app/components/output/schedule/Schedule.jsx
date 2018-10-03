import React, {Component} from 'react';

import {TimeLineContainer} from '../timeline/TimeLineContainer';
import {BaseSegmentContainer} from '../base-segment/BaseSegmentContainer';
import {BottomSegmentContainer} from '../bottom-segment/BottomSegmentContainer';
import {WorkContainer} from '../work/WorkContainer';

export class Schedule extends Component {

  getTitle() {

    const {index = 0, config, scheduleData} = this.props;
    const yBase = config.OUTPUT_TOP_OFFSET + config.SCHEDULE_HEIGHT * index;
    const {title = null} = scheduleData;

    if (!title) return null;

    return <text x='0' y={yBase} fontFamily="Arial" fontSize={config.TITLE_FONT_SIZE} textAnchor="start">{title}</text>;

  }

  getBaseSegments() {

    const {index = 0, config, scheduleData} = this.props;
    const yBase = config.OUTPUT_TOP_OFFSET + config.SCHEDULE_HEIGHT * index;
    const {baseSegments = []} = scheduleData;

    return baseSegments.map((segment, key) =>
        <BaseSegmentContainer key={key} yBase={yBase} segmentData={segment}/>
    );

  }

  getBottomSegments() {

    const {index = 0, config, scheduleData} = this.props;
    const yBase = config.OUTPUT_TOP_OFFSET + config.SCHEDULE_HEIGHT * index;
    const {bottomSegments = []} = scheduleData;

    return bottomSegments.map((segment, key) =>
        <BottomSegmentContainer key={key} yBase={yBase} segmentData={segment}/>
    );

  }

  getWorkMoments() {

    const {index = 0, config, scheduleData} = this.props;
    const {work = null} = scheduleData;
    const yBase = config.OUTPUT_TOP_OFFSET + config.SCHEDULE_HEIGHT * index;

    if (!work) return null;

    return <WorkContainer yBase={yBase} workData={work}/>

  }

  render() {

    const timeLineExcludedLabels = [];
    const {index = 0, config, scheduleData} = this.props;
    const yBase = config.OUTPUT_TOP_OFFSET + config.SCHEDULE_HEIGHT * index;
    const {work = null} = scheduleData;

    if (work) {
      timeLineExcludedLabels.push(work.start);
      timeLineExcludedLabels.push(work.end);
    }

    return (
        <g>
          {this.getTitle()}
          {this.getWorkMoments()}
          {this.getBaseSegments()}
          {this.getBottomSegments()}
          <TimeLineContainer excludeLabels={timeLineExcludedLabels} yBase={yBase}/>
        </g>
    )
  }

}
