import {connect} from 'react-redux';
import {BottomSegment} from './BottomSegment';

const mapStateToProps = (state) => {
  return {
    positions: state.app.positionDictionary,
    config: state.app.config
  }
};

export const BottomSegmentContainer = connect(
  mapStateToProps
)(BottomSegment);
