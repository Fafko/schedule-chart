import {connect} from 'react-redux';
import {Configurator} from './Configurator';
import {setIsOpened} from '../../../actions/configurator';

const mapStateToProps = (state) => {
  return {
    config: state.app.config,
    isOpened: state.app.configurator.isOpened
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsOpened: (isOpened) => {
      dispatch(setIsOpened(isOpened));
    }
  }
};

export const ConfiguratorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Configurator);
