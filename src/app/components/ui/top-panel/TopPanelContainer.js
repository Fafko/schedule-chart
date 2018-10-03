import {connect} from 'react-redux';
import {TopPanel} from './TopPanel';
import {setScheduleStep, setScheduleStart} from '../../../actions/config';
import {generateTimeLine} from '../../../actions/timeLine';
import {generatePositionDictionary} from '../../../actions/positionDictionary';
import {setIsOpened} from '../../../actions/configurator';

const mapStateToProps = (state) => {
  return {
    config: state.app.config
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setScheduleStep: (step, start) => {
      dispatch(setScheduleStep(step));
      dispatch(generateTimeLine(start, step));
    },
    setScheduleStart: (start, step) => {
      dispatch(setScheduleStart(start));
      dispatch(generatePositionDictionary(start));
      dispatch(generateTimeLine(start, step));
    },
    openConfigurator: () => {
      dispatch(setIsOpened(true));
    }
  }
};

export const TopPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopPanel);
