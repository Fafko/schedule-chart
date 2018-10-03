import React, {Component} from 'react';
import {padStart} from '../../../utils';

const DEFAULT_VALUE = '00:00';
const MINUTES_STEP = 5;

export class TimePicker extends Component {

  constructor() {
    super();

    this.hourRef = React.createRef();
    this.minuteRef = React.createRef();
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    event.preventDefault();

    const {hoursOnly = false, onChange} = this.props;

    let value = hoursOnly
        ? parseInt(this.hourRef.current.value)
        : `${this.hourRef.current.value}:${this.minuteRef.current.value}`;

    if (typeof onChange === 'function') onChange(value);
  }

  getHours() {

    const {value = DEFAULT_VALUE, hoursOnly} = this.props;
    const hoursValue = hoursOnly ? value : value.split(':')[0];

    const moment = new Date();
    moment.setHours(0);
    moment.setMinutes(0);
    moment.setSeconds(0);
    const count = 24;

    let hours = [];

    for (let i = 0; i < count; i += 1) {

      const hourLabel = padStart(`${moment.getHours()}`, 2, '0');
      const minuteLabel = padStart(`${moment.getMinutes()}`, 2, '0');
      const combinedValue = `${hourLabel}:${minuteLabel}`;

      const data = {
        label: hoursOnly ? combinedValue : hourLabel,
        value: hoursOnly ? combinedValue : hourLabel
      };

      hours.push(data);
      moment.setHours(moment.getHours() + 1);
    }

    return (
        <select className="select" ref={this.hourRef} value={hoursValue} onChange={this.onChange}>
          {hours.map((data, index) => <option key={index} value={data.value}>{data.label}</option>)}
        </select>
    );

  }

  getMinutes() {

    const {hoursOnly = false, value = DEFAULT_VALUE} = this.props;
    const minutesValue = value.split(':')[1];

    if (hoursOnly) return null;

    const moment = new Date();
    moment.setHours(0);
    moment.setMinutes(0);
    moment.setSeconds(0);
    const count = 60;

    let minutes = [];

    for (let i = 0; i < count; i += MINUTES_STEP) {

      const minuteLabel = padStart(`${moment.getMinutes()}`, 2, '0');

      const data = {
        label: minuteLabel,
        value: minuteLabel
      };

      minutes.push(data);
      moment.setMinutes(moment.getMinutes() + MINUTES_STEP);
    }

    return (
        <select className="select" ref={this.minuteRef} value={minutesValue} onChange={this.onChange}>
          {minutes.map((data, index) => <option key={index} value={data.value}>{data.label}</option>)}
        </select>
    );

  }

  render() {
    return (
        <div className="time-picker">
          {this.getHours()}
          {this.getMinutes()}
        </div>
    )
  }

}
