// third-party
import { combineReducers } from 'redux';

// project import
import auth from './auth';
import menu from './menu';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, auth });

export default reducers;
