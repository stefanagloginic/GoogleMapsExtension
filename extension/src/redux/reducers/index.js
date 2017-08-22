import {combineReducers} from 'redux';

/*import your reducers */
import MockReducer from './mock-reducer.js'


const allReducers = combineReducers({
    mockreducer: MockReducer
});

export default allReducers