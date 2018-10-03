import React, {Component} from 'react';
import {getTextYCoord, getTextTransformYCoord, getCenter} from '../../../utils';

export class BaseSegment extends Component {

  getRect(start, end, height, color) {

    const {positions, yBase} = this.props;
    const scheduleOverflow = positions[end] < positions[start];
    const y = yBase + 6.8 - height;

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
          <rect x={x}
                y={y}
                height={height}
                width={width}
                fill={color}/>
      )
    }

  };

  getLabel(start, end, label, color) {

    if (!label) return null;

    const {positions, config, yBase} = this.props;
    const {
      FONT_SIZE: fontSize,
      FONT_SIZE_TO_FONT_OFFSET_COEFFICIENT: sizeToOffsetCoefficient
    } = config;
    const y = yBase + 9.1;

    const scheduleOverflow = positions[end] < positions[start];

    if (scheduleOverflow) {

      const x1 = getCenter(positions[start], 100);
      const x2 = getCenter(0, positions[end]);

      const lines1 = label.split(/\n/g).map((line, index) => {
        return <tspan x={x1} key={index} textAnchor="end" dy={index ? fontSize : 0}>{line}</tspan>
      });

      const lines2 = label.split(/\n/g).map((line, index) => {
        return <tspan x={x2} key={index} textAnchor="end" dy={index ? fontSize : 0}>{line.trim()}</tspan>
      });

      const text1Y = getTextYCoord(y, lines1.length, fontSize, sizeToOffsetCoefficient);
      const text2Y = getTextYCoord(y, lines2.length, fontSize, sizeToOffsetCoefficient);

      const transform1Y = getTextTransformYCoord(text1Y, lines1.length, fontSize, sizeToOffsetCoefficient);
      const transform2Y = getTextTransformYCoord(text2Y, lines2.length, fontSize, sizeToOffsetCoefficient);

      return (
          <g>
            <text x={x1} y={text1Y} fill={color} fontWeight={600} transform={`rotate(-90, ${x1}, ${transform1Y})`}
                  fontFamily="Arial"
                  fontSize={fontSize} textAnchor="end" dominantBaseline="central">
              {lines1}
            </text>
            <text x={x2} y={text2Y} fill={color} fontWeight={600} transform={`rotate(-90, ${x2}, ${transform2Y})`}
                  fontFamily="Arial"
                  fontSize={fontSize} textAnchor="end" dominantBaseline="central">
              {lines2}
            </text>
          </g>
      )

    } else {

      const x = getCenter(positions[start], positions[end]);

      const lines = label.split(/\n/g).map((line, index) => {
        return (
            <tspan x={x} key={index} textAnchor="end" dy={index ? fontSize : 0}>{line.trim()}</tspan>
        )
      });

      const textY = getTextYCoord(y, lines.length, fontSize, sizeToOffsetCoefficient);
      const transformY = getTextTransformYCoord(textY, lines.length, fontSize, sizeToOffsetCoefficient);

      return (
          <g>
            <text x={x} y={textY} fill={color} fontWeight={600}
                  fontFamily="Arial" transform={`rotate(-90, ${x}, ${transformY})`}
                  fontSize={fontSize} textAnchor="end" dominantBaseline="baseline">
              {lines}
            </text>
          </g>
      )

    }

  }

  render() {

    const {start, end, label = null, color, height} = this.props.segmentData;

    return (
        <g>
          {this.getRect(start, end, height, color)}
          {this.getLabel(start, end, label, color)}
        </g>
    )
  }

}
