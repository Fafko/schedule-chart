import React, {Component} from 'react';
import {TimePicker} from '../time-picker/TimePicker';

export class ScheduleForm extends Component {

  constructor() {
    super();

    this.setTitle = this.setTitle.bind(this);
    this.setWorkStart = this.setWorkStart.bind(this);
    this.setWorkEnd = this.setWorkEnd.bind(this);
    this.setShowWork = this.setShowWork.bind(this);
    this.getWorkInputs = this.getWorkInputs.bind(this);
    this.save = this.save.bind(this);
  }

  setTitle(event) {
    this.props.setTitle(event.target.value);
  }

  setWorkStart(value) {
    this.props.setWorkStart(value);
  }

  setWorkEnd(value) {
    this.props.setWorkEnd(value);
  }

  setShowWork(event) {
    this.props.setShowWork(event.target.checked);
  }

  save(event) {
    event.preventDefault();
    this.props.saveSchedule(this.props.data);
  }

  getWorkInputs(work) {

    if (!work) {
      return null
    }

    return (
        <React.Fragment>
          <label>
            <span>Start of work</span>
            <TimePicker onChange={this.setWorkStart} value={work.start}/>
          </label>
          <label>
            <span>End of work</span>
            <TimePicker onChange={this.setWorkEnd} value={work.end}/>
          </label>
        </React.Fragment>
    );

  }

  render() {

    const {data} = this.props;

    return (
        <form>

          <div>
            <label>
              <span>Schedule Title</span>
              <input onChange={this.setTitle} type="text" value={data.title}/>
            </label>
            <label>
              <span>Show work hours</span>
              <input onChange={this.setShowWork} checked={!!data.work} type="checkbox"/>
            </label>
            {this.getWorkInputs(data.work)}
          </div>

          <button onClick={this.save}>SAVE</button>

        </form>
    )
  }

}
