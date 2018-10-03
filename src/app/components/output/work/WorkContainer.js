import {connect} from 'react-redux';
import {Work} from './Work';

const mapStateToProps = (state) => {
  return {
    positions: state.app.positionDictionary,
    config: state.app.config
  }
};

export const WorkContainer = connect(
  mapStateToProps
)(Work);
