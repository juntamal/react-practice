import { combineReducers } from 'redux';

import number from './number';
import day from './day';
import title from './title';

export default combineReducers({
  number,
  title,
  day,
});
