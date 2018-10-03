import {connect} from 'react-redux';
import {ScheduleForm} from './ScheduleForm';
import {setTitle, setWorkStart, setWorkEnd, setShowWork} from '../../../actions/scheduleForm';
import {saveSchedule} from '../../../actions/schedules';

const mapStateToProps = (state) => {
  return {
    config: state.app.config,
    data: state.app.configurator.scheduleFormData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => dispatch(setTitle(title)),
    setWorkStart: (start) => dispatch(setWorkStart(start)),
    setWorkEnd: (end) => dispatch(setWorkEnd(end)),
    setShowWork: (end) => dispatch(setShowWork(end)),
    saveSchedule: (schedule) => dispatch(saveSchedule(schedule))
  }
};

export const ScheduleFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleForm);
