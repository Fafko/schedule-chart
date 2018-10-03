import {connect} from 'react-redux';
import {UI} from './UI';

const mapStateToProps = (state) => {
  return {
    globals: state.app.globals,
    schedules: state.app.schedules,
    timeLine: state.app.timeLine,
    positions: state.app.positionDictionary,
    config: state.app.config
  }
};

export const UIContainer = connect(
  mapStateToProps
)(UI);
