import React, {Component} from 'react';

export class Work extends Component {

  getStart() {

    const {positions, config, workData, yBase} = this.props;
    const {WORK_FONT_SIZE: fontSize, WORK_TIME_FONT_SIZE: timeFontSize} = config;
    const {start} = workData;
    const lineY = yBase + 6.8;
    const textY = yBase + 2.2;

    return (
        <g>
          <line x1={positions[start]} y1={lineY}
                x2={positions[start]} y2={lineY - 4.2}
                stroke="#fda7bb" strokeWidth={0.04}/>
          <text x={positions[start]} fill="#fd355b" y={textY} fontFamily="Arial"
                textAnchor="start">
            <tspan x={positions[start]} fontSize={timeFontSize} fontWeight="600" textAnchor="middle">{start}</tspan>
            <tspan x={positions[start] + 1.8 * timeFontSize} fontSize={fontSize} textAnchor="start">Work Starts</tspan>
          </text>
        </g>
    )

  }


  getEnd() {

    const {positions, config, workData, yBase} = this.props;
    const {WORK_FONT_SIZE: fontSize, WORK_TIME_FONT_SIZE: timeFontSize} = config;
    const {end} = workData;
    const lineY = yBase + 6.8;
    const textY = yBase + 2.2;

    return (
        <g>
          <line x1={positions[end]} y1={lineY}
                x2={positions[end]} y2={lineY - 4.2}
                stroke="#fda7bb" strokeWidth={0.04}/>
          <text x={positions[end]} fill="#fd355b" y={textY} fontFamily="Arial"
                textAnchor="end">
            <tspan x={positions[end]} fontSize={timeFontSize} fontWeight="600" textAnchor="middle">{end}</tspan>
            <tspan x={positions[end] - 1.8 * timeFontSize} fontSize={fontSize} textAnchor="end">Work Ends</tspan>
          </text>
        </g>
    )

  }


  render() {
    return (
        <g>
          {this.getStart()}
          {this.getEnd()}
        </g>
    )
  }

}