import React, {Component} from 'react';
import {ScheduleListContainer} from '../schedule-list/ScheduleListContainer';
import {ScheduleFormContainer} from '../schedule-form/ScheduleFormContainer';

export class Configurator extends Component {

  constructor() {
    super();

    this.state = {
      activeTab: 'schedules'
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.chooseTab = this.chooseTab.bind(this);
  }

  open(event) {
    event.preventDefault();
    this.props.setIsOpened(true);
  }

  close(event) {
    event.preventDefault();
    this.props.setIsOpened(false);
  }

  chooseTab(event) {
    this.setState({
      activeTab: event.target.getAttribute('data-target')
    });
  }

  render() {

    const className = [
      'configurator',
      this.props.isOpened ? '__opened' : '__closed'
    ].join(' ');

    const tabClassName = (id) => {
      return [
        'configurator__tab',
        id === this.state.activeTab ? '__active' : ''
      ].join(' ');
    };

    const tabButtonClassName = (id) => {
      return [
        'configurator__tab-button',
        id === this.state.activeTab ? '__active' : ''
      ].join(' ');
    };

    return (
        <div className={className}>
          <div className="configurator__content">
            <ul className="configurator__tab-list">
              <li onClick={this.chooseTab} className={tabButtonClassName('schedules')} data-target="schedules">
                Schedules
              </li>
              <li onClick={this.chooseTab} className={tabButtonClassName('globals')} data-target="globals">Global
                Segments
              </li>
            </ul>
            <a href="#" className="configurator__close-button" onClick={this.close}>+</a>
            <div id="schedules" className={tabClassName('schedules')}>
              <ScheduleListContainer/>
              <ScheduleFormContainer/>
            </div>
            <div id="globals" className={tabClassName('globals')}/>
          </div>
        </div>
    )
  }

}
