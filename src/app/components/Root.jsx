import React, {Component} from 'react';

import {OutputContainer} from './output/OutputContainer';
import {UIContainer} from './ui/UIContainer';

export class Root extends Component {

  render() {
    return (
        <div className="root">
          <UIContainer/>
          <OutputContainer/>
        </div>
    )
  }

}
