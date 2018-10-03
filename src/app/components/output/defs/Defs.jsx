import React, {Component} from 'react';

export class Defs extends Component {

  render() {
    return (
        <defs>
          <pattern id="diagonalBackground1" width="0.2" height="0.2" patternTransform="rotate(45 0 0)"
                   patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="0.2" stroke="#f4f4f4" strokeWidth="0.1"/>
          </pattern>
          <pattern id="diagonalBackground2" width="0.2" height="0.2" patternTransform="rotate(-45 0 0)"
                   patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="0.2" stroke="#ececec" strokeWidth="0.1"/>
          </pattern>
        </defs>
    )
  }

}