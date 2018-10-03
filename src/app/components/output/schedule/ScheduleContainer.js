import {connect} from 'react-redux';
import {Schedule} from './Schedule';

const mapStateToProps = (state) => {
  return {
    config: state.app.config,
    timeLine: state.app.timeLine
  }
};

export const ScheduleContainer = connect(
  mapStateToProps
)(Schedule);
