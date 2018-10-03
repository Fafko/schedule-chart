import {connect} from 'react-redux';
import {ScheduleList} from './ScheduleList';
import {setScheduleFormData} from '../../../actions/configurator';

const mapStateToProps = (state) => {
  return {
    config: state.app.config,
    list: state.app.schedules
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setScheduleFormData: (schedule) => dispatch(setScheduleFormData(schedule))
  }
};

export const ScheduleListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleList);
