import {connect} from 'react-redux';
import {GlobalSegment} from './GlobalSegment';

const mapStateToProps = (state) => {
  return {
    positions: state.app.positionDictionary,
    schedules: state.app.schedules,
    config: state.app.config
  }
};

export const GlobalSegmentContainer = connect(
  mapStateToProps
)(GlobalSegment);
