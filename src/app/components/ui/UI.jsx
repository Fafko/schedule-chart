import React, {Component} from 'react';

import {TopPanelContainer} from './top-panel/TopPanelContainer';
import {ConfiguratorContainer} from './configurator/ConfiguratorContainer';

export class UI extends Component {

  render() {
    return (
        <div className="ui" >
          <TopPanelContainer/>
          <ConfiguratorContainer/>
        </div>
    )
  }

}
