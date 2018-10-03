import {connect} from 'react-redux';
import {BaseSegment} from './BaseSegment';

const mapStateToProps = (state) => {
  return {
    positions: state.app.positionDictionary,
    config: state.app.config
  }
};

export const BaseSegmentContainer = connect(
  mapStateToProps
)(BaseSegment);
