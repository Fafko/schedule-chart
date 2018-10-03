import React, {Component} from 'react';

export class ScheduleList extends Component {

  constructor() {
    super();

    this.setScheduleFormData = this.setScheduleFormData.bind(this);
  }

  setScheduleFormData(schedule) {
    this.props.setScheduleFormData(schedule);
  }

  getSchedules() {
    const {list} = this.props;

    return list.map(item => {
      return (
          <li className="schedule-list__item" key={item.id}>
            <a onClick={() => this.setScheduleFormData(item)} className="schedule-list__item-title"
               href="#">{item.title}</a>
            <a className="schedule-list__item-delete" href="#">-</a>
          </li>
      );
    });

  }

  render() {
    return (
        <ul className="schedule-list">
          {this.getSchedules()}
          <li className="schedule-list__item">
            <a className="schedule-list__item-title" href="#">+</a>
          </li>
        </ul>
    )
  }

}
