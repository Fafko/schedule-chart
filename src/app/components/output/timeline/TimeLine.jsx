import React, {Component} from 'react';

export class TimeLine extends Component {

  getTimeLine() {

    const {positions, yBase, config, excludeLabels = []} = this.props;
    const {TIME_LINE_FONT_SIZE: fontSize} = config;

    const lineY = yBase + 6.8;
    const textY = yBase + 3.5;

    return this.props.timeLine.map((momentData, i) => {

      let label = null;

      if (momentData.label && !excludeLabels.includes(momentData.label)) {
        label = (
            <text x={positions[momentData.key]} y={textY} fontFamily="Arial" fontSize={fontSize}
                  textAnchor="middle">{momentData.label}</text>
        )
      }

      return (
          <g key={i}>
            <line x1={positions[momentData.key]} y1={lineY}
                  x2={positions[momentData.key]} y2={lineY - momentData.height}
                  stroke="#000" strokeWidth={momentData.bold ? 0.15 : 0.075}/>
            {label}
          </g>
      )
    });
  }

  render() {
    return this.getTimeLine()
  }

}
