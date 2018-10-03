import React, {Component} from 'react';
import {downloadFile, padStart} from '../../../utils';


export class TopPanel extends Component {

  constructor() {
    super();

    this.setScheduleStep = this.setScheduleStep.bind(this);
    this.setScheduleStart = this.setScheduleStart.bind(this);
    this.exportOutputToSVG = this.exportOutputToSVG.bind(this);
    this.openConfigurator = this.openConfigurator.bind(this);
  }

  getScheduleStepOptions() {

    const {config} = this.props;
    const {AVAILABLE_SCHEDULE_STEPS} = config;

    return AVAILABLE_SCHEDULE_STEPS
        .sort((a, b) => a > b ? 1 : -1)
        .map((option, index) => (
            <option key={index} value={option}>{option}</option>)
        )
  }

  getScheduleStartOptions() {

    const moment = new Date();
    moment.setHours(0);
    moment.setMinutes(0);
    moment.setSeconds(0);
    const count = 24;

    let hours = [];

    for (let i = 0; i < count; i += 1) {
      const hourLabel = padStart(`${moment.getHours()}`, 2, '0');
      const minuteLabel = padStart(`${moment.getMinutes()}`, 2, '0');

      hours.push({
        label: `${hourLabel}:${minuteLabel}`,
        value: moment.getHours()
      });

      moment.setHours(moment.getHours() + 1);
    }

    return hours.map((data, index) => <option key={index} value={data.value}>{data.label}</option>);

  }

  setScheduleStep(event) {
    event.preventDefault();
    this.props.setScheduleStep(parseInt(event.target.value), this.props.config.SCHEDULE_START)
  }

  setScheduleStart(event) {
    event.preventDefault();
    this.props.setScheduleStart(event.target.value, this.props.config.SCHEDULE_STEP)
  }

  exportOutputToSVG(event) {
    event.preventDefault();
    const {config} = this.props;
    const {EXPORT_SVG_FILENAME, EXPORT_SVG_MIME_TYPE} = config;
    const svg = document.querySelector('#app svg').outerHTML;

    downloadFile(svg, EXPORT_SVG_FILENAME, EXPORT_SVG_MIME_TYPE)
  }

  openConfigurator(event) {
    event.preventDefault();
    this.props.openConfigurator();
  }

  render() {

    const {config} = this.props;
    const {SCHEDULE_STEP, SCHEDULE_START} = config;

    return (
        <div className="top-panel">
          <div className="top-panel__block">
            <div className="top-panel__schedule-handler">
              <div className="top-panel__select-label">Chart step:</div>
              <select className="select" onChange={this.setScheduleStep} value={SCHEDULE_STEP}>
                {this.getScheduleStepOptions()}
              </select>
            </div>
            <div className="top-panel__schedule-handler">
              <div className="top-panel__select-label">
                Chart start:
              </div>
              <select className="select" onChange={this.setScheduleStart} value={SCHEDULE_START}>
                {this.getScheduleStartOptions()}
              </select>
            </div>
            <a href="#" className="button __info" onClick={this.openConfigurator}>Configure</a>
          </div>
          <div className="top-panel__block">
            <a href="#" className="button __warning">Open from file</a>&nbsp;
            <a href="#" className="button __warning">Save to file</a>&nbsp;
            <a href="#" className="button __info" onClick={this.exportOutputToSVG}>Export to SVG</a>
          </div>
        </div>
    )
  }

}
