import React, {Component} from 'react';
import {getTextYCoord, getCenter} from '../../../utils';

export class BottomSegment extends Component {

  getRect(start, end, color = 'none') {

    const {positions, yBase} = this.props;
    const scheduleOverflow = positions[end] < positions[start];
    const y = yBase + 6.8;
    const height = 1.7;

    if (scheduleOverflow) {

      const x1 = positions[start];
      const width1 = 100 - positions[start];

      const x2 = 0;
      const width2 = positions[end];

      return (
          <g>
            <rect x={x1} y={y} height={height} width={width1} fill={color}/>
            <rect x={x2} y={y} height={height} width={width2} fill={color}/>
          </g>
      )

    } else {

      const x = positions[start];
      const width = positions[end] - positions[start];

      return (
          <g>
            <line x1={positions[start]} y1={y - 2} x2={positions[start]} y2={y + 2.5}
                  stroke="#000" strokeWidth="0.15"/>
            <rect x={x}
                  y={y}
                  height={height}
                  width={width}
                  fill={color}/>
            <line x1={positions[end]} y1={y - 2} x2={positions[end]} y2={y + 2.5}
                  stroke="#000" strokeWidth="0.15"/>
          </g>
      )
    }

  };

  getLabel(start, end, label) {

    if (!label) return null;

    const {positions, config, yBase} = this.props;
    const {
      FONT_SIZE: fontSize,
      FONT_SIZE_TO_FONT_OFFSET_COEFFICIENT: sizeToOffsetCoefficient
    } = config;
    const y = yBase + 7.8;

    const scheduleOverflow = positions[end] < positions[start];

    if (scheduleOverflow) {

      const x1 = getCenter(positions[start], 100);
      const x2 = getCenter(0, positions[end]);

      const lines1 = label.split(/\n/g).map((line, index) => {
        return <tspan x={x1} key={index} textAnchor="end" dy={index ? fontSize : 0}>{line}</tspan>
      });

      const lines2 = label.split(/\n/g).map((line, index) => {
        return <tspan x={x2} key={index} textAnchor="middle" dy={index ? fontSize : 0}>{line.trim()}</tspan>
      });

      const text1Y = getTextYCoord(y, lines1.length, fontSize, sizeToOffsetCoefficient);
      const text2Y = getTextYCoord(y, lines2.length, fontSize, sizeToOffsetCoefficient);

      return (
          <g>
            <text x={x1} y={text1Y} fontWeight={900} fontFamily="Arial"
                  fontSize={fontSize} textAnchor="middle" dominantBaseline="central">
              {lines1}
            </text>
            <text x={x2} y={text2Y} fontWeight={900} fontFamily="Arial"
                  fontSize={fontSize} textAnchor="middle" dominantBaseline="central">
              {lines2}
            </text>
          </g>
      )

    } else {

      const x = getCenter(positions[start], positions[end]);

      const lines = label.split(/\n/g).map((line, index) => {
        return (
            <tspan x={x} key={index} textAnchor="middle" dy={index ? fontSize : 0}>{line.trim()}</tspan>
        )
      });

      const textY = getTextYCoord(y, lines.length, fontSize, sizeToOffsetCoefficient);

      return (
          <g>
            <text x={x} y={textY} fontWeight={900} fontFamily="Arial"
                  fontSize={fontSize} textAnchor="middle" dominantBaseline="baseline">
              {lines}
            </text>
          </g>
      )

    }

  }

  render() {

    const {start, end, label = null, color} = this.props.segmentData;

    return (
        <g>
          {this.getRect(start, end, color)}
          {this.getLabel(start, end, label)}
        </g>
    )
  }

}
