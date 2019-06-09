import ReduxApp from '../components/ReduxApp';
import { connect } from 'react-redux';
import { plus, minus } from '../actions';

const mapStateToProps = (state) => {
  return {
    number: state.number,
    day: state.day,
    title: state.title,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    plus: (num) => {
      dispatch(plus(num));
    },
    minus: num => {
      dispatch(minus(num));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp);
