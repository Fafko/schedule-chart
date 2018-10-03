import {connect} from 'react-redux';
import {Output} from './Output';

const mapStateToProps = (state) => {
  return {
    globals: state.app.globals,
    schedules: state.app.schedules,
    timeLine: state.app.timeLine,
    positions: state.app.positionDictionary,
    config: state.app.config
  }
};

export const OutputContainer = connect(
  mapStateToProps
)(Output);
