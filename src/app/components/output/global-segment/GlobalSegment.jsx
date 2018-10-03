import React, {Component} from 'react';
import {getTextYCoord, getTextTransformYCoord, getCenter} from '../../../utils';

export class GlobalSegment extends Component {

  getRect(start, end, fillVariant) {

    const fill = `url(#diagonalBackground${fillVariant})`;
    const {positions, config, schedules = []} = this.props;
    const scheduleOverflow = positions[end] < positions[start];
    const {SCHEDULE_HEIGHT, OUTPUT_TOP_OFFSET} = config;
    const height = OUTPUT_TOP_OFFSET + schedules.length * SCHEDULE_HEIGHT;
    const y = 0;

    if (scheduleOverflow) {

      const x1 = positions[start];
      const width1 = 100 - positions[start];

      const x2 = 0;
      const width2 = positions[end];

      return (
          <g>
            <rect x={x1} y={y} height={height} width={width1} fill={fill}/>
            <rect x={x2} y={y} height={height} width={width2} fill={fill}/>
          </g>
      )

    } else {

      const x = positions[start];
      const width = positions[end] - positions[start];

      return (
          <rect x={x}
                y={y}
                height={height}
                width={width}
                fill={fill}
          />
      )
    }

  };

  getLabel(start, end, label) {

    if (!label) return null;

    const {positions, config} = this.props;
    const {
      FONT_SIZE: fontSize,
      GLOBAL_SEGMENT_LABELS_Y: y,
      FONT_SIZE_TO_FONT_OFFSET_COEFFICIENT: sizeToOffsetCoefficient
    } = config;

    const scheduleOverflow = positions[end] < positions[start];

    if (scheduleOverflow) {

      const x1 = getCenter(positions[start], 100);
      const x2 = getCenter(0, positions[end]);

      const lines1 = label.split(/\n/g).map((line, index) => {
        return <tspan x={x1} key={index} textAnchor="middle" dy={index ? fontSize : 0}>{line}</tspan>
      });

      const lines2 = label.split(/\n/g).map((line, index) => {
        return <tspan x={x2} key={index} textAnchor="middle" dy={index ? fontSize : 0}>{line}</tspan>
      });

      const text1Y = getTextYCoord(y, lines1.length, fontSize, sizeToOffsetCoefficient);
      const text2Y = getTextYCoord(y, lines2.length, fontSize, sizeToOffsetCoefficient);

      const transform1Y = getTextTransformYCoord(text1Y, lines1.length, fontSize, sizeToOffsetCoefficient);
      const transform2Y = getTextTransformYCoord(text2Y, lines2.length, fontSize, sizeToOffsetCoefficient);

      return (
          <g>
            <text x={x1} y={text1Y} fontWeight={600} fill="#000" transform={`rotate(-90, ${x1}, ${transform1Y})`}
                  fontFamily="Arial"
                  fontSize={fontSize} textAnchor="middle" dominantBaseline="central">
              {lines1}
            </text>
            <text x={x2} y={text2Y} fontWeight={600} fill="#000" transform={`rotate(-90, ${x2}, ${transform2Y})`}
                  fontFamily="Arial"
                  fontSize={fontSize} textAnchor="middle" dominantBaseline="central">
              {lines2}
            </text>
          </g>
      )

    } else {

      const x = getCenter(positions[start], positions[end]);

      const lines = label.split(/\n/g).map((line, index) => {
        return (
            <tspan x={x} key={index} textAnchor="middle" dy={index ? fontSize : 0}>{line}</tspan>
        )
      });

      const textY = getTextYCoord(y, lines.length, fontSize, sizeToOffsetCoefficient);
      const transformY = getTextTransformYCoord(textY, lines.length, fontSize, sizeToOffsetCoefficient);

      return (
          <text x={x} y={textY} fontWeight={600} fill="#000" transform={`rotate(-90, ${x}, ${transformY})`}
                fontFamily="Arial"
                fontSize={fontSize} textAnchor="middle" dominantBaseline="central">
            {lines}
          </text>
      )

    }

  }

  render() {

    const {start, end, label = null, fill = 1} = this.props.segmentData;

    return (
        <g>
          {this.getRect(start, end, fill)} {this.getLabel(start, end, label)}
        </g>
    )
  }

}
