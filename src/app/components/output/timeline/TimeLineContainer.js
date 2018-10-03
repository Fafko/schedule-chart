import {connect} from 'react-redux';
import {TimeLine} from './TimeLine';

const mapStateToProps = (state) => {
  return {
    positions: state.app.positionDictionary,
    timeLine: state.app.timeLine,
    config: state.app.config
  }
};

export const TimeLineContainer = connect(
  mapStateToProps
)(TimeLine);
